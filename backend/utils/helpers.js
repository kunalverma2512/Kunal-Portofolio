/**
 * Format error messages from API response
 * @param {Object} error - Error object from API
 * @returns {String} - Formatted error message
 */
export const formatErrorMessage = (error) => {
    if (error.response?.data?.errors) {
        return error.response.data.errors.map(err => err.message).join(', ');
    }

    if (error.response?.data?.message) {
        return error.response.data.message;
    }

    return 'Something went wrong. Please try again later.';
};

/**
 * Check if email is valid
 * @param {String} email 
 * @returns {Boolean}
 */
export const isValidEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
};

/**
 * Check if phone is valid
 * @param {String} phone 
 * @returns {Boolean}
 */
export const isValidPhone = (phone) => {
    if (!phone) return true; // Phone is optional
    return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
};

/**
 * Sanitize input to prevent XSS
 * @param {String} input 
 * @returns {String}
 */
export const sanitizeInput = (input) => {
    return input.trim().replace(/<[^>]*>/g, '');
};
