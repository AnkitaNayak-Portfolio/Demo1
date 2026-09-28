import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Clock, Users, ArrowLeft } from 'lucide-react';
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
  <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
    <div className="relative h-48 overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-yellow-400 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        {course.category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-1 text-yellow-400 mb-3">
        <Star size={16} className="fill-current" />
        <span className="text-sm font-bold text-white ml-1">{course.rating}</span>
        <span className="text-gray-400 text-xs">({course.students})</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-yellow-400 transition-colors">{course.title}</h3>
      <p className="text-gray-400 text-sm mb-4">By {course.instructor}</p>
      
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students}</span>
          </div>
        </div>
        <span className="text-xl font-black text-white">{course.price}</span>
      </div>
    </div>
  </div>
);

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-900 font-sans text-white pb-20">
      {/* Header */}
      <div className="relative h-[400px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src={videoStudy1} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50 z-0 mix-blend-multiply"></div>
        
        <Link to="/" className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-4 text-white hover:text-zinc-900 bg-white/10 hover:bg-yellow-400 backdrop-blur-md px-6 py-3 rounded-full transition-all hover:-translate-x-2 animate-fade-in-up border border-white/20 hover:border-yellow-400 shadow-xl" style={{ animationDelay: '0.4s' }}>
          <ArrowLeft size={28} />
          <span className="text-xl font-black tracking-widest uppercase mt-0.5">Back to Home</span>
        </Link>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up">
            EXPLORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">COURSES</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Discover world-class programs designed to elevate your skills and empower your future career.
          </p>
          
          <div className="relative w-full max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <input 
              type="text" 
              placeholder="Search for courses, skills, or instructors..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-14 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 backdrop-blur-sm transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-yellow-400 text-zinc-900 rounded-full w-12 flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-lg">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-8 mt-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-2">Featured Programs</h2>
            <div className="w-20 h-1 bg-yellow-400"></div>
          </div>
          <div className="hidden md:flex gap-3 flex-wrap justify-end">
            {['All', 'Development', 'Design', 'Business', 'Marketing', 'Data Science', 'Photography'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${cat === activeCategory ? 'border-yellow-400 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]' : 'border-white/20 text-gray-400 hover:border-white hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
          {filteredCourses.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-400 text-lg">
              No courses found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
