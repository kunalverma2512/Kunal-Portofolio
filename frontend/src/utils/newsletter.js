import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

/**
 * Subscribe to newsletter
 * @param {string} email - User's email address
 * @param {string} source - Source of subscription (blog, blogpost, etc.)
 * @returns {Promise} API response
 */
export const subscribeToNewsletter = async (email, source = 'blog') => {
    try {
        const response = await axios.post(`${API_BASE_URL}/newsletter/subscribe`, {
            email,
            source
        });
        return {
            success: true,
            message: response.data.message,
            data: response.data.data
        };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || 'Failed to subscribe. Please try again.',
            error: error.response?.data
        };
    }
};

/**
 * Get subscriber count
 * @returns {Promise} Subscriber count
 */
export const getSubscriberCount = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/newsletter/count`);
        return {
            success: true,
            count: response.data.data.count
        };
    } catch (error) {
        return {
            success: false,
            count: 0
        };
    }
};
