import { body, validationResult } from 'express-validator';

// Validation rules for contact form
export const contactValidationRules = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email address')
        .normalizeEmail(),

    body('phone')
        .optional()
        .trim()
        .matches(/^[\d\s\-\+\(\)]{10,}$/).withMessage('Please enter a valid phone number'),

    body('company')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Company name cannot exceed 100 characters'),

    body('website')
        .optional({ checkFalsy: true })
        .trim()
        .isURL().withMessage('Please enter a valid URL'),

    body('subject')
        .trim()
        .notEmpty().withMessage('Subject is required')
        .isLength({ min: 3, max: 200 }).withMessage('Subject must be between 3 and 200 characters'),

    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 20, max: 2000 }).withMessage('Message must be between 20 and 2000 characters'),

    body('reason')
        .optional()
        .isIn(['general', 'project', 'internship', 'freelance', 'opensource', 'mentorship'])
        .withMessage('Invalid contact reason'),

    body('location')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Location cannot exceed 100 characters'),

    body('jobTitle')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Job title cannot exceed 100 characters'),

    body('preferredContact')
        .optional()
        .isIn(['email', 'phone', 'either'])
        .withMessage('Invalid preferred contact method'),

    body('hearAbout')
        .optional()
        .isIn(['LinkedIn', 'GitHub', 'Google Search', 'Referral', 'College/University', 'Hackathon', 'Other', ''])
        .withMessage('Invalid source')
];

// Middleware to check validation results
export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }

    next();
};
