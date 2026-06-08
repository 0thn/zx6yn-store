'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Next.js mein searchParams use karne ke liye Suspense boundary zaroori hai
function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const paymentId = searchParams.get('razorpay_payment_id');
    const isAlreadyVIP = localStorage.getItem('zx6yn_vip') === 'true';

    if (paymentId) {
      // 1. Agar Razorpay se successful payment karke direct redirect hua hai
      localStorage.setItem('zx6yn_vip', 'true');
      setAuthorized(true);
    } else if (isAlreadyVIP) {
      // 2. Agar banda pehle khareed chuka hai aur dobara read karne aaya hai
      setAuthorized(true);
    } else {
      // 3. Agar koi chor raste se bina payment ke ghusa hai, toh wapas fenko home page pe
      router.push('/');
    }
  }, [searchParams, router]);

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white font-mono tracking-widest">
        VERIFYING VIP CREDENTIALS...
      </div>
    );
  }

  // AGAR AUTHORIZED HAI, TOH HI YEH PREMIUM BOOK OR IFRAME DIKHEGA
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <div className="max-w-5xl mx-auto text-center pt-10">
        <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <i className="fa-solid fa-crown mr-2"></i> The 1% Club Member
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter uppercase">
          Welcome aboard, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5C3] to-[#D4AF37]">VIP Reader</span>
        </h1>
        <p className="text-gray-500 text-sm mb-10">Your digital edition has been successfully unlocked.</p>
        
        {/* TERA IFRAME PDF VIEW */}
        <div className="w-full max-w-4xl mx-auto bg-zinc-900/30 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <iframe 
            src="/ebook.pdf" 
            className="w-full h-[75vh] md:h-[80vh]" 
            title="AI Earning Ebook"
          />
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Loading Node...</div>}>
      <SuccessContent />
    </Suspense>
  );
}