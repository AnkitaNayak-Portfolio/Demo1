import React from 'react';
import { 
  BookOpen, 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Award, 
  Users, 
  Settings,
  PlayCircle,
  Clock
} from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="flex w-full min-h-screen text-slate-100 bg-gradient-to-br from-slate-900 to-indigo-950">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 glass-panel m-4 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">NEXUS LMS</h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 flex flex-col gap-2">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<BookOpen size={18} />} label="Courses" />
          <NavItem icon={<FileText size={18} />} label="Assignments" />
          <NavItem icon={<Calendar size={18} />} label="Schedule" />
          <NavItem icon={<Award size={18} />} label="Certificates" />
          <NavItem icon={<Users size={18} />} label="Community" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 pl-0">
        
        {/* Topbar */}
        <header className="flex justify-between items-center py-2 px-4 mb-6">
          <div className="relative w-96">
            <input 
              type="text" 
              placeholder="Search courses, assignments..." 
              className="w-full bg-black/20 border border-white/10 rounded-full py-2.5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-300">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"></div>
              <span className="text-sm font-medium">Alex Thompson</span>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-6 flex-1">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Welcome Banner */}
            <div className="glass-panel p-8 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome back, Alex!</h2>
                <p className="text-slate-400">You've completed 70% of your weekly goal. Keep it up!</p>
                <button className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2.5 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
                  Resume Learning
                </button>
              </div>
              <div className="hidden lg:flex gap-6">
                <ProgressRing percent={78} label="Completion" color="stroke-indigo-500" />
                <ProgressRing percent={90} label="Daily Goal" color="stroke-purple-500" />
              </div>
            </div>

            {/* Enrolled Courses */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CourseCard 
                  title="Advanced React Patterns"
                  progress={72}
                  timeLeft="12m left"
                  gradient="from-cyan-500 to-blue-500"
                />
                <CourseCard 
                  title="Python Data Science"
                  progress={45}
                  timeLeft="45m left"
                  gradient="from-yellow-400 to-orange-500"
                />
                <CourseCard 
                  title="UI/UX Design Systems"
                  progress={88}
                  timeLeft="5m left"
                  gradient="from-pink-500 to-rose-500"
                />
                <CourseCard 
                  title="Fullstack Next.js"
                  progress={12}
                  timeLeft="3h left"
                  gradient="from-emerald-400 to-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="flex flex-col gap-6">
            
            {/* Upcoming Deadlines */}
            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
              <div className="flex flex-col gap-4">
                <DeadlineItem 
                  title="React Context API Quiz"
                  course="Advanced React"
                  date="Today, 11:59 PM"
                  urgent
                />
                <DeadlineItem 
                  title="Data Analysis Project"
                  course="Python Data Science"
                  date="Tomorrow, 5:00 PM"
                />
                <DeadlineItem 
                  title="Wireframing Assignment"
                  course="UI/UX Design"
                  date="Oct 29, 11:59 PM"
                />
              </div>
            </div>

            {/* Recent Certificates */}
            <div className="glass-panel p-6 flex-1">
               <h3 className="text-lg font-semibold mb-4">Achievements</h3>
               <div className="p-4 border border-white/10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex flex-col items-center justify-center text-center gap-3">
                 <Award size={40} className="text-yellow-400" />
                 <div>
                   <p className="font-semibold text-indigo-200">JavaScript Basics</p>
                   <p className="text-xs text-slate-400">Earned Oct 15</p>
                 </div>
                 <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors mt-2">
                   View Certificate
                 </button>
               </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

// --- Subcomponents ---

const NavItem = ({ icon, label, active }) => (
  <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? 'bg-gradient-to-r from-indigo-500/30 to-purple-500/10 text-indigo-300 border border-indigo-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}>
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </a>
);

const ProgressRing = ({ percent, label, color }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative w-20 h-20">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <path className="stroke-white/10" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path className={`${color}`} strokeDasharray={`${percent}, 100`} strokeWidth="3" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
        {percent}%
      </div>
    </div>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
);

const CourseCard = ({ title, progress, timeLeft, gradient }) => (
  <div className="glass-panel p-5 group hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/10 transition-all"></div>
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg`}>
      <PlayCircle size={24} className="text-white" />
    </div>
    <h4 className="font-semibold mb-1 text-lg">{title}</h4>
    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
      <Clock size={12} />
      <span>{timeLeft}</span>
    </div>
    <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
      <div className={`h-full bg-gradient-to-r ${gradient}`} style={{ width: `${progress}%` }}></div>
    </div>
    <div className="flex justify-between mt-2 text-xs font-medium text-slate-300">
      <span>Progress</span>
      <span>{progress}%</span>
    </div>
  </div>
);

const DeadlineItem = ({ title, course, date, urgent }) => (
  <div className="p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-1 cursor-pointer">
    <div className="flex justify-between items-start">
      <h5 className="font-medium text-sm text-slate-200">{title}</h5>
      {urgent && <span className="px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider">Urgent</span>}
    </div>
    <span className="text-xs text-indigo-300">{course}</span>
    <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
      <Calendar size={10} /> {date}
    </span>
  </div>
);

export default StudentDashboard;
