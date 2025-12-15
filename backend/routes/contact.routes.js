import express from 'express';
import {
    submitContact,
    getAllContacts,
    getContactById,
    updateContactStatus,
    deleteContact
} from '../controllers/contact.controller.js';
import { contactValidationRules, validate } from '../middleware/validator.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post('/', contactValidationRules, validate, submitContact);

/**
 * @route   GET /api/contact
 * @desc    Get all contacts (admin only - for future use)
 * @access  Private (will add auth middleware later)
 */
router.get('/', getAllContacts);

/**
 * @route   GET /api/contact/:id
 * @desc    Get single contact by ID
 * @access  Private
 */
router.get('/:id', getContactById);

/**
 * @route   PATCH /api/contact/:id
 * @desc    Update contact status
 * @access  Private
 */
router.patch('/:id', updateContactStatus);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete contact
 * @access  Private
 */
router.delete('/:id', deleteContact);

export default router;
