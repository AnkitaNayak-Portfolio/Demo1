import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Clock, Users, ArrowLeft, PlayCircle, Bookmark } from 'lucide-react';
import videoStudy1 from './4k-free-stock-video-studying-education-and-learning-ytmp4.savetube.vip.mp4';

const courses = [
  {
    id: 1,
    title: 'Advanced Web Development BootCamp',
    instructor: 'Sarah Drasner',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    price: '$89.99',
    rating: 4.9,
    students: '12.5k',
    duration: '32h 45m',
    category: 'Development'
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    instructor: 'Andrew Ng',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    price: '$99.99',
    rating: 4.8,
    students: '8.2k',
    duration: '45h 20m',
    category: 'Data Science'
  },
  {
    id: 3,
    title: 'Master UI/UX Design Fundamentals',
    instructor: 'Gary Simon',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    price: '$79.99',
    rating: 4.7,
    students: '5.1k',
    duration: '18h 15m',
    category: 'Design'
  },
  {
    id: 4,
    title: 'Digital Marketing Masterclass',
    instructor: 'Neil Patel',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074',
    price: '$69.99',
    rating: 4.6,
    students: '10.3k',
    duration: '22h 10m',
    category: 'Marketing'
  },
  {
    id: 5,
    title: 'Business Strategy and Leadership',
    instructor: 'Simon Sinek',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    price: '$120.00',
    rating: 4.9,
    students: '4.8k',
    duration: '15h 30m',
    category: 'Business'
  },
  {
    id: 6,
    title: 'Professional Photography Basics',
    instructor: 'Peter McKinnon',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000',
    price: '$59.99',
    rating: 4.8,
    students: '7.6k',
    duration: '12h 00m',
    category: 'Photography'
  },
  {
    id: 7,
    title: 'Full-Stack React & Node.js',
    instructor: 'Brad Traversy',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    price: '$89.99',
    rating: 4.8,
    students: '15.2k',
    duration: '28h 15m',
    category: 'Development'
  },
  {
    id: 8,
    title: 'Python for Data Analysis',
    instructor: 'Jose Portilla',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=2000',
    price: '$94.99',
    rating: 4.7,
    students: '9.4k',
    duration: '20h 45m',
    category: 'Development'
  },
  {
    id: 9,
    title: 'Figma to Code',
    instructor: 'Kevin Powell',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=2070',
    price: '$45.00',
    rating: 4.9,
    students: '6.1k',
    duration: '10h 30m',
    category: 'Design'
  }
];

const CourseCard = ({ course }) => (
  <div className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 transition-colors duration-500 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="bg-slate-900/90 backdrop-blur-xl h-full rounded-[23px] overflow-hidden flex flex-col relative z-10 shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
        <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wide shadow-lg">
            {course.category}
          </span>
        </div>
        <button className="absolute top-4 right-4 z-20 p-2.5 bg-black/30 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-indigo-500/50 border border-white/10 transition-all duration-300">
          <Bookmark size={18} />
        </button>
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-sm font-bold text-white">{course.rating}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-500/80 backdrop-blur-md flex items-center justify-center text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-indigo-500/30 border border-indigo-400">
            <PlayCircle size={20} className="ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-indigo-300 transition-colors duration-300">{course.title}</h3>
        <p className="text-slate-400 text-sm mb-6 flex-1">By <span className="text-slate-300 font-medium">{course.instructor}</span></p>
        
        <div className="flex items-center justify-between pt-5 border-t border-white/5">
          <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-indigo-400" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-purple-400" />
              <span>{course.students}</span>
            </div>
          </div>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">{course.price}</span>
        </div>
      </div>
    </div>
  </div>
);

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const categories = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Data Science', 'Photography'];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-indigo-500/30 relative pb-24 overflow-x-hidden">
      {/* Abstract Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 z-10 flex flex-col items-center justify-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src={videoStudy1} type="video/mp4" />
          </video>
        </div>
        
        <Link to="/" className="absolute top-8 left-8 md:top-10 md:left-10 z-20 flex items-center gap-3 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full transition-all duration-300 group border border-white/10">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Back to Home</span>
        </Link>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold text-sm mb-6 animate-[fadeInUp_0.5s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Elevate Your Potential
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter animate-[fadeInUp_0.6s_ease-out] leading-tight">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Mastery</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 animate-[fadeInUp_0.7s_ease-out] leading-relaxed">
            Unlock world-class educational programs meticulously designed by industry experts to accelerate your career.
          </p>
          
          <div className="relative w-full max-w-2xl animate-[fadeInUp_0.8s_ease-out] group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-full p-2">
              <Search size={22} className="text-slate-500 ml-4" />
              <input 
                type="text" 
                placeholder="What do you want to learn today?" 
                className="w-full bg-transparent border-none py-3 px-4 text-white placeholder-slate-500 focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full px-8 py-3.5 font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-10 mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Featured Programs</h2>
            <p className="text-slate-400">Hand-picked courses to help you get started.</p>
          </div>
          
          <div className="flex gap-2 flex-wrap pb-1">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                  cat === activeCategory 
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/50' 
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="py-32 flex flex-col items-center justify-center text-center">
             <div className="w-24 h-24 mb-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Search size={40} className="text-slate-500" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
             <p className="text-slate-400">We couldn't find any courses matching the "{activeCategory}" category.</p>
             <button onClick={() => setActiveCategory('All')} className="mt-6 text-indigo-400 hover:text-indigo-300 font-semibold hover:underline">
               Clear filters
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
