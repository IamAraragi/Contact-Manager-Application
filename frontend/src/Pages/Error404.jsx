import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <div className="container mx-auto py-16 h-full">
        <div className="space-y-12 h-full flex flex-col items-center justify-center">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-6xl">404 - Page not found</h1>
            <p className="text-xl">
              We can't find the page you are looking for.
            </p>
          </div>
          <Link
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap flex items-center space-x-2"
            to="/"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
