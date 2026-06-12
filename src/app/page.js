'use client';

import { useEffect, useState } from 'react';
import Auth from '@/components/Auth';

export default function Home() {
  const [isAiVip, setIsAiVip] = useState(false);
  const [isHackVip, setIsHackVip] = useState(false);

  useEffect(() => {
    // FontAwesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
    document.head.appendChild(link);

    // VIP Checks
    if (localStorage.getItem('zx6yn_vip') === 'true') setIsAiVip(true);
    if (localStorage.getItem('zx6yn_hack_vip') === 'true') setIsHackVip(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans select-none relative">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#8b5cf6]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#06b6d4]/10 blur-[120px] rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
          ZX6YN.
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Benefits</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-3">
            {isAiVip && (
              <a href="/success" className="text-xs font-bold text-[#D4AF37] hover:text-white transition-all border border-[#D4AF37]/30 px-4 py-2 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20">
                <i className="fa-solid fa-robot mr-1"></i> AI VIP
              </a>
            )}
            {isHackVip && (
              <a href="/success-hack" className="text-xs font-bold text-[#00ff41] hover:text-white transition-all border border-[#00ff41]/30 px-4 py-2 rounded-full bg-[#00ff41]/10 hover:bg-[#00ff41]/20">
                <i className="fa-solid fa-terminal mr-1"></i> HACK VIP
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 md:pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[85vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto w-full text-center">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter uppercase leading-none">
              Level Up Your <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">Digital Arsenal</span>
            </h1>
            <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">Choose your path: Master Artificial Intelligence or dominate Cyber Security.</p>
            
            {/* 2 CARDS GRID */}
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-stretch text-left mb-16">
              
              {/* BOOK 1: AI EARNING */}
              <div className="w-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between transform hover:-translate-y-1 transition-all">
                <div>
                  <div className="relative w-40 h-56 mx-auto mb-8 rounded-r-xl rounded-l-md overflow-hidden border border-white/10 shadow-[20px_20px_30px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-[#111]"></div>
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-[#D4AF37] via-[#b49020] to-[#8b5cf6]"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center ml-2">
                      <i className="fa-solid fa-robot text-4xl text-[#D4AF37] mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></i>
                      <p className="text-white font-black text-[15px] uppercase tracking-widest leading-tight">AI Earning<br/>Blueprint</p>
                      <p className="text-gray-500 text-[9px] uppercase tracking-[0.3em] mt-4">By ZX6YN</p>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Premium Guide</div>
                    <h3 className="text-2xl font-bold text-white mb-1">Instant VIP Access</h3>
                    <p className="text-gray-400 text-xs mb-4">Secure payment via Razorpay. PDF unlocks instantly.</p>
                    
                    {/* NEW PRICING BLOCK FOR AI */}
                    <div className="bg-black/40 border border-white/5 rounded-xl py-4 px-4 mb-2 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-3xl font-black text-white">₹249</span>
                        <span className="text-base text-gray-500 line-through">₹499</span>
                        <span className="text-[11px] font-bold bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded uppercase tracking-wider">50% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full mt-auto">
                  <Auth /> 
                </div>
              </div>

              {/* BOOK 2: ETHICAL HACKING */}
              <div className="w-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between transform hover:-translate-y-1 transition-all">
                <div>
                  <div className="relative w-40 h-56 mx-auto mb-8 rounded-r-xl rounded-l-md overflow-hidden border border-white/10 shadow-[20px_20px_30px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1910] to-[#050c08]"></div>
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-[#00ff41] via-[#008f11] to-[#003b00]"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center ml-2">
                      <i className="fa-solid fa-user-secret text-4xl text-[#00ff41] mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]"></i>
                      <p className="text-white font-black text-[13px] uppercase tracking-widest leading-tight">Ethical Hacking<br/>Blueprint</p>
                      <p className="text-[#00ff41]/50 text-[9px] uppercase tracking-[0.3em] mt-4">By ZX6YN</p>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="inline-block px-3 py-1 bg-[#00ff41]/10 border border-[#00ff41]/20 rounded-full text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-4">Cyber Security</div>
                    <h3 className="text-2xl font-bold text-white mb-1">Elite Hacker Access</h3>
                    <p className="text-gray-400 text-xs mb-4">Secure payment via Razorpay. PDF unlocks instantly.</p>
                    
                    {/* NEW PRICING BLOCK FOR HACKING */}
                    <div className="bg-black/40 border border-white/5 rounded-xl py-4 px-4 mb-2 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-3xl font-black text-white">₹499</span>
                        <span className="text-base text-gray-500 line-through">₹999</span>
                        <span className="text-[11px] font-bold bg-[#00ff41]/20 text-[#00ff41] px-2 py-1 rounded uppercase tracking-wider">50% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full mt-auto flex flex-col gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00ff41]/50 text-white placeholder-gray-500 transition-colors" 
                  />
                  <a 
                    href="https://rzp.io/rzp/zx6yn-hacking" 
                    className="flex items-center justify-center w-full bg-gradient-to-r from-[#00ff41] to-[#008f11] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-sm"
                  >
                    Continue to Payment (₹499)
                  </a>
                </div>
              </div>

            </div>

            {/* SINGLE UNIFIED BENEFITS & PROCESS SECTION */}
            <div id="about" className="max-w-4xl mx-auto text-left border border-white/10 p-8 rounded-2xl bg-zinc-900/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent opacity-50"></div>
              <h2 className="text-2xl md:text-3xl font-black mb-10 text-center uppercase tracking-wider">
                What's Inside & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">How It Works</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center"><i className="fa-solid fa-bolt text-[#06b6d4] mr-3"></i> Why Read These?</h3>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i><span>Zero-fluff, actionable roadmaps designed for absolute beginners.</span></li>
                    <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i><span>Learn to automate income with AI or secure networks like a professional.</span></li>
                    <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i><span>Master premium, high-income skills that are currently in massive market demand.</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center"><i className="fa-solid fa-unlock-keyhole text-[#06b6d4] mr-3"></i> Instant Delivery Process</h3>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start"><span className="text-[#06b6d4] font-black mt-0.5 mr-3">1.</span><span>Select your blueprint card above and proceed to secure Razorpay payment.</span></li>
                    <li className="flex items-start"><span className="text-[#06b6d4] font-black mt-0.5 mr-3">2.</span><span>Get instantly redirected to your private VIP Download Dashboard.</span></li>
                    <li className="flex items-start"><span className="text-[#06b6d4] font-black mt-0.5 mr-3">3.</span><span>Read directly online or download the high-quality PDF to your device forever.</span></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 mt-10 border-t border-white/5 bg-[#0a0a0a]">
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

      <footer className="py-12 px-6 border-t border-white/5 text-center bg-[#050505] relative z-10">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] font-black text-xl mb-3 tracking-tighter uppercase">ZX6YN.</div>
        <p className="text-gray-500 text-xs">&copy; 2026 ZX6YN. Designed with style and built for freedom.</p>
      </footer>
    </div>
  );
}