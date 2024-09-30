// src/App.tsx
import React from 'react'; // Import React library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router components from react-router-dom
import HomePage from './pages/HomePage'; // Import Home Page component
import LoginPage from './pages/LoginPage'; // Import Login Page component
import RegisterPage from './pages/RegisterPage'; // Import Register Page component
import UserProfilePage from './pages/UserProfilePage'; // Import User Profile Page component
import MyListingsPage from './pages/MyListingsPage'; // Import My Listings Page component
import CreateEditListingPage from './pages/CreateEditListingPage'; // Import Create/Edit Listing Page component
import ListingDetailPage from './pages/ListingDetailPage'; // Import Listing Detail Page component
import SearchResultsPage from './pages/SearchResultsPage'; // Import Search Results Page component
import ChatPage from './pages/ChatPage'; // Import Chat Page component
import ChatConversationPage from './pages/ChatConversationPage'; // Import Chat Conversation Page component
import firebase from 'firebase/app';

const App: React.FC = () => { // Define the App component with React.FC type
    return (
        <Router> {/* Wrap the application in Router to enable routing */}
            <div className="bg-gray-100 min-h-screen"> {/* Set a light gray background and minimum height */}
                <Switch> {/* Switch renders the first matching Route */}
                    <Route path="/" exact component={HomePage} /> {/* Route for Home Page */}
                    <Route path="/login" component={LoginPage} /> {/* Route for Login Page */}
                    <Route path="/register" component={RegisterPage} /> {/* Route for Register Page */}
                    <Route path="/profile" component={UserProfilePage} /> {/* Route for User Profile Page */}
                    <Route path="/my-listings" component={MyListingsPage} /> {/* Route for My Listings Page */}
                    <Route path="/create-edit-listing" component={CreateEditListingPage} /> {/* Route for Create/Edit Listing Page */}
                    <Route path="/listing/:id" component={ListingDetailPage} /> {/* Route for Listing Detail Page with dynamic ID */}
                    <Route path="/search" component={SearchResultsPage} /> {/* Route for Search Results Page */}
                    <Route path="/chat" component={ChatPage} /> {/* Route for Chat Page */}
                    <Route path="/chat/:id" component={ChatConversationPage} /> {/* Route for Chat Conversation Page with dynamic ID */}
                    <Route path="/firebase" src={firebase} />
                </Switch>
            </div>
        </Router>
    );
};

export default App; // Export the App component for use in other parts of the application

// This component sets up the routing for the application using React Router.
// Each Route defines a path and the component to render when that path is accessed.
// The Switch component ensures that only one Route is rendered at a time.
// The exact prop on the home route ensures that it only matches the root path "/" and not other paths that start with "/".
// The Tailwind CSS classes apply a light gray background and set a minimum height for the application.
