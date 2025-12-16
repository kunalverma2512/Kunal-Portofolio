import axios from 'axios';

// Create a centralized Axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Request Interceptor (Optional: for logging or auth tokens in future)
api.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor (for standardized error handling)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Standardize error message
        const customError = {
            message: error.response?.data?.message || error.message || 'Something went wrong',
            status: error.response?.status,
            data: error.response?.data
        };
        return Promise.reject(customError);
    }
);

// --- API Functions ---

/**
 * Submit the contact form
 * @param {Object} data - Form data (name, email, message, etc.)
 * @returns {Promise} API response
 */
export const submitContactForm = async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
};

/**
 * Subscribe to the newsletter
 * @param {string} email - User's email
 * @param {string} source - Source page (blog, etc.)
 * @returns {Promise} API response
 */
export const subscribeToNewsletter = async (email, source = 'blog') => {
    const response = await api.post('/newsletter/subscribe', { email, source });
    return response.data;
};

/**
 * Get subscriber count
 * @returns {Promise} Count value
 */
export const getSubscriberCount = async () => {
    const response = await api.get('/newsletter/count');
    return response.data; // Expecting { success: true, count: 123 }
};

export default api;
