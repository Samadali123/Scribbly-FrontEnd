
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import Loader from '../utils/Loader';
import SkeletonNote from '../utils/SkeletonNote';
import { getNotesByCategory, searchNotes } from '../services/Notes.services';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchNotes = async () => {
    try {
      setInitialLoading(true);
      setError(null);
      const res = await axios.get('/api/notes/user');
      if (res.data.notes) {
        setNotes(res.data.notes);
        const uniqueCategories = [...new Set(res.data.notes.map(note => note.category))];
        setCategories(uniqueCategories);
      }
    } catch (err) {
      setError('Failed to fetch notes');
    } finally {
      setInitialLoading(false);
    }
  };

  const handleSearch = async ({ title, category }) => {
    try {
      setSkeletonLoading(true);
      const query = [];
      if (title) query.push(`title=${encodeURIComponent(title)}`);
      if (category) query.push(`category=${encodeURIComponent(category)}`);

      const [res] = await Promise.all([
        await searchNotes(query),
        delay(1500), // simulate 1.5s loading
      ]);

      if (res.data.notes) {
        setNotes(res.data.notes);
      }
    } catch (err) {
      setError('Search failed');
    } finally {
      setSkeletonLoading(false);
    }
  };

  const handleCategoryFilter = async (category) => {
    try {
      setSkeletonLoading(true);

      if (!category) {
        await fetchNotes();
        return;
      }

      const [res] = await Promise.all([
        await getNotesByCategory(category),
        delay(1500), // simulate 1.5s loading
      ]);

      if (res.data.notes) {
        setNotes(res.data.notes);
      }
    } catch (err) {
      setError('Category filter failed');
    } finally {
      setSkeletonLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-red-500 text-center mb-4">All Notes</h1>

      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onFilter={handleCategoryFilter} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {skeletonLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Array(notes.length || 8).fill().map((_, idx) => (
            <SkeletonNote key={idx} />
          ))}
        </div>
      ) : notes.length === 0 ? (
        <p className="text-white text-center mt-4">No notes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {notes.map(note => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={id => setNotes(prev => prev.filter(n => n._id !== id))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
