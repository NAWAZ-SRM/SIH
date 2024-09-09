// import React, { useEffect } from 'react';
// import './header.css';
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navItems = ['Home', 'About Us', 'Our Aim', 'Contact us'];

//   return (
//     <header className=" bg-grey-900 flex flex-wrap gap-10 w-full text-2xl text-white max-w-[1354px] max-md:max-w-full">
//       <h1 className="grow shrink text-5xl w-[154px] max-md:text-4xl">FREIGHT X</h1>
//       {/* <nav className="flex gap-10 my-auto max-md:max-w-full">
//         {navItems.map((item, index) => (
//           <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={index} className="hover:underline">
//             {item}
//           </a>
//         ))}
//       </nav> */}
//       <div className="bg-grey-900 flex gap-4 self-start">
//         <NavLink to="/Login" className="overflow-hidden px-3.5 py-2 border border-white border-solid rounded-[50px] shadow-[0px_0px_4px_rgba(255,255,255,1)]">
//           Sign Up
//         </NavLink>
//         <NavLink to="/Login" className="overflow-hidden px-5 py-2 border border-white border-solid rounded-[51px] shadow-[0px_0px_4px_rgba(255,255,255,1)]">
//           Sign In
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navItems = ['Home', 'About Us', 'Our Aim', 'Contact us'];

  return (
    <header className="bg-gray-900 flex flex-wrap gap-10 w-full text-2xl text-white max-w-[1354px] max-md:max-w-full py-4 px-8 shadow-lg">
      <h1 className="grow shrink text-5xl w-[154px] max-md:text-4xl font-bold">FREIGHT X</h1>
      {/* Uncomment if you want the nav items */}
      {/* <nav className="flex gap-10 my-auto max-md:max-w-full">
        {navItems.map((item, index) => (
          <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={index} className="hover:underline">
            {item}
          </a>
        ))}
      </nav> */}
      <div className="flex gap-4 self-start">
        {/* <NavLink 
          to="/Login" 
          className="px-4 py-2 border border-white rounded-full text-white shadow-lg hover:bg-white hover:text-[#394855] transition duration-300 ease-in-out"
        >
          Sign Up
        </NavLink> */}
        <NavLink 
          to="/Login" 
          className="px-5 py-2 border border-white rounded-full text-white shadow-lg hover:bg-white hover:text-[#394855] transition duration-300 ease-in-out"
        >
          Sign In
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
