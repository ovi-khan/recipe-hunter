import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  // console.log(error.message, status);
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 border border-orange-800 rounded-lg p-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="30" fill="#95252"></circle>
          <path
            d="M44 22H20a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V24a2 2 0 0 0-2-2zm-12 14h-4v-4h4v4zm0-6h-4v-6h4v6z"
            fill="red"
          >
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="3s"
              repeatCount="indefinite"
            ></animate>
          </path>
          <circle cx="40" cy="24" r="4" fill="white">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="5s"
              repeatCount="indefinite"
            ></animate>
          </circle>
          <circle cx="24" cy="24" r="4" fill="white">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </circle>
        </svg>

        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-orange-400">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 rounded-xl font-semibold bg-gray-600 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
