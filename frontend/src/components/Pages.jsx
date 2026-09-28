import React, { useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Calendar, MapPin, Mail, Phone, ShoppingCart, User, Lock, Search, Maximize, Minimize, Settings, Monitor, MessageSquare, Terminal } from 'lucide-react';
import videoStudy1 from './4k-free-stock-video-studying-education-and-learning-ytmp4.savetube.vip.mp4';
import videoStudy2 from './student-hd-stock-video-footage-free-stock-video-ytmp4.savetube.vip.mp4';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const BackButton = () => (
  <Link to="/" className="absolute top-8 left-8 z-50 flex items-center gap-3 text-white hover:text-yellow-400 transition-all hover:-translate-x-2 bg-black/30 p-3 rounded-full backdrop-blur-md">
    <ArrowLeft size={24} />
  </Link>
);

// 1. Demos Page - Glassmorphism Masonry with Video Background
export const DemosPage = () => {
  const demos = [
    { id: 1, title: 'Virtual Classroom', desc: 'Real-time interactive environment with whiteboard tools.' },
    { id: 2, title: 'Code Editor IDE', desc: 'In-browser compilation and collaborative coding.' },
    { id: 3, title: 'Analytics Dashboard', desc: 'Track student progress with AI-driven insights.' },
    { id: 4, title: 'VR Learning Space', desc: 'Immersive 3D environments for biology and physics.' },
    { id: 5, title: 'Exam Proctoring', desc: 'Secure assessment portal with automated monitoring.' },
    { id: 6, title: 'Community Hub', desc: 'Social platform for peer-to-peer networking.' }
  ];

  return (
    <div className="min-h-screen font-sans text-white pb-20 relative overflow-hidden">
      <BackButton />
      
      {/* Full Page Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={videoStudy1} type="video/mp4" />
        </video>
        {/* Colorful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-purple-950/70 to-zinc-950/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 px-8 max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">Interactive <span className="text-cyan-400">Demos</span></h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto font-light">Experience our platform capabilities hands-on. Try out the modules that power the next generation of learning.</p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demos.map((demo, index) => (
          <Link to={`/demo/${demo.id}`} key={demo.id} className={`group relative bg-white/5 rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 cursor-pointer shadow-2xl ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}>
            {/* Glowing orb behind the card on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/20 group-hover:via-purple-500/20 group-hover:to-cyan-400/20 transition-all duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
            
            <div className="relative h-64 overflow-hidden z-10">
              <img src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&sig=${demo.id}`} alt="Demo" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">{demo.title}</h3>
                <p className="text-gray-300 font-medium group-hover:text-white transition-colors">{demo.desc}</p>
              </div>
            </div>
            
            <div className="p-6 flex items-center justify-between border-t border-white/5 relative z-10 bg-black/20">
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                <Play size={16} className="fill-current" /> Launch Demo
              </span>
              <div className="w-8 h-8 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-zinc-900 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// 1.1 Demo Player Page - Launched interactive demo concept
export const DemoPlayerPage = () => {
  const { id } = useParams();
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  return (
    <div className="min-h-screen bg-black font-sans text-white relative flex flex-col">
      {/* Top Bar */}
      <div className="h-16 bg-zinc-950 border-b border-white/10 flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-4">
          <Link to="/demos" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Live Environment</span>
            <span className="text-sm font-semibold text-gray-200">Interactive Demo #{id || 1}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full border border-cyan-400/30 hover:bg-cyan-400 hover:text-black transition-colors">
            <Terminal size={14} /> View Source
          </button>
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="text-gray-400 hover:text-white transition-colors p-2">
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>
      
      {/* Main Workspace Concept */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 md:w-64 bg-zinc-900/50 border-r border-white/5 hidden sm:flex flex-col z-10">
          <div className="p-4 border-b border-white/5 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
            <Monitor size={20} className="text-cyan-400 shrink-0" /> <span className="hidden md:inline font-medium text-sm">Workspace</span>
          </div>
          <div className="p-4 border-b border-white/5 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
            <Settings size={20} className="text-purple-400 shrink-0" /> <span className="hidden md:inline font-medium text-sm">Configuration</span>
          </div>
          <div className="p-4 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
            <MessageSquare size={20} className="text-yellow-400 shrink-0" /> <span className="hidden md:inline font-medium text-sm">Collaboration</span>
          </div>
        </div>

        {/* Editor / Environment Space */}
        <div className="flex-1 relative bg-zinc-950 p-4 md:p-8 flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20 z-0"></div>
          
          <div className="relative z-10 flex-1 rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.1)] flex flex-col bg-zinc-900/80 backdrop-blur-xl">
            {/* Header of fake window */}
            <div className="h-10 bg-black/60 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="mx-auto text-xs font-mono text-gray-500">demo_environment_{id}.exe</div>
            </div>
            
            {/* Image Concept inside */}
            <div className="flex-1 relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070" alt="Code Environment" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/30 backdrop-blur-sm">
                <div className="w-24 h-24 bg-cyan-400 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,211,238,0.5)] animate-pulse">
                  <Play size={40} className="text-black ml-1" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg tracking-tight">Simulation <span className="text-cyan-400">Running</span></h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light drop-shadow-md">
                  This interactive module is currently active. Experience our real-time collaborative workspace firsthand.
                </p>
              </div>
              
              {/* Terminal Overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-black/80 backdrop-blur-md p-5 rounded-xl border border-white/10 font-mono text-xs text-green-400 shadow-2xl">
                <div className="text-gray-500 mb-2 border-b border-white/10 pb-2">Terminal</div>
                <div>{'>'} initializing environment...</div>
                <div>{'>'} loading assets... [OK]</div>
                <div>{'>'} establishing secure connection...</div>
                <div className="animate-pulse text-cyan-400">{'>'} connection established.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Features Page - Zig-Zag Layout
export const FeaturesPage = () => (
  <div className="min-h-screen bg-zinc-950 font-sans text-white pb-20 relative overflow-hidden">
    <BackButton />
    
    {/* Full Page Video Background */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
        <source src={videoStudy2} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-zinc-950/80"></div>
    </div>

    <div className="relative z-10 pt-32 px-8 max-w-7xl mx-auto text-center mb-24">
      <h1 className="text-5xl md:text-7xl font-black mb-6">Core <span className="text-cyan-400">Features</span></h1>
      <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-8 flex flex-col gap-32">
      {[
        { title: "Real-time Collaboration", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
        { title: "Advanced Analytics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
        { title: "Cloud Integration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" }
      ].map((feat, i) => (
        <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
          <div className="flex-1">
            <img src={feat.img} alt={feat.title} className="rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.2)] border border-cyan-400/20" />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">{feat.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-900 transition-colors rounded-full font-semibold">Explore Feature</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 3. Events Page - Timeline Layout with Video Header
export const EventsPage = () => (
  <div className="min-h-screen bg-zinc-900 font-sans text-white pb-20 relative">
    <BackButton />
    <div className="relative h-[50vh] flex items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src={videoStudy1} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      <h1 className="relative z-10 text-6xl md:text-8xl font-black text-orange-500 drop-shadow-2xl">UPCOMING EVENTS</h1>
    </div>
    <div className="max-w-4xl mx-auto px-8 relative -mt-20 z-20">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-500/30 transform -translate-x-1/2 hidden md:block"></div>
      {[1, 2, 3, 4].map(i => (
        <div key={i} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-1 w-full bg-zinc-800 p-8 rounded-2xl border border-orange-500/20 shadow-xl hover:border-orange-500 transition-colors">
            <div className="flex items-center gap-2 text-orange-500 mb-4 font-bold">
              <Calendar size={18} /> <span>Oct {10 + i}, 2026</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Tech Summit 2026</h3>
            <p className="text-gray-400">Join industry leaders for a day of intensive learning and networking.</p>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-zinc-900 z-10 hidden md:block"></div>
          <div className="flex-1 hidden md:block"></div>
        </div>
      ))}
    </div>
  </div>
);

// 4. Portfolio Page - Masonry Gallery with Video Header & Filters
export const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    { id: 1, title: 'E-commerce Redesign', category: 'Design', student: 'Jane Doe', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', height: 'h-96' },
    { id: 2, title: 'React Dashboard', category: 'Development', student: 'Mark Smith', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', height: 'h-64' },
    { id: 3, title: 'Social Media Campaign', category: 'Marketing', student: 'Sarah Lee', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', height: 'h-80' },
    { id: 4, title: 'Brand Identity', category: 'Design', student: 'Alex Chen', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800', height: 'h-64' },
    { id: 5, title: 'Mobile Banking App', category: 'Development', student: 'Emily Watson', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', height: 'h-96' },
    { id: 6, title: 'Urban Photography', category: 'Photography', student: 'Chris Evans', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', height: 'h-72' },
    { id: 7, title: 'SEO Optimization Strategy', category: 'Marketing', student: 'David Kim', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', height: 'h-64' },
    { id: 8, title: 'Nature Portraits', category: 'Photography', student: 'Anna White', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', height: 'h-80' },
  ];

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white pb-20 relative">
      <BackButton />
      
      {/* Video Header */}
      <div className="relative h-[60vh] flex items-center justify-center mb-16 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src={videoStudy2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-zinc-950 z-10"></div>
        <div className="relative z-20 text-center px-4 mt-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl tracking-tight">Student <span className="text-yellow-400">Portfolio</span></h1>
          <p className="text-gray-300 text-xl font-light tracking-wide max-w-2xl mx-auto">Discover the amazing projects created by our talented community.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-wrap justify-center gap-4 relative z-20">
        {['All', 'Design', 'Development', 'Marketing', 'Photography'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg ${activeCategory === cat ? 'bg-yellow-400 text-zinc-900 shadow-[0_0_20px_rgba(250,204,21,0.4)] scale-105' : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-8 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {filteredProjects.map(project => (
          <div key={project.id} className={`group relative w-full ${project.height} rounded-2xl overflow-hidden cursor-pointer shadow-2xl break-inside-avoid border border-white/5`}>
            <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-1 text-white shadow-sm">{project.title}</h3>
                <p className="text-gray-300 text-sm font-medium mb-6">By {project.student}</p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-yellow-400 hover:text-yellow-300 transition-colors">
                  View Case Study <ArrowLeft className="rotate-180 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-500 py-20 text-lg">No projects found in this category.</div>
      )}
    </div>
  );
};

// 5. Contact Page - Glassmorphism Split Layout
export const ContactPage = () => (
  <div className="min-h-screen bg-zinc-900 font-sans text-white relative flex items-center justify-center p-8">
    <BackButton />
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" alt="Map" className="w-full h-full object-cover opacity-30" />
    </div>
    <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <div className="p-16 bg-gradient-to-br from-yellow-400/20 to-transparent">
        <h1 className="text-5xl font-black mb-8">Get In Touch</h1>
        <p className="text-gray-300 mb-12 text-lg">We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.</p>
        <div className="space-y-6">
          <div className="flex items-center gap-4"><MapPin className="text-yellow-400" /> <span>123 Innovation Drive, Tech City</span></div>
          <div className="flex items-center gap-4"><Phone className="text-yellow-400" /> <span>+1 (555) 123-4567</span></div>
          <div className="flex items-center gap-4"><Mail className="text-yellow-400" /> <span>hello@eduma.com</span></div>
        </div>
      </div>
      <div className="p-16 flex flex-col justify-center">
        <form className="space-y-6">
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2 block">Name</label>
            <input type="text" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors" />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2 block">Email</label>
            <input type="email" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors" />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2 block">Message</label>
            <textarea rows="4" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"></textarea>
          </div>
          <button type="button" className="w-full bg-yellow-400 text-black font-bold py-4 rounded-sm hover:bg-yellow-300 transition-colors mt-8">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  </div>
);

// 6. Blog Page - Classic Editorial Grid
export const BlogPage = () => (
  <div className="min-h-screen bg-stone-900 font-serif text-stone-100 pb-20 relative">
    <BackButton />
    <div className="pt-32 px-8 max-w-7xl mx-auto border-b border-stone-800 pb-16 mb-16 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 italic">The Journal</h1>
      <p className="text-stone-400 font-sans tracking-widest uppercase text-sm">Insights & Perspectives</p>
    </div>
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 group cursor-pointer">
        <div className="overflow-hidden mb-6">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" />
        </div>
        <p className="text-yellow-500 font-sans text-sm font-bold uppercase tracking-widest mb-3">Technology</p>
        <h2 className="text-4xl font-bold mb-4 leading-tight group-hover:text-yellow-500 transition-colors">The Future of AI in Modern Education Systems</h2>
        <p className="text-stone-400 text-lg font-sans">Discover how artificial intelligence is reshaping the way we learn, teach, and interact with educational content on a global scale.</p>
      </div>
      <div className="flex flex-col gap-12">
        {[1, 2, 3].map(i => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden mb-4 h-48">
              <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&sig=${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" />
            </div>
            <p className="text-yellow-500 font-sans text-xs font-bold uppercase tracking-widest mb-2">Design</p>
            <h3 className="text-xl font-bold group-hover:text-yellow-500 transition-colors">Mastering Minimalist UI Principles</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 7. Store Page - E-commerce Grid
export const StorePage = () => (
  <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20 relative">
    <div className="absolute top-8 left-8 z-50 flex items-center gap-3 text-gray-900 hover:text-yellow-600 transition-all hover:-translate-x-2 bg-white p-3 rounded-full shadow-md border border-gray-200">
      <Link to="/"><ArrowLeft size={24} /></Link>
    </div>
    <div className="bg-zinc-900 text-white py-20 px-8 text-center mb-16">
      <h1 className="text-5xl font-black mb-4">EDUMA <span className="text-yellow-400">Store</span></h1>
      <p className="text-gray-400">Premium books, merchandise, and study materials.</p>
    </div>
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
          <div className="aspect-square bg-gray-100 rounded-lg mb-6 flex items-center justify-center p-8 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" alt="Book" className="w-full h-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-20%</div>
          </div>
          <h3 className="text-lg font-bold mb-2">Advanced React Patterns</h3>
          <p className="text-gray-500 text-sm mb-4">Paperback Edition</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-black">$39.99</span>
            <button className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-900 transition-colors">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 8. Auth Page - Split Layout for Login/Register
export const AuthPage = ({ isLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // We can mock storing the Google user in local storage
      // In a real app, you would send user.accessToken to backend to verify and create session
      localStorage.setItem('user', JSON.stringify({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        token: user.accessToken,
        isGoogleAuth: true
      }));
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isLogin ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users';
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? { email: formData.email, password: formData.password } : formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      <BackButton />
      <div className="flex-1 bg-zinc-950 flex flex-col justify-center px-16 lg:px-32 relative text-white">
        <div className="max-w-md w-full mx-auto relative z-10">
          <h1 className="text-4xl font-black mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-gray-400 mb-10">{isLogin ? 'Enter your details to access your account.' : 'Join the EDUMA community today.'}</p>
          
          {error && <div className="bg-red-500/20 border border-red-500/50 text-red-500 px-4 py-3 rounded-xl mb-6">{error}</div>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="text-sm text-gray-400 font-bold mb-2 block">Full Name</label>
                <div className="relative">
                  <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-yellow-400" placeholder="John Doe" required={!isLogin} />
                </div>
              </div>
            )}
            <div>
              <label className="text-sm text-gray-400 font-bold mb-2 block">Email Address</label>
              <div className="relative">
                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-yellow-400" placeholder="john@example.com" required />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 font-bold mb-2 block">Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-yellow-400" placeholder="••••••••" required />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-yellow-400 text-zinc-900 font-bold py-3.5 rounded-xl hover:bg-yellow-300 transition-colors mt-6 shadow-[0_0_20px_rgba(250,204,21,0.2)] disabled:opacity-50">
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>
            
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative bg-zinc-950 px-4 text-sm text-gray-500 uppercase tracking-widest font-bold">Or</span>
            </div>

            <button type="button" onClick={handleGoogleLogin} className="w-full bg-white text-zinc-900 font-bold py-3.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </form>
          <p className="text-center text-gray-500 mt-8">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link to={isLogin ? "/register" : "/login"} className="text-yellow-400 font-bold hover:underline">
              {isLogin ? 'Register' : 'Log In'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// 9. Search Page - Focused Large Input Layout
export const SearchPage = () => (
  <div className="min-h-screen bg-zinc-950 font-sans text-white relative flex flex-col items-center justify-center px-8">
    <BackButton />
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">What are you looking for?</h1>
      <div className="relative group">
        <Search size={32} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors" />
        <input 
          type="text" 
          autoFocus
          placeholder="Search courses, articles, events..." 
          className="w-full bg-zinc-900/50 border-2 border-white/10 rounded-full py-6 pl-20 pr-8 text-2xl text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:bg-zinc-900 transition-all shadow-2xl"
        />
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4 font-bold uppercase tracking-widest text-sm">Popular Searches</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Web Development', 'UI/UX Design', 'Machine Learning', 'Marketing Strategies', 'Python For Beginners'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-sm text-gray-400 hover:text-yellow-400 hover:border-yellow-400/50 cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 10. About Page - Mission and Team Layout
export const AboutPage = () => (
  <div className="min-h-screen bg-zinc-900 font-sans text-white pb-20 relative">
    <BackButton />
    <div className="pt-32 px-8 max-w-4xl mx-auto text-center mb-24">
      <h1 className="text-5xl md:text-7xl font-black mb-8">Our <span className="text-yellow-400">Mission</span></h1>
      <p className="text-2xl text-gray-300 leading-relaxed font-light">
        To democratize education by providing high-quality, accessible, and affordable learning experiences to anyone, anywhere in the world.
      </p>
    </div>
    
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 rounded-3xl translate-x-4 translate-y-4"></div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Office" className="relative z-10 rounded-3xl shadow-2xl w-full" />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-6">Built by learners, <br/>for learners.</h2>
        <p className="text-gray-400 text-lg mb-6 leading-relaxed">We started EDUMA with a simple idea: education shouldn't be confined to physical classrooms or limited by geography.</p>
        <p className="text-gray-400 text-lg leading-relaxed">Today, we are a global team of educators, engineers, and designers working together to build the best learning platform on the internet.</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-8 text-center">
      <h2 className="text-4xl font-bold mb-16">Meet The Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { name: "Alex Chen", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
          { name: "Sarah Jenkins", role: "Head of Education", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
          { name: "Marcus Johnson", role: "CTO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
          { name: "Emily Watson", role: "Design Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" }
        ].map(member => (
          <div key={member.name} className="group">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-zinc-800 group-hover:border-yellow-400 transition-colors duration-300">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
