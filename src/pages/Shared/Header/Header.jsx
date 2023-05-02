import React from "react";
import logoimg from "../../../../public/images/logoimg/thaiFoodLogo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 bg-zinc-500 px-8">
      <div className="flex-1">
        <a className="normal-case text-xl">
            <img className="h-14 w-20 object-cover rounded-lg border border-red-500" src={logoimg} alt="" />
        </a>
      </div>
      <div className="gap-5">
        <div className="">
            <Link className="ms-5" to='/'>Home</Link>
            <Link className="ms-5" to='/blog'>Blog</Link>
        </div>
        <div className="">
          <label  className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img className="object-cover" src="https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?pid=ImgDet&rs=1" />
            </div>
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
