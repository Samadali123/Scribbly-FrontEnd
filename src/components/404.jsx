import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // optional: for icon

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col justify-center items-center px-6 py-12 text-center">
      <h1 className="text-7xl md:text-9xl font-bold text-red-500 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg md:text-xl text-zinc-300 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-1 rounded-full shadow-sm cursor-pointer uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
