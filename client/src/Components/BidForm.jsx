import React, { useState, useEffect } from 'react';

function BidForm({ cargoId, userdata }) {
    const [bidAmount, setBidAmount] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [bidCount, setBidCount] = useState(() => {
        const storedBidCount = localStorage.getItem('bidCount');
        return storedBidCount ? JSON.parse(storedBidCount) : {};
    });

    useEffect(() => {
        localStorage.setItem('bidCount', JSON.stringify(bidCount));
    }, [bidCount]);

    // Debugging: log userdata to check if it is passed correctly
    useEffect(() => {
        console.log('Userdata in BidForm:', userdata); // Check if userdata is being passed
        if (userdata && userdata.displayName) {
            setCompanyName(userdata.displayName);
        }
    }, [userdata]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bidCount[cargoId]) {
            alert('You have already placed a bid for this cargo.');
            return;
        }
        try {
            const timestamp = new Date().getTime();
            const response = await fetch('http://localhost:5000/api/bids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cargoId, bidAmount, companyName, timestamp }),
            });
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            alert('Bid submitted successfully');
            setBidCount((prevBidCount) => ({ ...prevBidCount, [cargoId]: true }));
        } catch (error) {
            console.error('Error submitting bid:', error);
            alert('Failed to submit bid. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Company Name: {companyName || 'Loading...'}</label> {/* Show loading until it is set */}
            </div>
            {/* <div>
                <label>Bid Amount:</label>
                <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    required
                />
            </div> */}
            <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-1">Bid Amount:</label>
    <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        required
        className=" p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
</div>

            <button type="submit" className='px-4 py-2 bg-[#394855] text-white rounded-lg shadow hover:bg-[#2e3b43] transition duration-300'>Submit Bid</button>
        </form>
    );
}

export default BidForm;
