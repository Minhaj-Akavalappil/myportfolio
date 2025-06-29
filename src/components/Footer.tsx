import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/minhaj-akavalappil/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Minhaj-Akavalappil',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:minhajrahmanakv@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <Code2 className="h-8 w-8 text-teal-400 group-hover:text-teal-300 transition-colors" />
              <span className="text-xl font-bold group-hover:text-teal-300 transition-colors">
                Minhaj Akavalappil
              </span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Software Developer with a vision to lead — aspiring Project Manager.
              Passionate about building innovative solutions and leading high-performing teams.
            </p>
            <div className="flex items-center space-x-2 text-slate-300 mb-2">
              <MapPin className="h-4 w-4" />
              <span>Mannarkkad, Palakkad, Kerala</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 mb-2">
              <Phone className="h-4 w-4" />
              <span>+91 8921848753</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Mail className="h-4 w-4" />
              <span>minhajrahmanakv@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-slate-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} Minhaj Akavalappil. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;