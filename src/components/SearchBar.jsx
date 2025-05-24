
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title, category });
    setTitle('');
    setCategory('');    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-md w-full"
    >
      <input
        type="text"
        placeholder="Search by Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
      />
      <input
        type="text"
        placeholder="Search by Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
      />
      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
