import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="w-[30%] mx-auto p-10 mt-10 bg-red-200 rounded-lg shadow-lg shadow-red-400">
      <h1 className="text-3xl font-bold text-center mb-5">Log In Here</h1>
      <form>
        <input
          className="bg-orange-800   mb-3 px-14 py-2 rounded-lg"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your @exam.com"
          required
        />
        <br />
        <input
          className="bg-orange-800  mb-3 px-14 py-2 rounded-lg"
          type="password"
          name="password"
          id="password"
          placeholder="password here"
          required
        />
        <br />
        {/* <p className="text-red-800 pb-3 font-semibold">{ error }</p> */}
        {/* <p className="text-green-600 pb-3 font-semibold">{success}</p> */}
        <input
          className="bg-orange-400 hover:bg-orange-700 px-8 py-2 rounded-lg font-bold"
          type="submit"
          value="LogIn Now"
        />
        <p className="">
          <small>
            If you couldn't registred, please
            <Link className="link" to="/signUp">
              Sign Up
            </Link>
          </small>
        </p>
      </form>
    </div>
    );
};

export default Login;   