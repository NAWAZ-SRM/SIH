// import React, { useState, useEffect } from 'react';

// function PostCargo() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [weight, setWeight] = useState('');
//     const [isHazardous, setIsHazardous] = useState(false);
//     const [origin, setOrigin] = useState('');
//     const [destination, setDestination] = useState('');
//     const [estimatedPrice, setEstimatedPrice] = useState(null);
//     const [error, setError] = useState('');
//     const [bids, setBids] = useState([]);
//     const [cargoId, setCargoId] = useState(null);
//     const [timeLeft, setTimeLeft] = useState(0); // Timer state

//     useEffect(() => {
//         if (cargoId) {
//             const interval = setInterval(() => {
//                 fetchRemainingTime();
//             }, 1000);

//             return () => clearInterval(interval);
//         }
//     }, [cargoId]);

//     const fetchRemainingTime = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/cargo/${cargoId}/time`);
//             if (!response.ok) throw new Error('Failed to fetch remaining time');
//             const { remainingTime } = await response.json();
//             setTimeLeft(remainingTime);
//         } catch (error) {
//             console.error('Error fetching remaining time:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const cargoResponse = await fetch('http://localhost:5000/api/cargo', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ title, description, weight, isHazardous, origin, destination }),
//             });

//             if (!cargoResponse.ok) throw new Error('Failed to post cargo');
//             alert('Cargo posted successfully');
//             const cargoData = await cargoResponse.json();
//             setCargoId(cargoData.id);

//             const priceResponse = await fetch('http://127.0.0.1:5001/api/predict', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     weight : parseFloat(weight),
//                     // loading_meter: parseFloat(loadingMeter), // Send loading_meter to the Flask API
//                     origin: origin,
//                     destination: destination
                     
//                 }),
//             });

//             if (!priceResponse.ok) throw new Error('Failed to fetch estimated price');
//             const priceData = await priceResponse.json();
//             let price;
//             if (priceData.predictions && priceData.predictions.length > 0) {
//                 price = priceData.predictions[0];
//               } else {
//                 console.error('No price predictions available');
//               }
//             console.log('Price before multiplication:', price);
//             console.log('Is hazardous:', isHazardous);
//             if (isHazardous) {
//                 price = price * 1.5;
//             }
//             console.log('Price after multiplication:', price);
//             setEstimatedPrice(price);
//             setError('');

//             fetchBids(cargoData.id);
//         } catch (error) {
//             setError(error.message);
//             setEstimatedPrice(null);
//         }
//     };

//     const fetchBids = async (cargoId) => {
//         try {
//             if (!cargoId) throw new Error('Invalid cargoId');
//             const bidsResponse = await fetch(`http://localhost:5000/api/bids/${cargoId}`);
//             if (!bidsResponse.ok) throw new Error('Failed to fetch bids');
//             const bidsData = await bidsResponse.json();
//             setBids(bidsData.bids || []); // Default to empty array if bidsData.bids is undefined
//         } catch (error) {
//             console.error('Error fetching bids:', error);
//             setBids([]); // Clear bids on error
//         }
//     };

//     const formatTime = (seconds) => {
//         const hours = Math.floor(seconds / 3600);
//         const minutes = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;
//         return `${hours}h ${minutes}m ${secs}s`;
//     };

//     return (
//         <div>
//             <h1>Post Cargo</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Title:
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//                 </label>
//                 <br />
//                 <label>
//                     Description:
//                     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
//                 </label>
//                 <br />
//                 <label>
//                     Weight:
//                     <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
//                 </label>
//                 <br />
//                 <label>
//                     Origin:
//                     <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
//                 </label>
//                 <br />
//                 <label>
//                     Destination:
//                     <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
//                 </label>
//                 <br />
//                 <label>
//                     Hazardous:
//                     <input type="checkbox" checked={isHazardous} onChange={(e) => setIsHazardous(e.target.checked)} />
//                 </label>
//                 <br />
//                 <button type="submit">Post Cargo</button>
//             </form>

//             {cargoId && (
//                 <div>
//                     <h2>Time Left for Cargo Posting</h2>
//                     <p>{formatTime(timeLeft)}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default PostCargo;

import React, { useState, useEffect } from 'react';

function PostCargo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [isHazardous, setIsHazardous] = useState(false);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState(null);
    const [error, setError] = useState('');
    const [bids, setBids] = useState([]);
    const [cargoId, setCargoId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (cargoId) {
            const interval = setInterval(() => {
                fetchRemainingTime();
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [cargoId]);

    const fetchRemainingTime = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/cargo/${cargoId}/time`);
            if (!response.ok) throw new Error('Failed to fetch remaining time');
            const { remainingTime } = await response.json();
            setTimeLeft(remainingTime);
        } catch (error) {
            console.error('Error fetching remaining time:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const cargoResponse = await fetch('http://localhost:5000/api/cargo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, weight, isHazardous, origin, destination }),
            });

            if (!cargoResponse.ok) throw new Error('Failed to post cargo');
            alert('Cargo posted successfully');
            const cargoData = await cargoResponse.json();
            setCargoId(cargoData.id);

            const priceResponse = await fetch('http://127.0.0.1:5001/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    weight: parseFloat(weight),
                    origin: origin,
                    destination: destination
                }),
            });

            if (!priceResponse.ok) throw new Error('Failed to fetch estimated price');
            const priceData = await priceResponse.json();
            let price = priceData.predictions?.[0];
            if (isHazardous) price *= 1.5;
            setEstimatedPrice(price);
            setError('');
        } catch (error) {
            setError(error.message);
            setEstimatedPrice(null);
        }
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours}h ${minutes}m ${secs}s`;
    };

    return (
        <div className="min-h-screen bg-[#394855] flex flex-col items-center justify-center text-white py-12 px-6">
            <h1 className="text-4xl font-bold mb-8">Post Cargo</h1>
            <form onSubmit={handleSubmit} className="bg-[#4A90E2] rounded-lg shadow-lg p-8 space-y-6 max-w-lg w-full">
                <div>
                    <label className="block text-lg font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#357ABD]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold mb-2">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#357ABD]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold mb-2">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#357ABD]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold mb-2">Origin</label>
                    <input
                        type="text"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#357ABD]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold mb-2">Destination</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#357ABD]"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isHazardous}
                        onChange={(e) => setIsHazardous(e.target.checked)}
                        className="mr-2"
                    />
                    <label className="text-lg font-semibold">Hazardous Cargo</label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#50C878] hover:bg-[#3EA75F] text-white py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Post Cargo
                </button>
            </form>

            {cargoId && (
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold">Time Left for Cargo Posting</h2>
                    <p className="text-2xl mt-2">{formatTime(timeLeft)}</p>
                </div>
            )}

            {error && (
                <div className="mt-4 text-red-500 font-semibold">
                    {error}
                </div>
            )}
        </div>
    );
}

export default PostCargo;
