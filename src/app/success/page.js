'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

function SuccessContent() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    const isPaid = currentUrl.includes('razorpay_payment_id') || currentUrl.includes('zx6yn_premium');
    const isAlreadyVIP = localStorage.getItem('zx6yn_vip') === 'true';

    if (isPaid) {
      localStorage.setItem('zx6yn_vip', 'true');
      setAuthorized(true);
    } else if (isAlreadyVIP) {
      setAuthorized(true);
    } else {
      router.push('/');
    }
  }, [router]);

  const handleSendEmail = async () => {
    if (!email) return alert("Please enter an email address!");
    setLoading(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, bookType: 'ai' })
      });
      if (res.ok) {
        setEmailSent(true);
      } else {
        alert("Failed to send email. Sahi email daalo.");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  if (!authorized) {
    return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white font-mono">VERIFYING VIP CREDENTIALS...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans relative">
      <div className="absolute top-6 left-6">
        <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center">
          <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
        </a>
      </div>

      <div className="max-w-5xl mx-auto text-center pt-20">
        <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
          <i className="fa-solid fa-robot mr-2"></i> AI VIP Access
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter uppercase">
          Welcome to the <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5C3] to-[#D4AF37]">Future of Earning</span>
        </h1>
        <p className="text-gray-500 text-sm mb-10">Your premium blueprint is ready for download.</p>
        
        <a href="/ebook.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full max-w-sm mx-auto mb-6 bg-gradient-to-r from-[#D4AF37] to-[#b49020] text-black font-black py-4 px-8 rounded-xl hover:scale-105 transition-transform">
          <i className="fa-solid fa-download mr-3 text-xl"></i> Access Blueprint
        </a>

        {/* AI WALA EMAIL BOX 👇 */}
        <div className="max-w-sm mx-auto mb-10 bg-zinc-900/50 p-5 rounded-xl border border-[#D4AF37]/20 shadow-lg text-left">
          <h3 className="text-sm font-bold mb-3 text-white"><i className="fa-solid fa-envelope text-[#D4AF37] mr-2"></i> Get a Backup Link on Email:</h3>
          {!emailSent ? (
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/60 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-white transition-colors" />
              <button onClick={handleSendEmail} disabled={loading} className="w-full bg-white text-black px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors">
                {loading ? 'Sending...' : 'Send Email Backup'}
              </button>
            </div>
          ) : (
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-3 rounded-lg text-center">
              <p className="text-sm text-[#D4AF37] font-bold"><i className="fa-solid fa-check-circle mr-1"></i> Email Sent!</p>
              <p className="text-xs text-gray-400 mt-1">Please check your inbox (and spam folder).</p>
            </div>
          )}
        </div>

        <div className="hidden md:block w-full max-w-4xl mx-auto bg-zinc-900/30 border border-[#D4AF37]/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <iframe src="/ebook.pdf" className="w-full h-[75vh]" title="AI Earning Blueprint" />
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-[#D4AF37] font-mono">LOADING VIP DASHBOARD...</div>}>
      <SuccessContent />
    </Suspense>
  );
}