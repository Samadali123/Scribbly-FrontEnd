
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Trash2, Pencil } from 'lucide-react';

const NoteCard = ({ note, onDelete, showActions = true }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      const response = await axios.delete(`/api/notes/delete/${note._id}`);

      if (response.status === 200) {
        setSuccess('Note deleted successfully');

        // Wait 1.2 seconds before removing the card from dashboard
        setTimeout(() => {
          if (onDelete) onDelete(note._id);
        }, 1000);
      }
    } catch (err) {
      setError('Failed to delete note');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    navigate(`/updatenote/${note._id}`);
  };

  return (
    <div className="bg-zinc-900 text-white border border-red-600 rounded-xl shadow-lg p-5 hover:shadow-red-600/50 transition duration-300">
      <h3 className="text-xl font-semibold text-red-400 mb-2">{note.title}</h3>
      <p className="text-sm text-gray-300">{note.content}</p>

      <span className="inline-block mt-4 mb-3 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200">
        {note.category}
      </span>

      {showActions && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleUpdate}
            className="text-sm cursor-pointer text-white p-1.5 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            title="Update Note"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="text-sm cursor-pointer text-white p-1.5 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete Note"
          >
            {loading ? (
              <span className="text-xs font-semibold px-1.5">...</span>
            ) : (
              <Trash2 size={18} />
            )}
          </button>
        </div>
      )}

      {success && (
        <span className="text-green-400 text-xs mt-3 inline-block">{success}</span>
      )}
      {error && (
        <span className="text-red-400 text-xs mt-3 inline-block">{error}</span>
      )}
    </div>
  );
};

export default NoteCard;
