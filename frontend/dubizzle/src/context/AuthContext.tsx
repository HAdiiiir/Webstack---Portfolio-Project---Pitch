import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Create the AuthContext
const AuthContext = createContext<any>(null);

// Custom hook to simulate authentication
const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<string | null>(null); // Simulate current user

    // Simulate loading and user retrieval
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 2 seconds
            // Optionally set a user, e.g., setCurrentUser('John Doe');
        }, 2000);
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return { currentUser, loading }; // Return user and loading state
};

// Define the type for AuthProvider props
interface AuthProviderProps {
    children: ReactNode; // Define children as ReactNode
}

// AuthProvider component to manage the authentication context
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const auth = useAuth(); // Call the useAuth hook

    return (
        <AuthContext.Provider value={auth}>
            {auth.loading ? (
                <p className="text-center">Loading...</p> // Show loading message
            ) : (
                <div className="text-center">
                    {/* Check authentication state */}
                    <p>
                        {auth.currentUser ? `Welcome, ${auth.currentUser}!` : "You are not logged in."}
                    </p>
                    {children} {/* Render any children components */}
                </div>
            )}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
    return useContext(AuthContext); // Access the AuthContext
};

// Sample component to demonstrate the AuthProvider usage
const AuthExample: React.FC = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-center text-2xl mb-4">Authentication Context Example</h2>
                <AuthProvider>
                    {/* Other components can go here */}
                    <p>Additional content can be placed here.</p>
                </AuthProvider>
            </div>
        </div>
    );
};

export default AuthExample;
