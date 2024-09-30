import React from 'react';

// Function to simulate accessing listing data
const useListings = () => {
    // Normally, this function would access the ListingsContext
    // Here we simulate a static list for demonstration purposes
    const listings = [
        { id: 1, name: "Listing Item 1" },
        { id: 2, name: "Listing Item 2" },
        { id: 3, name: "Listing Item 3" },
    ];
    return listings; // Return the listings array
};

// Listings component
const Listings: React.FC = () => {
    // Call the useListings function to get the listings data
    const listings = useListings();

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-center text-2xl mb-4">Listings</h2>
                <ul className="space-y-4">
                    {/* Loop through listings and create list items */}
                    {listings.map((listing) => (
                        <li key={listing.id} className="bg-gray-200 p-4 rounded">
                            {listing.name} {/* Display the listing name */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Listings;
