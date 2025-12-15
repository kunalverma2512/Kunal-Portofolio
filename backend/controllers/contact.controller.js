import Contact from '../models/Contact.model.js';
import sendEmail from '../utils/email.js';

/**
 * @desc    Submit contact form
 * @route   POST /api/contact
 * @access  Public
 */
export const submitContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            company,
            website,
            subject,
            message,
            reason,
            location,
            jobTitle,
            preferredContact,
            hearAbout
        } = req.body;

        // Get IP address and user agent for spam prevention
        const ipAddress = req.ip || req.connection.remoteAddress;
        const userAgent = req.get('user-agent');

        // Create new contact entry
        const contact = new Contact({
            name,
            email,
            phone,
            company,
            website,
            subject,
            message,
            message,
            reason,
            location,
            jobTitle,
            preferredContact,
            hearAbout,
            ipAddress,
            userAgent
        });

        // Save to database
        await contact.save();

        // Send email notification
        try {
            await sendEmail({
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                company: contact.company,
                location: contact.location,
                jobTitle: contact.jobTitle,
                subject: contact.subject,
                message: contact.message,
                reason: contact.reason,
                ipAddress: contact.ipAddress,
                to: process.env.EMAIL_USER // Send to owner
            });
            console.log('Email notification sent successfully');
        } catch (emailError) {
            console.error('Failed to send email notification:', emailError);
            // Don't fail the request if email fails, just log it
        }

        res.status(201).json({
            success: true,
            message: 'Thank you for reaching out! I will get back to you soon.',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email,
                subject: contact.subject
            }
        });

    } catch (error) {
        console.error('Contact submission error:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Full error:', JSON.stringify(error, null, 2));

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => ({
                field: err.path,
                message: err.message
            }));

            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

/**
 * @desc    Get all contacts (admin only - for future use)
 * @route   GET /api/contact
 * @access  Private (will add auth later)
 */
export const getAllContacts = async (req, res) => {
    try {
        const { status, page = 1, limit = 10 } = req.query;

        const query = {};
        if (status) query.status = status;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .select('-ipAddress -userAgent'); // Don't expose IP and user agent

        const total = await Contact.countDocuments(query);

        res.json({
            success: true,
            data: contacts,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contacts'
        });
    }
};

/**
 * @desc    Get single contact by ID (admin only - for future use)
 * @route   GET /api/contact/:id
 * @access  Private
 */
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            data: contact
        });

    } catch (error) {
        console.error('Get contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contact'
        });
    }
};

/**
 * @desc    Update contact status (admin only - for future use)
 * @route   PATCH /api/contact/:id
 * @access  Private
 */
export const updateContactStatus = async (req, res) => {
    try {
        const { status, notes, isReplied } = req.body;

        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        if (status) contact.status = status;
        if (notes !== undefined) contact.notes = notes;
        if (isReplied !== undefined) {
            contact.isReplied = isReplied;
            if (isReplied && !contact.repliedAt) {
                contact.repliedAt = new Date();
            }
        }

        await contact.save();

        res.json({
            success: true,
            message: 'Contact updated successfully',
            data: contact
        });

    } catch (error) {
        console.error('Update contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update contact'
        });
    }
};

/**
 * @desc    Delete contact (admin only - for future use)
 * @route   DELETE /api/contact/:id
 * @access  Private
 */
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            message: 'Contact deleted successfully'
        });

    } catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete contact'
        });
    }
};
