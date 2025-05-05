// components/AdminLoginModal.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function AdminLoginModal() {
  const { login, showLogin, setShowLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username, password);
    if (!success) {
      setError('Invalid credentials');
    }
  };

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">Admin Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full rounded border px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded border px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p className="mb-4 text-red-500">{error}</p>}
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Sign In
            </button>
            <button
              type="button"
              className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}