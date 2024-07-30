import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminPanel() {
  const [text, setText] = useState('');

  const updateH1Text = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/h1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      alert('H1 text updated successfully');
      window.location.href = '/';
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 mx-auto w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Update H1 Text</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 border border-gray-300 rounded shadow-sm mb-4 focus:outline-none focus:ring-green-500 focus:ring-opacity-50"
          placeholder="Enter new H1 Text"
        />
        <button
          onClick={updateH1Text}
          className="bg-green-500 text-white px-4 py-2 rounded shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Update H1 Text
        </button>
        <div className="mt-4">
          <Link
            to="/"
            className="bg-gray-600 text-white px-4 py-2 rounded shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
