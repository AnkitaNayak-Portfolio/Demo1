import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut,
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  Search,
  MoreVertical,
  ArrowLeft,
  Bell,
  ChevronDown,
  CheckCircle2,
  X,
  Trash2,
  Edit2
} from 'lucide-react';
import UserForm from './UserForm';

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' });
        if (res.ok) fetchUsers();
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/users/${editingUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editingUser.name, email: editingUser.email })
      });
      if (res.ok) {
        setEditingUser(null);
        fetchUsers();
      }
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users');
      const data = await res.json();
      if (res.ok) {
        setUsers(data);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/courses');
      const data = await res.json();
      if (res.ok) setCourses(data);
    } catch (err) {
      console.error('Error fetching courses:', err);
    } finally {
      setLoadingCourses(false);
    }
  };

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    setCurrentUser(JSON.parse(userStr));
    fetchUsers();
    fetchCourses();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'users', label: 'Manage Users', icon: <Users size={20} /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-50 selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900/40 backdrop-blur-2xl border-r border-white/5 flex flex-col h-screen sticky top-0 z-20 shadow-2xl">
        <div className="p-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="font-black text-white text-2xl tracking-tighter">E</span>
          </div>
          <div>
            <h2 className="font-bold text-xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Admin Pro</h2>
            <p className="text-xs text-indigo-300/80 font-medium tracking-wider uppercase mt-1">Platform</p>
          </div>
        </div>

        <nav className="flex-1 py-4 px-6 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 px-2">Menu</p>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 font-medium group relative overflow-hidden ${
                activeTab === item.id 
                ? 'text-white shadow-lg shadow-indigo-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-xl"></div>
              )}
              {activeTab === item.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-[0_0_10px_white]"></div>
              )}
              <span className={`relative z-10 transition-transform duration-300 ${activeTab === item.id ? 'scale-110 text-white' : 'group-hover:scale-110 group-hover:text-indigo-400'}`}>
                {item.icon}
              </span>
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 space-y-3">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Site</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 font-medium group"
          >
            <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10 flex flex-col h-screen">
        {/* Topbar */}
        <header className="h-24 px-10 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-3xl font-bold capitalize bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">{activeTab}</h1>
            <p className="text-sm text-slate-400 mt-1">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-slate-900/80 w-72 transition-all duration-300 placeholder:text-slate-500 shadow-inner"
              />
            </div>
            
            <button className="relative p-2.5 rounded-xl bg-slate-900/50 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900"></span>
            </button>

            <div 
              className="relative"
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <div 
                className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer group"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                  <div className="w-full h-full rounded-[10px] overflow-hidden bg-slate-900">
                    <img src={`https://ui-avatars.com/api/?name=${currentUser?.name || 'Admin'}&background=random`} alt={currentUser?.name || 'Admin'} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-white">{currentUser?.name || 'Administrator'}</p>
                  <p className="text-xs text-slate-400">Super Admin</p>
                </div>
                <ChevronDown size={16} className={`text-slate-500 group-hover:text-white transition-all ml-1 ${showProfileMenu ? 'rotate-180' : ''}`} />
              </div>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out] z-50">
                  <div className="p-4 border-b border-white/5">
                    <p className="font-semibold text-white">{currentUser?.name || 'Administrator'}</p>
                    <p className="text-xs text-slate-400 mt-1">{currentUser?.email || 'admin@example.com'}</p>
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    <button onClick={() => { setActiveTab('settings'); setShowProfileMenu(false); }} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                      <Settings size={16} /> Settings
                    </button>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-colors mt-1">
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="p-10 pt-4 flex-1">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Users', value: users.length.toString(), icon: <Users size={28} />, color: 'from-blue-500 to-cyan-400', shadow: 'shadow-blue-500/20', trend: '+12%', trendUp: true },
                  { label: 'Active Courses', value: '45', icon: <BookOpen size={28} />, color: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-500/20', trend: '+5%', trendUp: true },
                  { label: 'Total Revenue', value: '$12,450', icon: <DollarSign size={28} />, color: 'from-emerald-400 to-teal-500', shadow: 'shadow-emerald-500/20', trend: '+24%', trendUp: true }
                ].map((stat, i) => (
                  <div key={i} className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-colors duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${stat.color}"></div>
                    <div className="bg-slate-900/80 backdrop-blur-xl h-full rounded-[23px] p-7 flex flex-col justify-between relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-[1px] shadow-lg ${stat.shadow}`}>
                          <div className="w-full h-full bg-slate-900/90 rounded-[15px] flex items-center justify-center">
                            <span className={`bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}>
                              {stat.icon}
                            </span>
                          </div>
                        </div>
                        <div className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${stat.trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                          {stat.trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                          {stat.trend}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-4xl font-black text-white tracking-tight mb-1">{stat.value}</h3>
                        <p className="text-slate-400 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Users Quick View */}
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-[23px] overflow-hidden">
                  <div className="p-7 border-b border-white/5 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-white">Recent Signups</h3>
                      <p className="text-sm text-slate-400 mt-1">Latest members joined the platform</p>
                    </div>
                    <button onClick={() => setActiveTab('users')} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-indigo-300 text-sm font-semibold rounded-xl transition-colors duration-300 flex items-center gap-2">
                      View All Users <ArrowLeft size={16} className="rotate-180" />
                    </button>
                  </div>
                  <div className="divide-y divide-white/5">
                    {loading ? (
                      <div className="p-10 flex flex-col items-center justify-center text-slate-500 space-y-4">
                        <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                        <p className="font-medium animate-pulse">Loading amazing users...</p>
                      </div>
                    ) : users.slice(0, 5).map(user => (
                      <div key={user._id} className="p-5 px-7 flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-300 group">
                        <div className="flex items-center gap-5">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-bold text-lg text-indigo-300 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300 shadow-lg shadow-black/20">
                              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                          </div>
                          <div>
                            <p className="font-semibold text-white text-base">{user.name}</p>
                            <p className="text-sm text-slate-400 mt-0.5">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                            <CheckCircle2 size={14} /> Active
                          </span>
                          <button className="p-2 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                    {users.length === 0 && !loading && (
                       <div className="p-10 text-center text-slate-500">No users found.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 h-full">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-[23px] overflow-hidden flex flex-col h-[calc(100vh-160px)]">
                  <div className="p-7 border-b border-white/5 flex items-center justify-between shrink-0">
                    <div>
                      <h3 className="font-bold text-xl text-white">All Users</h3>
                      <p className="text-sm text-slate-400 mt-1">Manage, view and edit all registered users</p>
                    </div>
                    <button 
                      onClick={() => setShowAddUserModal(true)}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    >
                      + Add New User
                    </button>
                  </div>
                  <div className="overflow-auto flex-1 p-2">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="text-slate-400 text-xs uppercase tracking-wider sticky top-0 bg-slate-900/90 backdrop-blur z-10">
                          <th className="p-5 font-semibold rounded-tl-xl">User Profile</th>
                          <th className="p-5 font-semibold">Email Address</th>
                          <th className="p-5 font-semibold">Status</th>
                          <th className="p-5 font-semibold text-right rounded-tr-xl">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {loading ? (
                          <tr>
                            <td colSpan="4">
                               <div className="p-20 flex flex-col items-center justify-center text-slate-500 space-y-4">
                                  <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                                  <p className="font-medium animate-pulse">Loading amazing users...</p>
                                </div>
                            </td>
                          </tr>
                        ) : users.map(user => (
                          <tr key={user._id} className="hover:bg-white/[0.02] transition-colors duration-200 group">
                            <td className="p-4 px-5">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-bold text-sm text-indigo-300 shadow-sm">
                                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{user.name}</span>
                              </div>
                            </td>
                            <td className="p-4 px-5 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{user.email}</td>
                            <td className="p-4 px-5">
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Active
                              </span>
                            </td>
                            <td className="p-4 px-5 text-right">
                              <div className="flex justify-end gap-2">
                                <button 
                                  onClick={() => setEditingUser(user)}
                                  className="p-2 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-xl transition-all duration-200"
                                >
                                  <Edit2 size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteUser(user._id)}
                                  className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all duration-200"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 h-full">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-[23px] overflow-hidden flex flex-col h-[calc(100vh-160px)]">
                  <div className="p-7 border-b border-white/5 flex items-center justify-between shrink-0">
                    <div>
                      <h3 className="font-bold text-xl text-white">Course Library</h3>
                      <p className="text-sm text-slate-400 mt-1">Manage all educational programs on the platform</p>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                      + Add Course
                    </button>
                  </div>
                  <div className="overflow-auto flex-1 p-2">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="text-slate-400 text-xs uppercase tracking-wider sticky top-0 bg-slate-900/90 backdrop-blur z-10">
                          <th className="p-5 font-semibold rounded-tl-xl">Course Info</th>
                          <th className="p-5 font-semibold">Category</th>
                          <th className="p-5 font-semibold">Price</th>
                          <th className="p-5 font-semibold text-right rounded-tr-xl">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {loadingCourses ? (
                          <tr>
                            <td colSpan="4">
                               <div className="p-20 flex flex-col items-center justify-center text-slate-500 space-y-4">
                                  <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                                  <p className="font-medium animate-pulse">Loading amazing courses...</p>
                                </div>
                            </td>
                          </tr>
                        ) : courses.map(course => (
                          <tr key={course._id} className="hover:bg-white/[0.02] transition-colors duration-200 group">
                            <td className="p-4 px-5">
                              <div className="flex items-center gap-4">
                                <img src={course.image} alt={course.title} className="w-12 h-10 rounded-lg object-cover shadow-sm border border-white/10" />
                                <div>
                                  <p className="font-medium text-slate-200 group-hover:text-white transition-colors line-clamp-1">{course.title}</p>
                                  <p className="text-xs text-slate-500 mt-0.5">{course.instructor}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 px-5">
                              <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full">
                                {course.category}
                              </span>
                            </td>
                            <td className="p-4 px-5 font-semibold text-indigo-300">{course.price}</td>
                            <td className="p-4 px-5 text-right">
                              <div className="flex justify-end gap-2">
                                <button className="p-2 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-xl transition-all duration-200">
                                  <Edit2 size={18} />
                                </button>
                                <button onClick={async () => {
                                  if (window.confirm('Delete this course?')) {
                                    await fetch(`http://localhost:5000/api/courses/${course._id}`, { method: 'DELETE' });
                                    fetchCourses();
                                  }
                                }} className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all duration-200">
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 h-full">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-[23px] overflow-hidden flex flex-col h-[calc(100vh-160px)] p-8">
                   <h3 className="font-bold text-2xl text-white mb-8">Platform Settings</h3>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-6">
                       <h4 className="text-lg font-semibold text-indigo-300 border-b border-white/10 pb-2">General</h4>
                       <div className="flex flex-col gap-2">
                         <label className="text-sm text-slate-400 font-medium">Platform Name</label>
                         <input type="text" defaultValue="Masterclass Pro" className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 focus:border-indigo-500 focus:outline-none" />
                       </div>
                       <div className="flex flex-col gap-2">
                         <label className="text-sm text-slate-400 font-medium">Support Email</label>
                         <input type="email" defaultValue="support@masterclass.com" className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 focus:border-indigo-500 focus:outline-none" />
                       </div>
                     </div>
                     
                     <div className="space-y-6">
                       <h4 className="text-lg font-semibold text-indigo-300 border-b border-white/10 pb-2">Appearance</h4>
                       <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                         <div>
                           <p className="font-medium text-white">Dark Mode</p>
                           <p className="text-sm text-slate-400">Default dark aesthetic</p>
                         </div>
                         <div className="w-12 h-6 bg-indigo-500 rounded-full relative cursor-pointer shadow-inner">
                           <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                         </div>
                       </div>
                       <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                         <div>
                           <p className="font-medium text-white">Public Registration</p>
                           <p className="text-sm text-slate-400">Allow users to sign up</p>
                         </div>
                         <div className="w-12 h-6 bg-indigo-500 rounded-full relative cursor-pointer shadow-inner">
                           <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="mt-auto pt-8 flex justify-end">
                     <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all">
                       Save Configuration
                     </button>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-md">
            <button 
              onClick={() => setShowAddUserModal(false)}
              className="absolute top-6 right-6 z-10 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X size={20} />
            </button>
            <UserForm onUserCreated={() => {
              setShowAddUserModal(false);
              fetchUsers();
            }} />
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden shadow-indigo-500/20">
            <button 
              onClick={() => setEditingUser(null)}
              className="absolute top-6 right-6 z-10 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X size={20} />
            </button>
            <div className="p-8">
              <h2 className="text-[1.25rem] font-semibold mb-6">Edit User</h2>
              <form onSubmit={handleUpdateUser} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="edit-name" className="text-sm text-slate-400 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="edit-name"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    required
                    className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="edit-email" className="text-sm text-slate-400 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="edit-email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    required
                    className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <button type="submit" className="bg-gradient-to-br from-indigo-500 to-indigo-400 text-white py-3.5 px-6 rounded-xl font-semibold text-base transition-all duration-300 mt-4 shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:-translate-y-0.5">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
