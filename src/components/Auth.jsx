'use client';

import { useState } from 'react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Seedha tere asli Razorpay page par redirect karega!
    window.location.href = 'https://rzp.io/rzp/zx6yn-ebook'; 
  };

  return (
    <div className="w-full mt-2">
      <form onSubmit={handleCheckout} className="flex flex-col space-y-3">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-500 text-sm p-3.5 rounded-xl outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full relative group bg-gradient-to-r from-[#FFF5C3] to-[#D4AF37] text-black font-bold py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Redirecting to Secure Payment...' : 'Continue to Payment (₹99)'}
        </button>
      </form>
    </div>
  );
}