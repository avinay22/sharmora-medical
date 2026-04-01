export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Generic API Fetch Utility
 * Handles basic configuration, JSON unboxing, and error handling.
 */
async function fetchApi(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });
    
    // Attempt to parse JSON response. Adjust if your backend team uses a different format occasionally.
    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error((data && data.message) || `API Error: ${response.status} ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(`[API Request Failed] ${endpoint}`, error);
    throw error;
  }
}

/**
 * Backend API Service instance
 * Your team can replace mock data calls with these methods.
 */
export const backendService = {
  // === PRODUCTS ===
  getProducts: (queryParams = '') => fetchApi(`/products${queryParams}`),
  getProductById: (id) => fetchApi(`/products/${id}`),
  
  // === CATEGORIES ===
  getCategories: () => fetchApi('/categories'),
  
  // === INQUIRIES / CONTACT ===
  submitInquiry: (inquiryData) => fetchApi('/inquiries', {
    method: 'POST',
    body: JSON.stringify(inquiryData),
  }),

  // Add more methods below as the backend team develops new endpoints...
  // getUser: (id) => fetchApi(`/users/${id}`),
};
