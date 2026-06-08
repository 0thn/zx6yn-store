'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

function SuccessHackContent() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    
    // Naya password: hack_premium
    const isPaid = currentUrl.includes('razorpay_payment_id') || currentUrl.includes('hack_premium');
    const isAlreadyVIP = localStorage.getItem('zx6yn_hack_vip') === 'true';

    if (isPaid) {
      localStorage.setItem('zx6yn_hack_vip', 'true');
      setAuthorized(true);
    } else if (isAlreadyVIP) {
      setAuthorized(true);
    } else {
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
      <div className="absolute top-6 left-6">
        <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center">
          <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
        </a>
      </div>

      <div className="max-w-5xl mx-auto text-center pt-20">
        <div className="inline-block px-4 py-1.5 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
          <i className="fa-solid fa-user-secret mr-2"></i> Elite Hacker Access
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter uppercase">
          Welcome aboard, <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#008f11]">Ghost in the System</span>
        </h1>
        <p className="text-gray-500 text-sm mb-10">Your encrypted digital edition is ready. Choose how you want to read it below.</p>
        
        {/* PDF LINK: Make sure 'hacking.pdf' is in your public folder! */}
        <a 
          href="/hacking.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center w-full max-w-sm mx-auto mb-10 bg-gradient-to-r from-[#00ff41] to-[#008f11] text-black font-black py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.4)] hover:scale-105 transition-transform"
        >
          <i className="fa-solid fa-download mr-3 text-xl"></i> Access Blueprint
        </a>

        <div className="hidden md:block w-full max-w-4xl mx-auto bg-zinc-900/30 border border-[#00ff41]/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <iframe 
            src="/hacking.pdf" 
            className="w-full h-[75vh]" 
            title="Ethical Hacking Blueprint"
          />
        </div>
      </div>
    </div>
  );
}

export default function SuccessHackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-[#00ff41] font-mono">Bypassing Mainframe...</div>}>
      <SuccessHackContent />
    </Suspense>
  );
}