import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Search, ChevronDown, Award, BookOpen, Library, CheckCircle, Clock } from 'lucide-react';

const sliderData = [
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070',
    subtitle: 'THE BEST THEME FOR',
    title: 'EDUCATION'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2070',
    subtitle: 'EMPOWER YOUR',
    title: 'FUTURE'
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070',
    subtitle: 'LEARN & GROW',
    title: 'TOGETHER'
  }
];

const LandingPage = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1.5s ease-out forwards;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="min-h-screen font-sans text-white">
        {/* Top Bar */}
      <div className="bg-zinc-900 text-gray-300 py-2 px-8 flex justify-between items-center text-xs border-b border-white/5">
        <div className="flex items-center gap-6">
          <span className="hidden md:inline-block">Have any question?</span>
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <Phone size={14} />
            <span>(00) 123 456 789</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <Mail size={14} />
            <span>hello@eduma.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          {/* Moved login/register to main nav */}
        </div>
      </div>

      {/* Hero Section with Navigation */}
      <div className="relative h-[800px] flex flex-col">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://res.cloudinary.com/qx4wb7tl/video/upload/v1790325326/study-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 animate-fade-in"></div>
        </div>

        {/* Main Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-yellow-400 rounded-sm flex items-center justify-center transform -rotate-12">
              <div className="w-6 h-6 border border-yellow-400 transform rotate-12"></div>
            </div>
            <span className="text-2xl font-bold tracking-widest">EDUMA</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
            <NavItem label="DEMOS" hasDropdown to="/demos" />
            <NavItem label="COURSES" hasDropdown to="/courses" />
            <NavItem label="FEATURES" hasDropdown to="/features" />
            <NavItem label="EVENTS" hasDropdown to="/events" />
            <NavItem label="PORTFOLIO" hasDropdown to="/portfolio" />
            <NavItem label="BLOG" to="/blog" />
            <NavItem label="CONTACT" to="/contact" />
            <NavItem label="ADMIN" to="/admin" />
            <Link to="/search" className="hover:text-yellow-400 transition-colors">
              <Search size={18} />
            </Link>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
              <Link to="/login" className="hover:text-yellow-400 transition-colors">LOGIN</Link>
              <Link to="/register" className="bg-yellow-400 text-zinc-900 px-4 py-2 rounded-sm hover:bg-yellow-300 transition-colors">REGISTER</Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 max-w-4xl">
          <div key={currentBg}>
            <h2 className="text-xl md:text-2xl font-bold tracking-widest mb-4">
              {sliderData[currentBg].subtitle.split('').map((char, index) => (
                <span
                  key={index}
                  className="animate-fade-in-up inline-block"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h2>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
              {sliderData[currentBg].title.split('').map((char, index) => (
                <span
                  key={index}
                  className="animate-fade-in-up inline-block"
                  style={{ animationDelay: `${(index * 0.1) + 1}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '2s' }}>
            <Link to="/start-learning" className="inline-block relative overflow-hidden bg-yellow-400 text-zinc-900 font-bold uppercase px-8 py-3 text-sm transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] group">
              <span className="relative z-10">START LEARNING</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="relative z-10 mt-auto bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <FeatureBox 
              icon={<Award size={40} className="text-yellow-400" />}
              title="BEST INDUSTRY LEADERS"
              to="/about"
            />
            <FeatureBox 
              icon={<BookOpen size={40} className="text-yellow-400" />}
              title="LEARN COURSES ONLINE"
              to="/courses"
            />
            <FeatureBox 
              icon={<Library size={40} className="text-yellow-400" />}
              title="BOOK LIBRARY & STORE"
              to="/store"
            />
        </div>
      </div>
      </div>

      {/* Featured Learning Paths - New Professional Section */}
      <section className="bg-zinc-950 py-24 px-8 md:px-16 border-t border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-cyan-400"></div>
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Curated For You</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600">Paths</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed md:text-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Master comprehensive skills with our curated learning paths, designed by industry experts to take you from beginner to professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Path 1 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Code" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide">SOFTWARE</div>
              </div>
              <div className="p-8 -mt-6 relative z-10">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:border-cyan-400/50 transition-colors">
                  <BookOpen size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Full-Stack Engineering</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Master React, Node.js, and cloud architecture to build scalable web applications.</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                    <Clock size={16} className="text-cyan-400" /> 24 Weeks
                  </div>
                  <Link to="/courses" className="text-cyan-400 font-bold text-sm tracking-wider hover:text-cyan-300 transition-colors flex items-center gap-1 group/btn">
                    VIEW PATH <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Path 2 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" alt="Design" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide">DESIGN</div>
              </div>
              <div className="p-8 -mt-6 relative z-10">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:border-yellow-400/50 transition-colors">
                  <Library size={24} className="text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">UI/UX Design Masterclass</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Learn user research, wireframing, prototyping, and high-fidelity visual design.</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                    <Clock size={16} className="text-yellow-400" /> 16 Weeks
                  </div>
                  <Link to="/courses" className="text-yellow-400 font-bold text-sm tracking-wider hover:text-yellow-300 transition-colors flex items-center gap-1 group/btn">
                    VIEW PATH <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Path 3 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(192,132,252,0.15)] cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Data" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-purple-400/20 border border-purple-400/30 text-purple-400 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide">DATA</div>
              </div>
              <div className="p-8 -mt-6 relative z-10">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:border-purple-400/50 transition-colors">
                  <Award size={24} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Data Science & AI</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Build predictive models and leverage machine learning to extract insights from data.</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                    <Clock size={16} className="text-purple-400" /> 32 Weeks
                  </div>
                  <Link to="/courses" className="text-purple-400 font-bold text-sm tracking-wider hover:text-purple-300 transition-colors flex items-center gap-1 group/btn">
                    VIEW PATH <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="bg-zinc-900 py-12 md:py-16 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center px-8 mb-8 md:mb-12">
          <h3 className="text-gray-500 uppercase tracking-widest text-xs md:text-sm font-bold text-center">Trusted by global industry leaders to empower their teams</h3>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="w-full overflow-hidden relative">
          {/* Gradient Edges for smooth fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-[200%] animate-marquee">
            {/* First Set */}
            <div className="flex-1 flex justify-around items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 md:h-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-7 md:h-9" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 md:h-10 mt-2 filter invert hue-rotate-180" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 md:h-8 filter invert hue-rotate-180" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-7 md:h-9" />
            </div>
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex-1 flex justify-around items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 md:h-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-7 md:h-9" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 md:h-10 mt-2 filter invert hue-rotate-180" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 md:h-8 filter invert hue-rotate-180" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-7 md:h-9" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-950 py-24 px-8 md:px-16 border-t border-white/5 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Our Excellence</span>
              <div className="w-12 h-1 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">EDUMA</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We bring together industry leaders, practical knowledge, and a vibrant community to ensure your success in the modern digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-zinc-900 transition-all duration-300">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">World-Class Instructors</h3>
              <p className="text-gray-400 leading-relaxed">
                Learn directly from industry veterans and top-tier professionals who bring real-world experience to every lesson.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-zinc-900 transition-all duration-300">
                <Library size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Extensive Library</h3>
              <p className="text-gray-400 leading-relaxed">
                Gain lifetime access to thousands of hours of premium content, updated regularly to keep pace with industry trends.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-zinc-900 transition-all duration-300">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Verified Certification</h3>
              <p className="text-gray-400 leading-relaxed">
                Earn globally recognized certificates upon completion, validating your skills to top employers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-zinc-900 py-24 px-8 md:px-16 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images / Visuals */}
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full z-0"></div>
            <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070" 
                alt="Students studying" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-zinc-800 p-6 rounded-xl border border-white/10 shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-zinc-900 font-bold text-2xl">
                    10+
                  </div>
                  <div>
                    <div className="font-black text-xl text-white">Years of</div>
                    <div className="text-gray-400 font-bold tracking-wide">EXPERIENCE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">About Eduma</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Welcome to the best <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Education Platform</span>
            </h2>
            
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              We are dedicated to providing the highest quality education and empowering our students to achieve their full potential. With industry-leading instructors and a modern curriculum, you'll be prepared for the future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {['Expert Instructors', 'Lifetime Access', 'Interactive Learning', 'Career Guidance'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-yellow-400 shrink-0" />
                  <span className="font-semibold text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="inline-block relative overflow-hidden bg-white text-zinc-900 font-bold uppercase px-8 py-4 text-sm transition-all duration-300 hover:bg-gray-200 hover:scale-105 group rounded-sm shadow-lg">
              <span className="relative z-10 group-hover:text-zinc-900">DISCOVER MORE</span>
              <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </Link>
          </div>
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-800 py-16 px-8 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-yellow-400/5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
              <AnimatedCounter end={45000} suffix="+" duration={2500} formatK={true} />
            </div>
            <div className="text-gray-400 font-bold tracking-wider text-sm uppercase">Active Students</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
              <AnimatedCounter end={120} suffix="+" duration={2000} />
            </div>
            <div className="text-gray-400 font-bold tracking-wider text-sm uppercase">Expert Instructors</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
              <AnimatedCounter end={300} suffix="+" duration={2000} />
            </div>
            <div className="text-gray-400 font-bold tracking-wider text-sm uppercase">Premium Courses</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
              <AnimatedCounter end={100} suffix="%" duration={2000} />
            </div>
            <div className="text-gray-400 font-bold tracking-wider text-sm uppercase">Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="bg-zinc-900 py-24 px-8 md:px-16 text-white text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-1 bg-yellow-400"></div>
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Top Categories</span>
          <div className="w-12 h-1 bg-yellow-400"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Popular Categories</span>
        </h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/courses" className="bg-zinc-800 p-8 rounded-xl border border-white/5 hover:border-yellow-400/50 hover:bg-zinc-800/80 transition-all group cursor-pointer text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/10">
              <BookOpen size={24} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Development</h3>
            <p className="text-gray-400 text-sm">45+ Courses</p>
          </Link>
          <Link to="/courses" className="bg-zinc-800 p-8 rounded-xl border border-white/5 hover:border-yellow-400/50 hover:bg-zinc-800/80 transition-all group cursor-pointer text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/10">
              <Library size={24} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Design</h3>
            <p className="text-gray-400 text-sm">32+ Courses</p>
          </Link>
          <Link to="/courses" className="bg-zinc-800 p-8 rounded-xl border border-white/5 hover:border-yellow-400/50 hover:bg-zinc-800/80 transition-all group cursor-pointer text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/10">
              <Award size={24} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Business</h3>
            <p className="text-gray-400 text-sm">28+ Courses</p>
          </Link>
          <Link to="/courses" className="bg-zinc-800 p-8 rounded-xl border border-white/5 hover:border-yellow-400/50 hover:bg-zinc-800/80 transition-all group cursor-pointer text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/10">
              <Search size={24} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Marketing</h3>
            <p className="text-gray-400 text-sm">38+ Courses</p>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

const NavItem = ({ label, hasDropdown, to }) => (
  <Link to={to} className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
    <span>{label}</span>
    {hasDropdown && <ChevronDown size={14} className="opacity-70" />}
  </Link>
);

const FeatureBox = ({ icon, title, to }) => (
  <Link to={to} className="flex items-center gap-6 p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
    <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors w-40 leading-snug">{title}</h3>
      <span className="text-yellow-400 text-xs font-bold tracking-wider group-hover:text-yellow-300 transition-colors flex items-center gap-1">
        VIEW MORE <span className="text-[10px]">❯</span>
      </span>
    </div>
  </Link>
);

const AnimatedCounter = ({ end, suffix = '', duration = 2000, formatK = false }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, hasStarted]);

  let displayValue = count;
  if (formatK) {
    displayValue = Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(count);
  }

  return <span ref={counterRef}>{displayValue}{suffix}</span>;
};

export default LandingPage;
