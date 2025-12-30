import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './UI';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="./logo.png" 
              alt="ICPC Tanta Community" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold font-lato transition-colors duration-200 ${isActive ? 'text-icpc-blue' : 'text-gray-600 hover:text-icpc-blue'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button variant="primary" to="/join" className="!px-4 !py-2 text-sm">Join Us</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-icpc-blue">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-icpc-blue bg-blue-50' : 'text-gray-700 hover:text-icpc-blue hover:bg-gray-50'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button variant="primary" to="/join" className="w-full">Join Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  <div className="col-span-1 md:col-span-1">
                      <Link to="/" className="flex items-center gap-2 mb-4">
                          <img
                              src="./logo.png"
                              alt="ICPC Tanta Community"
                              className="h-12 w-auto object-contain"
                          />
                      </Link>
                      <p className="text-gray-500 text-sm leading-relaxed">
                          Empowering students to solve real-world problems
                          through algorithmic thinking and innovation.
                      </p>
                  </div>

                  <div>
                      <h3 className="font-playfair font-bold text-lg mb-4">
                          Quick Links
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                              <NavLink
                                  to="/about"
                                  className="hover:text-icpc-blue">
                                  About Us
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="/team"
                                  className="hover:text-icpc-blue">
                                  Our Team
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="/events"
                                  className="hover:text-icpc-blue">
                                  Events
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="/contact"
                                  className="hover:text-icpc-blue">
                                  Contact
                              </NavLink>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-playfair font-bold text-lg mb-4">
                          Resources
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                              <NavLink
                                  to="/training"
                                  className="hover:text-icpc-blue">
                                  Level 0 Training
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="/training"
                                  className="hover:text-icpc-blue">
                                  Level 1 Training
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="/roadmaps"
                                  className="hover:text-icpc-blue">
                                  Roadmaps
                              </NavLink>
                          </li>
                          <li>
                              <a href="#" className="hover:text-icpc-blue">
                                  YouTube Channel
                              </a>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-playfair font-bold text-lg mb-4">
                          Connect
                      </h3>
                      <div className="flex space-x-4">
                          <a
                              href="http://facebook.com/acm.tanta.community"
                              target="_blank"
                              className="w-10 h-10 rounded-full bg-blue-50 text-icpc-blue flex items-center justify-center hover:bg-icpc-blue hover:text-white transition-colors">
                              <Facebook size={20} />
                          </a>
                          <a
                              href="https://www.linkedin.com/company/106583280/"
                              target="_blank"
                              className="w-10 h-10 rounded-full bg-blue-50 text-icpc-blue flex items-center justify-center hover:bg-icpc-blue hover:text-white transition-colors">
                              <Linkedin size={20} />
                          </a>
                          <a
                              href="mailto:abdulrahman.elhanafy.dev@gmail.com"
                              className="w-10 h-10 rounded-full bg-blue-50 text-icpc-blue flex items-center justify-center hover:bg-icpc-blue hover:text-white transition-colors">
                              <Mail size={20} />
                          </a>
                      </div>
                      <p className="mt-4 text-xs text-gray-400">
                          abdulrahman.elhanafy.dev@gmail.com <br />
                          01279097962
                      </p>
                  </div>
              </div>

              <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                  <p>&copy; 2025 ICPC Tanta Community. All rights reserved.</p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                      <a href="#" className="hover:text-icpc-blue">
                          Privacy Policy
                      </a>
                      <a href="#" className="hover:text-icpc-blue">
                          Terms of Service
                      </a>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-lato text-gray-800 bg-white">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};