'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

function SuccessContent() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Sabse simple aur bulletproof tarika - URL mein kuch bhi kachra ho, ye dhund lega
    const currentUrl = window.location.href;
    
    // Agar URL mein payment ID ya hamara secret password hai, toh access de do
    const isPaid = currentUrl.includes('razorpay_payment_id') || currentUrl.includes('zx6yn_premium');
    const isAlreadyVIP = localStorage.getItem('zx6yn_vip') === 'true';

    if (isPaid) {
      localStorage.setItem('zx6yn_vip', 'true');
      setAuthorized(true);
    } else if (isAlreadyVIP) {
      setAuthorized(true);
    } else {
      // Agar kuch nahi mila tabhi bahar phekna hai
      router.push('/');
    }
  }, [router]);

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white font-mono tracking-widest">
        VERIFYING VIP CREDENTIALS...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans relative">
      
      {/* NAYA TOP BAR */}
      <div className="absolute top-6 left-6">
        <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center">
          <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
        </a>
      </div>

      <div className="max-w-5xl mx-auto text-center pt-20">
        <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <i className="fa-solid fa-crown mr-2"></i> The 1% Club Member
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter uppercase">
          Welcome aboard, <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5C3] to-[#D4AF37]">VIP Reader</span>
        </h1>
        <p className="text-gray-500 text-sm mb-10">Your digital edition is ready. Choose how you want to read it below.</p>
        
        {/* 🔥 MOBILE WALO KE LIYE DIRECT DOWNLOAD/OPEN BUTTON 🔥 */}
        <a 
          href="/ebook.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center w-full max-w-sm mx-auto mb-10 bg-gradient-to-r from-[#FFF5C3] to-[#D4AF37] text-black font-black py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform"
        >
          <i className="fa-solid fa-book-open mr-3 text-xl"></i> Read & Download Ebook
        </a>

        {/* LAPTOP WALO KE LIYE IFRAME */}
        <div className="hidden md:block w-full max-w-4xl mx-auto bg-zinc-900/30 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <iframe 
            src="/ebook.pdf" 
            className="w-full h-[75vh]" 
            title="AI Earning Ebook"
          />
        </div>
        
        <p className="md:hidden text-gray-500 text-xs mt-4">
          *Note: Tap the gold button above to open the PDF directly on your mobile device.
        </p>

      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Loading Security Module...</div>}>
      <SuccessContent />
    </Suspense>
  );
}