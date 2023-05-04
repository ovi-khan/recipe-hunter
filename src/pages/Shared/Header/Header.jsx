import React, { useContext } from "react";
import logoimg from "../../../../public/images/logoimg/thaiFoodLogo.jpg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider"
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  // console.log(user?.email)
  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div className="navbar bg-base-100 bg-orange-500 px-8">
      <div className="flex-1">
        <Link to='/' className="normal-case text-xl">
            <img className="h-14 w-20 object-cover rounded-lg border border-red-500" src={logoimg} alt="" />
        </Link>
      </div>
      <div className="gap-5">
        <ul className="gap-10 flex flex-row">
        <ActiveLink className="ms-5" to='/'>Home</ActiveLink>
        <ActiveLink className="ms-5" to='/chefDetails'>Chef Details</ActiveLink>
            <ActiveLink className="ms-5" to='/signUp'>Sign Up</ActiveLink>
            { user?.email ? (
                 <button onClick={handleLogOut} className="btn">Log Out</button>
            ):(
                <ActiveLink className="ms-5" to='/login'>Log in</ActiveLink>
              )}
              {/* <li>{user?.email}</li>  */}
            <ActiveLink className="ms-5" to='/blog'>Blog</ActiveLink>
        </ul>
        <div className="">
         { user && <label  className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img className="object-cover" src={user?.photoURL} />
            </div>
          </label>}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
