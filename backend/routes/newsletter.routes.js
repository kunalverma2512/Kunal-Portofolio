import express from 'express';
import { body, validationResult } from 'express-validator';
import { subscribeNewsletter, getSubscriberCount } from '../controllers/newsletter.controller.js';

const router = express.Router();

/**
 * @route   POST /api/newsletter/subscribe
 * @desc    Subscribe to newsletter
 * @access  Public
 */
router.post('/subscribe',
    [
        body('email')
            .trim()
            .notEmpty()
            .withMessage('Email is required')
            .isEmail()
            .withMessage('Please provide a valid email address')
            .normalizeEmail(),
        body('source')
            .optional()
            .isIn(['blog', 'blogpost', 'homepage', 'other'])
            .withMessage('Invalid source')
    ],
    // Validation middleware
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg
            });
        }
        next();
    },
    subscribeNewsletter
);

/**
 * @route   GET /api/newsletter/count
 * @desc    Get active subscriber count
 * @access  Public
 */
router.get('/count', getSubscriberCount);

export default router;
