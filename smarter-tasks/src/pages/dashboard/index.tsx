import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        setUser(parsedUserData);
      } catch (error) {
        console.error('Error parsing userData:', error);
        setUser(null);
      }
    }
  }, []);
  const logout = () => { 
     localStorage.removeItem('authToken'); 
     localStorage.removeItem('userData'); 
     navigate('/signin');
   };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          {user ? (
            <div>
              <p className="text-lg font-semibold mb-4">Name: {user.name}</p>
              <p className="text-lg font-semibold">Email: {user.email}</p>      
              <button 
             id="logout-link" 
             className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-green-600 active:bg-green-600 hover:bg-green-700" 
           > 
             <a href="#" id= "logout-link" onClick= {logout}>logout</a>
             </button>
            </div>
          ) : (
            <div>
            <p className="text-lg text-center text-gray-600">No user data available.</p>
            <button 
             id="logout-link" 
             className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-green-600 active:bg-green-600 hover:bg-green-700" 
           > 
             <a href="#" id= "logout-link" onClick= {logout}>logout</a>
             </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
