import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    // Email Information
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },

    // Subscription Status
    isActive: {
        type: Boolean,
        default: true
    },

    // Source Tracking
    source: {
        type: String,
        enum: ['blog', 'blogpost', 'homepage', 'other'],
        default: 'blog'
    },

    // Metadata
    ipAddress: {
        type: String
    },
    userAgent: {
        type: String
    },

    // Subscription Dates
    subscribedAt: {
        type: Date,
        default: Date.now
    },
    unsubscribedAt: {
        type: Date
    }

}, {
    timestamps: true
});

// Indexes for better query performance
subscriberSchema.index({ email: 1 });
subscriberSchema.index({ isActive: 1 });
subscriberSchema.index({ createdAt: -1 });

// Method to unsubscribe
subscriberSchema.methods.unsubscribe = function () {
    this.isActive = false;
    this.unsubscribedAt = new Date();
    return this.save();
};

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;
