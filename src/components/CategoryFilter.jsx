import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
  return (
    <div className="flex flex-wrap gap-3 py-4">
      <button
        onClick={() => onFilter(null)}
        className="bg-gray-300 text-black px-4 py-1 rounded-md hover:bg-gray-400 transition"
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className=" px-4 py-1 rounded-full shadow-sm cursor-pointer uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
