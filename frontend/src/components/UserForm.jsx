import { useState } from 'react';
import { createUserApi, forgotPasswordApi } from '../services/api';
import { Eye, EyeOff } from 'lucide-react';

const UserForm = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserApi(formData);
      setFormData({ name: '', email: '', password: '' });
      if (onUserCreated) {
        onUserCreated();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError("Please enter an email address to reset password.");
    } else {
      setError("");
      try {
        await forgotPasswordApi(formData.email);
        alert(`Password reset link sent to your email!`);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <section className="glass-panel p-8 flex flex-col gap-6 bg-slate-900 border border-white/10 rounded-3xl">
      <h2 className="text-[1.25rem] font-semibold text-white">Add New User</h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-slate-400 font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-slate-400 font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm text-slate-400 font-medium">Password</label>
            <button type="button" onClick={handleForgotPassword} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none">Forgot Password?</button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter a secure password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full bg-black/20 border border-white/10 p-3 pr-12 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-400 transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button type="submit" className="bg-gradient-to-br from-indigo-500 to-indigo-400 text-white py-3.5 px-6 rounded-xl font-semibold text-base transition-all duration-300 mt-4 shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)] active:translate-y-0">
          Create User
        </button>
      </form>
    </section>
  );
};

export default UserForm;
