import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
    baseURL: 'https://api.example.com', // Replace with your actual API base URL
});

// Define the types for the API calls
interface LoginData {
    email: string;
    password: string;
}

interface UserData {
    // Define user data properties based on your requirements
    name: string;
    email: string;
    password: string;
}

interface ListingData {
    // Define listing data properties based on your requirements
    title: string;
    description: string;
    price: number;
}

// Example API calls
export const login = (data: LoginData) => api.post('/login', data);
export const register = (userData: UserData) => api.post('/register', userData);
export const getListings = () => api.get('/listings');
export const createListing = (listingData: ListingData) => api.post('/listings', listingData);
export const sendMessage = (messageData: { content: string; recipientId: string }) => api.post('/messages', messageData);

export default api;

// This file centralizes all API calls using Axios for easy management and reuse.
