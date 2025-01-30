'use client';
import Button from "./Button";
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "@/lib/firebase";

export default function Hero() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'waitlist'), {
        email: email,
        timestamp: new Date(),
        source: 'website'
      });
      setSuccess(true);
      setEmail('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

    const validateEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

  return (
  <div className="max-w-5xl flex-grow mx-auto text-center mt-10 mb-10 sm:mb-20">
      <div className="flex flex-wrap justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Satoshi tracking-tight">
          <span className="block sm:inline mr-2 text-[var(--special)]">Discover, Apply, Track </span>
          <span className="block sm:inline mr-2">Your Dream Apprenticeship with</span>
          <span className="block sm:inline text-[var(--special)]">Ease</span>
        </h2>
      </div>

      <p className="paragraph-hero text-center text-sm px-2">
        Find, track & apply for apprenticeships—fast. Get real salary insights, CV tips & employer reviews. Stay ahead with updates & exclusive career hacks.
      </p>


      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5 mb-5 w-full">
        <div className="flex w-full px-2 md:px-4 sm:px-0 justify-center flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter you email address"
            className="w-full sm:w-1/2 px-3 py-3 rounded-full mr-5 mb-3 border border-gray-300 focus:border-black focus:outline-none"
            required
          />
           <Button type={'secondary'} text={loading ? 'Submitting...' : 'Join Waitlist'} className="whitespace-nowrap w-full sm:w-auto" />
        </div>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">Thanks for joining! 🎉</p>
      }
      
    </div>
  );
}
