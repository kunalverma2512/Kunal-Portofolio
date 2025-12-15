import Subscriber from '../models/Subscriber.model.js';
import sendNewsletterNotification from '../utils/newsletterEmail.js';

/**
 * Subscribe to newsletter
 * @route POST /api/newsletter/subscribe
 */
export const subscribeNewsletter = async (req, res) => {
    try {
        const { email, source = 'blog' } = req.body;

        // Check if email already exists
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            // If they previously unsubscribed, reactivate
            if (!existingSubscriber.isActive) {
                existingSubscriber.isActive = true;
                existingSubscriber.subscribedAt = new Date();
                existingSubscriber.unsubscribedAt = null;
                existingSubscriber.source = source;
                await existingSubscriber.save();

                // Send reactivation notification to Admin
                try {
                    await sendNewsletterNotification({
                        email: existingSubscriber.email,
                        source: existingSubscriber.source,
                        subscribedAt: existingSubscriber.subscribedAt,
                        ipAddress: req.ip || req.connection.remoteAddress
                    }, 'ADMIN');
                    console.log('Reactivation email notification sent to admin');

                    // Send Welcome Email to User
                    await sendNewsletterNotification({
                        email: existingSubscriber.email
                    }, 'WELCOME');
                    console.log('Welcome email sent to user');

                } catch (emailError) {
                    console.error('Failed to send email:', emailError);
                }

                return res.status(200).json({
                    success: true,
                    message: 'Welcome back! Your subscription has been reactivated.',
                    data: {
                        email: existingSubscriber.email
                    }
                });
            }

            // Already subscribed and active
            return res.status(200).json({
                success: true,
                message: 'You are already subscribed to our newsletter!',
                data: {
                    email: existingSubscriber.email
                }
            });
        }

        // Create new subscriber
        const subscriber = new Subscriber({
            email,
            source,
            ipAddress: req.ip || req.connection.remoteAddress,
            userAgent: req.get('user-agent')
        });

        await subscriber.save();

        // Send email notifications
        try {
            // 1. Send Admin Notification
            await sendNewsletterNotification({
                email: subscriber.email,
                source: subscriber.source,
                subscribedAt: subscriber.subscribedAt,
                ipAddress: subscriber.ipAddress
            }, 'ADMIN');
            console.log('Admin notification sent');

            // 2. Send Welcome Email to User
            await sendNewsletterNotification({
                email: subscriber.email
            }, 'WELCOME');
            console.log('Welcome email sent to user');

        } catch (emailError) {
            console.error('Failed to send email notifications:', emailError);
            // Don't fail the request if email fails
        }

        res.status(201).json({
            success: true,
            message: 'Successfully subscribed to the newsletter! Thank you!',
            data: {
                email: subscriber.email,
                subscribedAt: subscriber.subscribedAt
            }
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);

        // Handle duplicate key error (race condition)
        if (error.code === 11000) {
            return res.status(200).json({
                success: true,
                message: 'You are already subscribed to our newsletter!'
            });
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: messages[0] || 'Validation failed'
            });
        }

        // Generic error
        res.status(500).json({
            success: false,
            message: 'Failed to subscribe. Please try again later.'
        });
    }
};

/**
 * Get subscriber count (optional - for admin dashboard)
 * @route GET /api/newsletter/count
 */
export const getSubscriberCount = async (req, res) => {
    try {
        const count = await Subscriber.countDocuments({ isActive: true });

        res.status(200).json({
            success: true,
            data: {
                count
            }
        });

    } catch (error) {
        console.error('Get subscriber count error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch subscriber count'
        });
    }
};
