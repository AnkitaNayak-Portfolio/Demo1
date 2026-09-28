import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Star, Play } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
  const location = useLocation();
  const pageTitle = title || location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white pb-20">
      {/* Hero with Video Background */}
      <div className="relative h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/21/40049-425141040_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-zinc-950 z-10"></div>
        </div>
        
        <Link to="/" className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all hover:-translate-x-2">
          <ArrowLeft size={28} />
          <span className="text-lg font-bold tracking-wider uppercase">Back to Home</span>
        </Link>
        
        <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full"></div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight drop-shadow-2xl">
            {pageTitle.toUpperCase()}
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
            Experience the next generation of {pageTitle.toLowerCase()} with our cutting-edge platform. Discover features that empower your journey.
          </p>
        </div>
      </div>

      {/* Concept & Features Section */}
      <div className="max-w-7xl mx-auto px-8 -mt-20 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap size={32} className="text-yellow-400" />}
            title="Lightning Fast"
            description="Our optimized infrastructure ensures that you get the content you need without any delays or buffering."
          />
          <FeatureCard 
            icon={<Shield size={32} className="text-yellow-400" />}
            title="Secure Platform"
            description="Enterprise-grade security protecting your data and learning progress at every step of your journey."
          />
          <FeatureCard 
            icon={<Star size={32} className="text-yellow-400" />}
            title="Premium Quality"
            description="Hand-crafted content and resources designed by industry experts to give you the ultimate edge."
          />
        </div>

        {/* Video Concept Highlight */}
        <div className="mt-32 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Revolutionizing <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                The {pageTitle} Experience
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We've completely reimagined how you interact with our platform. By blending beautiful design, seamless animations, and robust backend architecture, we provide an unparalleled experience that keeps you focused on what matters most.
            </p>
            <button className="bg-yellow-400 text-zinc-900 font-bold uppercase px-8 py-4 text-sm hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] rounded-sm flex items-center gap-2">
              <Play size={16} fill="currentColor" />
              Watch Overview
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            >
              <source src="https://cdn.pixabay.com/video/2023/10/22/186000-876939987_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-zinc-900/80 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group">
    <div className="w-16 h-16 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export default PlaceholderPage;
