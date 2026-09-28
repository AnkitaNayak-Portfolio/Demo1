import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/10 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-sm rotate-3 shadow-lg">
                <span className="text-zinc-900 font-black text-xl -rotate-3">E</span>
              </div>
              <span className="text-2xl font-black tracking-widest text-white">EDUMA</span>
            </div>
            <p className="mb-6 leading-relaxed text-sm">
              Empowering students globally with the best educational resources, expert instructors, and a thriving learning community. Start your journey with us today.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-900 transition-all hover:-translate-y-1 text-xs font-bold">
                Fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-900 transition-all hover:-translate-y-1 text-xs font-bold">
                Tw
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-900 transition-all hover:-translate-y-1 text-xs font-bold">
                Ig
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-900 transition-all hover:-translate-y-1 text-xs font-bold">
                In
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Courses', 'Events', 'Features', 'Portfolio', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                    <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">❯</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Support
            </h3>
            <ul className="space-y-3">
              {['FAQ', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                    <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">❯</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-sm">123 Education Lane, Tech District, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-yellow-400 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-yellow-400 shrink-0" />
                <span className="text-sm">hello@eduma.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} EDUMA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
