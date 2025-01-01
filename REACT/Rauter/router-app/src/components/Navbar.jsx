import React from 'react'
import { Link , NavLink , Outlet} from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <nav className="flex justify-around items-center p-5  mb-6 bg-[#2e242436]">
//         <div className="text-4xl ">Logo</div>
//         <div>
//           <ul className="flex  gap-5">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">AboutUS</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }


const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex justify-around items-center p-5  mb-6 bg-[#2e242436] text-white px-8">
          <div className="text-4xl ">Logo</div>
          <div>
            <ul className="flex  gap-5">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">AboutUS</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/loderdata">loderdata</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}; 

export default Navbar
