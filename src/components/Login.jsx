
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  showSuccessToast,
  showErrorToast,
  showWarningToast
} from '../utils/ShowToast'
import { ToastContainer } from 'react-toastify'
import { useAuth } from '../Context.jsx/AuthContext'
import { loginUser } from '../services/User.services'


const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

const {login} =   useAuth();

  const onSubmit = async (data) => {
    setLoading(true)

    try {
      const res = await loginUser(data)

      if (res.data.token) {
        login(res.data.token)
      }

      showSuccessToast('Logged in successfully!')
      reset()
       setTimeout(() => {
         navigate('/dashboard')
       },1000);
    } catch (err) {
      reset()
      const errorMsg =
        err?.response?.data?.message || 'Invalid credentials or server error!'

      if (
        errorMsg.toLowerCase().includes('invalid') ||
        errorMsg.toLowerCase().includes('credentials')
      ) {
        showWarningToast(errorMsg)
      } else {
        showErrorToast(errorMsg)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md mb-1 bg-zinc-900 rounded-2xl shadow-2xl border border-red-700 p-10">
        <ToastContainer />
        <h2 className="text-4xl font-extrabold text-center text-red-500 mb-10 tracking-wide drop-shadow-md">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-red-400 block mb-2 text-lg font-semibold tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email address'
                }
              })}
              placeholder="you@example.com"
              className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white text-base placeholder-zinc-500
              focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1 italic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-red-400 block mb-2 text-lg font-semibold tracking-wide"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 5,
                  message: 'Password must be at least 5 characters'
                }
              })}
              placeholder="Your password"
              className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white text-base placeholder-zinc-500
              focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1 italic">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white px-3 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login


