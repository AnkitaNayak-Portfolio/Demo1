import { useState } from 'react';
import { createUserApi } from '../services/api';

const UserForm = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserApi(formData);
      setFormData({ name: '', email: '', age: '' });
      if (onUserCreated) {
        onUserCreated();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="glass-panel p-8 flex flex-col gap-6">
      <h2 className="text-[1.25rem] font-semibold">Add New User</h2>
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
            className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-black/40"
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
            className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-black/40"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="text-sm text-slate-400 font-medium">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="25"
            value={formData.age}
            onChange={handleInputChange}
            className="bg-black/20 border border-white/10 p-3 rounded-xl text-slate-50 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-black/40"
          />
        </div>

        <button type="submit" className="bg-gradient-to-br from-indigo-500 to-indigo-400 text-white py-3.5 px-6 rounded-xl font-semibold text-base transition-all duration-300 mt-4 shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)] active:translate-y-0">
          Create User
        </button>
      </form>
    </section>
  );
};

export default UserForm;
