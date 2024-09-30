import React from 'react';

// Login component
const Login: React.FC = () => {
    // Function to handle email login
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission
        const email = (event.target as HTMLFormElement).email.value; // Get the email value
        const password = (event.target as HTMLFormElement).password.value; // Get the password value
        // Execute the function to login with email
        alert(`Logging in with email: ${email}`);
    };

    // Function to handle Google login
    const loginWithGoogle = () => {
        // Execute the function to login with Google
        alert('Logging in with Google');
    };

    // Function to handle Facebook login
    const loginWithFacebook = () => {
        // Execute the function to login with Facebook
        alert('Logging in with Facebook');
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-center text-2xl mb-4">Login</h2>
                <form id="login-form" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border rounded" required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">Login</button>
                </form>
                <div className="text-center my-4">Or</div>
                <button onClick={loginWithGoogle} className="bg-red-500 text-white w-full p-2 rounded mb-2">Login with Google</button>
                <button onClick={loginWithFacebook} className="bg-blue-700 text-white w-full p-2 rounded">Login with Facebook</button>
                <div className="text-center mt-4">
                    <a href="#" className="text-blue-500">Don't have an account? Register here</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
