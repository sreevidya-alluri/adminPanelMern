import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [h1Text, setH1Text] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchH1Text = async () => {
    try {
      const response = await fetch('https://adminpanelmern-backend.onrender.com/api/h1'); // Ensure the protocol is correct
      if (!response.ok) throw new Error('Network response was not ok');
      const { text } = await response.json();
      setH1Text(text);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchH1Text();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
            <p className="text-lg text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-blue-500">Hello</span> <span className="text-green-500">{h1Text}</span> 👋
            </h1>
            <p className="text-lg text-gray-600 mx-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum harum illum sequi et odio quae temporibus aliquid doloribus cupiditate laudantium alias quibusdam aspernatur commodi, vitae reprehenderit amet quaerat facere. Cum?
            </p>
          </div>
        )}
      </div>
      <div className="bg-gray-900 py-8">
        <div className="flex justify-center">
          <Link
            to="/admin"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Go to Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
