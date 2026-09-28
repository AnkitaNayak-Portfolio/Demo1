import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Globe, BrainCircuit } from 'lucide-react';

const StartLearningPage = () => {
  return (
    <div className="min-h-screen bg-black font-sans text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      <div className="absolute top-8 left-8 z-50">
        <Link to="/" className="flex items-center gap-3 text-white hover:text-cyan-400 transition-all hover:-translate-x-2 bg-white/5 p-4 rounded-full backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 shadow-2xl group">
          <ArrowLeft size={24} className="group-hover:text-cyan-400 transition-colors" />
        </Link>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4">
        {/* Concept Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Select Your Designation
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            Where to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500">Begin?</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Choose a path that aligns with your goals. Our curated interactive environments will guide you every step of the way.
          </p>
        </div>

        {/* Interactive Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full px-4">
          
          {/* Path 1 */}
          <Link to="/courses" className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-4 shadow-2xl overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-24 h-24 bg-cyan-400/20 rounded-full flex items-center justify-center mb-8 border border-cyan-400/30 group-hover:scale-110 group-hover:bg-cyan-400 transition-all duration-500">
              <Rocket size={40} className="text-cyan-400 group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">Fast Track</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
              Accelerated bootcamps designed to get you hired quickly. Intensive, project-based learning.
            </p>
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-cyan-400 text-sm group-hover:text-cyan-300">
              Start Path <span className="group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </Link>

          {/* Path 2 */}
          <Link to="/courses" className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-4 shadow-2xl overflow-hidden flex flex-col items-center text-center transform md:-translate-y-8">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-24 h-24 bg-purple-400/20 rounded-full flex items-center justify-center mb-8 border border-purple-400/30 group-hover:scale-110 group-hover:bg-purple-400 transition-all duration-500">
              <BrainCircuit size={40} className="text-purple-400 group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">Deep Dive</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
              Comprehensive academic-style courses covering fundamental theories and advanced concepts.
            </p>
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-purple-400 text-sm group-hover:text-purple-300">
              Start Path <span className="group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </Link>

          {/* Path 3 */}
          <Link to="/courses" className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-4 shadow-2xl overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center mb-8 border border-yellow-400/30 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-500">
              <Globe size={40} className="text-yellow-400 group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors">Community</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
              Learn at your own pace through peer-to-peer workshops, open forums, and group projects.
            </p>
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-yellow-400 text-sm group-hover:text-yellow-300">
              Start Path <span className="group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default StartLearningPage;
