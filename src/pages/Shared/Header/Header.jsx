import React, { useContext } from "react";
import logoimg from "../../../../public/images/logoimg/thaiFoodLogo.jpg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider"

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user?.email)
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
        <div className="">
            <Link className="ms-5" to='/'>Home</Link>
            <Link className="ms-5" to='/chefDetails'>Chef Details</Link>
            <Link className="ms-5" to='/signUp'>Sign Up</Link>
            { user?.email ? (
                 <button onClick={handleLogOut} className="btn">Log Out</button>
            ):(
                <Link className="ms-5" to='/login'>Log in</Link>
              )}
              {/* <li>{user?.email}</li>  */}
            <Link className="ms-5" to='/blog'>Blog</Link>
        </div>
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
