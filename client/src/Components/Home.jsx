// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Headers from './Headers';
// const Home = () => {

//   const navigate = useNavigate();

//   const getUser = async () => {
//     try {
//         const response = await axios.get("http://localhost:5000/login/sucess", { withCredentials: true });

//         console.log("response",response)
//     } catch (error) {
//       navigate("*")
//     }
// }


// useEffect(() => {
//   getUser()
// }, [])
//  // Hook to handle navigation

// return (
//     <div>
//         <h1>Welcome to the Tender System</h1>
//         <button onClick={() => navigate('/PostCargo')}>
//             Post Cargo
//         </button>
//         <button onClick={() => navigate('/BidCargo')}>
//             Bid Cargo
//         </button>
//     </div>
// );
// }

// export default Home

import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Headers from './Headers';

const Home = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/login/sucess", { withCredentials: true });
      console.log("response", response);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#394855] text-white px-6">
      <h1 className="text-4xl font-bold mb-12">Welcome to the Tender System</h1>
      <div className="flex space-x-6">
        <button 
          onClick={() => navigate('/PostCargo')} 
          className="px-10 py-3 bg-[#4A90E2] hover:bg-[#357ABD] text-white text-xl font-medium rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
          Post Cargo
        </button>
        <button 
          onClick={() => navigate('/BidCargo')} 
          className="px-10 py-3 bg-[#50C878] hover:bg-[#3EA75F] text-white text-xl font-medium rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
          Bid Cargo
        </button>
      </div>
    </div>
  );
};

export default Home;
