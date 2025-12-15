import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    // Personal Information
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        trim: true,
        match: [/^[\d\s\-\+\(\)]{10,}$/, 'Please enter a valid phone number']
    },

    // Contact Details
    company: {
        type: String,
        trim: true,
        maxlength: [100, 'Company name cannot exceed 100 characters']
    },
    website: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+/, 'Please enter a valid URL']
    },

    // Message Details
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true,
        minlength: [3, 'Subject must be at least 3 characters long'],
        maxlength: [200, 'Subject cannot exceed 200 characters']
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        minlength: [20, 'Message must be at least 20 characters long'],
        maxlength: [2000, 'Message cannot exceed 2000 characters']
    },

    // Contact Metadata
    reason: {
        type: String,
        enum: ['general', 'project', 'internship', 'freelance', 'opensource', 'mentorship'],
        default: 'general'
    },
    location: {
        type: String,
        trim: true,
        maxlength: [100, 'Location cannot exceed 100 characters']
    },
    jobTitle: {
        type: String,
        trim: true,
        maxlength: [100, 'Job title cannot exceed 100 characters']
    },
    preferredContact: {
        type: String,
        enum: ['email', 'phone', 'either'],
        default: 'email'
    },
    hearAbout: {
        type: String,
        enum: ['LinkedIn', 'GitHub', 'Google Search', 'Referral', 'College/University', 'Hackathon', 'Other', '']
    },

    // Status & Tracking
    status: {
        type: String,
        enum: ['new', 'read', 'replied', 'archived'],
        default: 'new'
    },
    isReplied: {
        type: Boolean,
        default: false
    },
    repliedAt: {
        type: Date
    },
    notes: {
        type: String,
        maxlength: [1000, 'Notes cannot exceed 1000 characters']
    },

    // IP & Browser Info (for spam prevention)
    ipAddress: {
        type: String
    },
    userAgent: {
        type: String
    },

}, {
    timestamps: true
});

// Indexes for better query performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });


const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
