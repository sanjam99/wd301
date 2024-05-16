import React from 'react';
// Dialogue 1: Just import the file
import SignupForm from "./SignupForm"
import {Link} from "react-router-dom";

const Signup: React.FC = () => {
  // Dialogue 2: And use it after the h2 tag
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign up</h1>
        <SignupForm />
        Already User? <Link to="/signin">signin Here</Link>
      </div>
    </div>
  );
}
export default Signup;