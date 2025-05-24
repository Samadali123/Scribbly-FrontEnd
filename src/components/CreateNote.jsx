// import React, { useState } from 'react'
// import axios from 'axios'
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
// import {showSuccessToast, showErrorToast } from '../utils/ShowToast'

// const CreateNote = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm()

//   const [loading, setLoading] = useState(false)
//   const [serverError, setServerError] = useState(null)
//   const [success, setSuccess] = useState(null)
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     setLoading(true)
//     setServerError(null)
//     setSuccess(null)

//     try {
//       const res = await axios.post('/api/notes/create', data)
//       setSuccess('Note created successfully!')
//       reset()
//       navigate("/dashboard")

//     } catch (err) {
//       setServerError(
//         err?.response?.data?.message || 'Something went wrong!'
//       )
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen  flex items-center justify-center px-4 py-10 ">
//       <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl border border-red-700 p-8">
//         <h2 className="text-3xl font-extrabold text-center text-red-500 mb-8 tracking-wide drop-shadow-md">
//           Create a New Note
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label className="text-red-400 block mb-2 text-lg font-semibold tracking-wide">
//               Title
//             </label>
//             <input
//               type="text"
//               {...register('title', { required: 'Title is required' })}
//               placeholder="Enter note title"
//               className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
//             />
//             {errors.title && (
//               <p className="text-sm text-red-500 mt-1 italic">{errors.title.message}</p>
//             )}
//           </div>

//           {/* Content */}
//           <div>
//             <label className="text-red-400 block mb-2 text-lg font-semibold tracking-wide">
//               Content
//             </label>
//             <textarea
//               {...register('content', { required: 'Content is required' })}
//               placeholder="Write your note here..."
//               rows="4"
//               className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition resize-none"
//             />
//             {errors.content && (
//               <p className="text-sm text-red-500 mt-1 italic">{errors.content.message}</p>
//             )}
//           </div>

//           {/* Category */}
//           <div>
//             <label className="text-red-400 block mb-2 text-lg font-semibold tracking-wide">
//               Category
//             </label>
//             <input
//               type="text"
//               {...register('category', { required: 'Category is required' })}
//               placeholder="e.g., Frontend, Backend"
//               className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
//             />
//             {errors.category && (
//               <p className="text-sm text-red-500 mt-1 italic">{errors.category.message}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//          <button
//   type="submit"
//   disabled={loading}
//   className="w-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white px-3 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
// >
//   {loading ? 'Creating...' : 'Create Note'}
// </button>


//           {/* Feedback Messages */}
//           {success && (
//             <p className="mt-4 text-center text-green-500 font-semibold tracking-wide">
//               {success}
//             </p>
//           )}
//           {serverError && (
//             <p className="mt-4 text-center text-red-500 font-semibold tracking-wide">
//               {serverError}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CreateNote



import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { showSuccessToast, showErrorToast } from '../utils/ShowToast';
import { ToastContainer } from 'react-toastify';
import { createNote } from '../services/Notes.services';

const CreateNote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await createNote(data);
      reset();
      showSuccessToast('Note created successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      console.error(err);
      const message = err?.response?.data?.message || 'Something went wrong!';
      showErrorToast(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md mb-1 bg-zinc-900 rounded-2xl shadow-2xl border border-red-700 p-8">
        <ToastContainer/>
        <h2 className="text-3xl font-extrabold text-center text-red-500 mb-8 tracking-wide drop-shadow-md">
          Create a New Note
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="text-red-400 block mb-2 text-lg font-semibold tracking-wide">
              Title
            </label>
            <input
              type="text"
              {...register('title', { required: 'Title is required' })}
              placeholder="Enter note title"
              className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1 italic">{errors.title.message}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="text-red-400 block mb-2 text-lg font-semibold tracking-wide">
              Content
            </label>
            <textarea
              {...register('content', { required: 'Content is required' })}
              placeholder="Write your note here..."
              rows="4"
              className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition resize-none"
            />
            {errors.content && (
              <p className="text-sm text-red-500 mt-1 italic">{errors.content.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="text-red-400 block mb-2 text-lg font-semibold tracking-wide">
              Category
            </label>
            <input
              type="text"
              {...register('category', { required: 'Category is required' })}
              placeholder="e.g., Frontend, Backend"
              className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {errors.category && (
              <p className="text-sm text-red-500 mt-1 italic">{errors.category.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white px-3 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating...' : 'Create Note'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
