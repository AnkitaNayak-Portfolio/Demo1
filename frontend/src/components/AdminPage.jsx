import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut,
  TrendingUp,
  Activity,
  DollarSign,
  Search,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    
    // Fetch users
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

    fetchUsers();
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
    <div className="min-h-screen bg-zinc-950 flex font-sans text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-white/5 flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center font-black text-black text-xl">E</div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Admin Panel</h2>
            <p className="text-xs text-gray-500">EDUMA Platform</p>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                activeTab === item.id 
                ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.2)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <ArrowLeft size={20} />
            Back to Site
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all font-medium"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="h-20 bg-zinc-900/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-zinc-900 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-400 w-64 transition-all"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-yellow-400 overflow-hidden cursor-pointer">
              <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Users', value: users.length.toString(), icon: <Users size={24} className="text-blue-400" />, trend: '+12%' },
                  { label: 'Active Courses', value: '45', icon: <BookOpen size={24} className="text-green-400" />, trend: '+3%' },
                  { label: 'Total Revenue', value: '$12,450', icon: <DollarSign size={24} className="text-yellow-400" />, trend: '+24%' }
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex items-center justify-between hover:border-white/10 transition-colors">
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">{stat.label}</p>
                      <h3 className="text-3xl font-black">{stat.value}</h3>
                    </div>
                    <div className="w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center shadow-inner">
                      {stat.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Users Quick View */}
              <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="font-bold text-lg">Recent Signups</h3>
                  <button onClick={() => setActiveTab('users')} className="text-sm text-yellow-400 font-medium hover:underline">View All</button>
                </div>
                <div className="divide-y divide-white/5">
                  {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading users...</div>
                  ) : users.slice(0, 5).map(user => (
                    <div key={user._id} className="p-4 px-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-yellow-400">
                          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-xs font-medium px-3 py-1 bg-green-500/10 text-green-400 rounded-full">
                        Active
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden animate-fade-in-up">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">All Users</h3>
                  <p className="text-sm text-gray-400">Manage all registered users</p>
                </div>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold hover:bg-yellow-300 transition-colors">
                  Add User
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-black/50 text-gray-400 text-sm">
                      <th className="p-4 font-medium">Name</th>
                      <th className="p-4 font-medium">Email</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {loading ? (
                      <tr><td colSpan="4" className="p-8 text-center text-gray-500">Loading...</td></tr>
                    ) : users.map(user => (
                      <tr key={user._id} className="hover:bg-white/5 transition-colors group">
                        <td className="p-4 font-medium">{user.name}</td>
                        <td className="p-4 text-gray-400">{user.email}</td>
                        <td className="p-4">
                          <span className="text-xs font-medium px-3 py-1 bg-green-500/10 text-green-400 rounded-full">Active</span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === 'courses' || activeTab === 'settings') && (
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/50 animate-fade-in-up">
              <Activity size={48} className="text-yellow-400 mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2 capitalize">{activeTab} Module</h3>
              <p className="text-gray-500">This section is currently under development.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
