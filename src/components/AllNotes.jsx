
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import SkeletonNote from '../utils/SkeletonNote';
import { ToastContainer } from 'react-toastify';
import { showErrorToast } from '../utils/ShowToast';
import { getAllNotes } from '../services/Notes.services';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [skeletonCount, setSkeletonCount] = useState(8);
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setSkeletonLoading(true);
      setError(null);
      const response = await getAllNotes();
      const count = response.data.notes.length || 8;
      setSkeletonCount(count);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (count === 0) {
        const msg = 'No notes found';
        setNotes([]);
        setError(msg);
        showErrorToast(msg);  // Use msg string here
      } else {
        setNotes(response.data.notes);
      }
    } catch (err) {
      const msg = 'Failed to fetch notes';
      setError(msg);
      showErrorToast(msg);  // Use msg string here
      console.error(err);
    } finally {
      setSkeletonLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen py-6 px-4 sm:px-8 flex flex-col text-white">
      <ToastContainer />
      {!skeletonLoading && (
        <h1 className="text-3xl font-bold text-red-500 text-center mb-4">
          Some Collections
        </h1>
      )}

  

      <div className="flex-1 overflow-y-auto custom-scroll pr-2">
        {skeletonLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(skeletonCount)].map((_, i) => (
              <SkeletonNote key={i} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} showActions={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNotes;

