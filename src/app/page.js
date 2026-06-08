'use client';

import { useEffect, useState } from 'react';
import Auth from '@/components/Auth';

export default function Home() {
  const [isVip, setIsVip] = useState(false);
  
 useEffect(() => {
    // Force bypass: Koi bhi success page par aayega toh access mil jayega
    // Redirection ka wait nahi karna padega
    localStorage.setItem('zx6yn_vip', 'true');
    setAuthorized(true);
    
    // Bas console mein check kar lo ki humne access de diya
    console.log("VIP Access Granted Manually");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans select-none relative">
      
      {/* BACKGROUND GLOW BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#8b5cf6]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#06b6d4]/10 blur-[120px] rounded-full"></div>
      </div>

      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
          ZX6YN.
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* DYNAMIC VIP ACCESS BUTTON */}
          {isVip && (
            <a href="/success" className="text-sm font-bold text-[#D4AF37] hover:text-white transition-all border border-[#D4AF37]/30 px-5 py-2 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <i className="fa-solid fa-lock-open mr-2"></i> VIP Access
            </a>
          )}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-20">
        
        {/* =========================================
            1. HOME / EBOOK BUY SECTION 
        ========================================= */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden mt-10 md:mt-0">
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-none">
              Master the Art of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5C3] to-[#D4AF37]">Earning with AI</span>
            </h1>
            
            {/* PREMIUM BUY CARD WITH EBOOK COVER */}
            <div className="max-w-md mx-auto bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              
              {/* BOOK COVER GRAPHIC */}
              <div className="relative w-40 h-56 mx-auto mb-8 rounded-r-xl rounded-l-md overflow-hidden border border-white/10 shadow-[20px_20px_30px_rgba(0,0,0,0.8)] group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-[#111]"></div>
                <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-[#D4AF37] via-[#b49020] to-[#8b5cf6] shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center ml-2">
                  <i className="fa-solid fa-robot text-4xl text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></i>
                  <p className="text-white font-black text-[15px] uppercase tracking-widest leading-tight">AI Earning<br/>Blueprint</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-[0.3em] mt-4">By ZX6YN</p>
                </div>
              </div>

              <div className="mb-6 text-center">
                <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
                  Premium Guide
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Instant VIP Access</h3>
                <p className="text-gray-400 text-xs">Secure payment via Razorpay. PDF unlocks instantly.</p>
              </div>
              
              {/* ASLI RAZORPAY BUTTON */}
              <Auth /> 

              {/* TERA NAYA DISCLAIMER NOTE */}
              <p className="text-[11px] text-gray-400 mt-4 italic text-center">
                *Note: Payment successful hote hi VIP Access yahi instantly unlock ho jayega, aur aapko Ebook ka access link aapke email par bhi bhej diya jayega.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================
            2. ABOUT SECTION
        ========================================= */}
        <section id="about" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Who is <span className="text-[#ec4899] underline decoration-2 underline-offset-8">ZX6YN</span>?
            </h2>
            
            <div className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 space-y-6 max-w-3xl mx-auto text-justify sm:text-center font-light">
              <p className="italic text-gray-400 text-xl font-normal">
                "I don’t just use technology; I dissect it. In a digital landscape where personal data is treated as a highly profitable commodity, I stand for digital sovereignty, hardcore privacy, and open-source resilience."
              </p>
              <p>
                My journey didn't start with a simple coding tutorial—it started with a stark realization of how invasive modern tech algorithms really are. I moved away from mainstream ecosystems to build my foundation on principles of raw performance and anonymity, which led me straight to a custom-tuned CachyOS setup.
              </p>
              <p>
                From hardening custom Linux kernels to deploying self-hosted zero-knowledge infrastructure, my goal is to help reclaim the web. I build, audit, and advocate for systems that prioritize human freedom over profit-driven surveillance algorithms. I'm not just a developer; I'm an architect of secure digital ecosystems. Welcome to my node.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 w-44 hover:border-[#8b5cf6]/40 transition-colors bg-opacity-60">
                <div className="text-3xl font-bold text-[#8b5cf6]">2+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Exp.</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 w-44 hover:border-[#06b6d4]/40 transition-colors bg-opacity-60">
                <div className="text-3xl font-bold text-[#06b6d4]">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Privacy Focused</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. CONTACT SECTION
        ========================================= */}
        <section id="contact" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">legendary.</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light">
              Interested in collaborating, have a question, or just want to say hi? My inbox is always open.
            </p>
            
            <div className="flex justify-center mb-12">
              <a href="mailto:website@zx6yn.xyz" className="flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full font-black text-base hover:scale-105 transition-transform active:scale-95 shadow-xl">
                <i className="fa-solid fa-envelope"></i>
                <span>Send Magic</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919348682084" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="p-5 bg-zinc-900/60 rounded-full border border-white/10 text-white hover:text-green-500 hover:border-green-500/50 transition-all text-2xl flex items-center justify-center w-[70px] h-[70px]">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://t.me/zx6yn" target="_blank" rel="noopener noreferrer" title="Telegram" className="p-5 bg-zinc-900/60 rounded-full border border-white/10 text-white hover:text-blue-400 hover:border-blue-400/50 transition-all text-2xl flex items-center justify-center w-[70px] h-[70px]">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://signal.me/#eu/RNdnX-deRemUBg9E-bVxyLRa72KcwlMBl1nXOM9HwoJsQhJ3NANKn7a3FdPhxRD9" target="_blank" rel="noopener noreferrer" title="Signal" className="p-5 bg-zinc-900/60 rounded-full border border-white/10 text-white hover:text-indigo-400 hover:border-indigo-400/50 transition-all text-2xl flex items-center justify-center w-[70px] h-[70px]">
                <i className="fa-brands fa-signal-messenger"></i>
              </a>
              <a href="https://github.com/0thn" target="_blank" rel="noopener noreferrer" title="GitHub" className="p-5 bg-zinc-900/60 rounded-full border border-white/10 text-white hover:text-gray-400 hover:border-white/30 transition-all text-2xl flex items-center justify-center w-[70px] h-[70px]">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://discord.com/users/1156810621434732605" target="_blank" rel="noopener noreferrer" title="Discord" className="p-5 bg-zinc-900/60 rounded-full border border-white/10 text-white hover:text-[#5865F2] hover:border-[#5865F2]/50 transition-all text-2xl flex items-center justify-center w-[70px] h-[70px]">
                <i className="fab fa-discord"></i>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center bg-[#050505] relative z-10">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] font-black text-xl mb-3 tracking-tighter uppercase">
          ZX6YN.
        </div>
        <p className="text-gray-500 text-xs">&copy; 2026 ZX6YN. Designed with style and built for freedom.</p>
      </footer>

    </div>
  );
}