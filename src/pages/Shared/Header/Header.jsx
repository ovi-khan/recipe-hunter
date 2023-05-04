import React, { useContext } from "react";
import logoimg from "../../../../public/images/logoimg/thaiFoodLogo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
      <div className="lg:flex justify-between justify-end items-center bg-base-100 bg-orange-500 px-8">
        <div className="lg:flex">
          <Link to="/" className="normal-case text-xl">
            <img
              className="h-14 w-20 object-cover rounded-lg border border-red-500"
              src={logoimg}
              alt=""
            />
          </Link>
        </div>
        <div className="gap-5">
          <div className="gap-10 lg:flex">
            <ActiveLink className="ms-5" to="/">
              Home
            </ActiveLink>
            <ActiveLink className="ms-5" to="/chefDetails">
              Chef Details
            </ActiveLink>
            <ActiveLink className="ms-5" to="/blog">
              Blog
            </ActiveLink>
            <ActiveLink className="ms-5" to="/signUp">
              Sign Up
            </ActiveLink>
            {user?.email ? (
              <button
                onClick={handleLogOut}
                className="bg-slate-500 px-3 py-1 rounded-lg"
              >
                Log Out
              </button>
            ) : (
              <ActiveLink className="ms-5" to="/login">
                Log in
              </ActiveLink>
            )}
            {/* <li>{user?.email}</li>  */}
          <div className="">
            {user && (
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img className="object-cover" src={user?.photoURL} />
                </div>
              </label>
            )}
          </div>
          </div>
        </div>
      </div>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
// import ActiveLink from '../ActiveLink/ActiveLink';
// import logoimg from "../../../../public/images/logoimg/thaiFoodLogo.jpg";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../provider/AuthProvider";
// import ActiveLink from "../ActiveLink/ActiveLink";

// const Header = () => {
//     const [open, setOpen] = useState(false)

// const { user, logOut } = useContext(AuthContext);
// // console.log(user?.email)
// const handleLogOut = () => {
//   logOut()
//     .then()
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
    
    
//     return (
//         <nav className='mt-5 mx-10'>
//             <div className='md:hidden' onClick={() => setOpen(!open)}>
//                 <span>{open == true?<XMarkIcon className="h-6 w-6 text-blue-500" />: <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            
            
//             </div>
//             <ul className={`md:flex gap-5 duration-1000 absolute md:static bg-slate-300 p-5 ${open ? 'left-14': '-left-48'}`}>
//             <Link to="/" className="normal-case text-xl">
//            <img
//               className="h-14 w-20 object-cover rounded-lg border border-red-500"
//               src={logoimg}
//               alt=""
//               />
//           </Link>
//             </ul>
//         <div className="gap-5">
//           <div className="gap-10 lg:flex">
//             <ActiveLink className="ms-5" to="/">
//               Home
//             </ActiveLink>
//             <ActiveLink className="ms-5" to="/chefDetails">
//               Chef Details
//             </ActiveLink>
//             <ActiveLink className="ms-5" to="/blog">
//               Blog
//             </ActiveLink>
//             <ActiveLink className="ms-5" to="/signUp">
//               Sign Up
//             </ActiveLink>
//             {user?.email ? (
//               <button
//                 onClick={handleLogOut}
//                 className="bg-slate-500 px-3 py-1 rounded-lg"
//               >
//                 Log Out
//               </button>
//             ) : (
//               <ActiveLink className="ms-5" to="/login">
//                 Log in
//               </ActiveLink>
//             )}
//             {/* <li>{user?.email}</li>  */}
//           <div className="">
//             {user && (
//               <label className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full">
//                   <img className="object-cover" src={user?.photoURL} />
//                 </div>
//               </label>
//             )}
//           </div>
//            </div>
//             </div>
            
//         </nav>
//     );
// };

// export default Header;
