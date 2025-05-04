
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-college-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-college-600 flex items-center justify-center">
                <span className="text-white font-bold">GC</span>
              </div>
              <span className="text-xl font-bold text-white">Green College</span>
            </Link>
            <p className="text-gray-300">
              Providing quality education since 1985. Building tomorrow's leaders with innovation and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-college-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-college-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-college-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-college-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-college-300">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Courses', 'Faculty', 'Events', 'Gallery', 'Contact', 'Student Portal'].map((item) => (
                <li key={item} className="hover-animation">
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-college-400 transition-colors college-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-college-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-college-400 mt-1" />
                <span className="text-gray-300">123 Education Blvd, Academic City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-college-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-college-400" />
                <span className="text-gray-300">info@greencollege.edu</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-college-300">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and events</p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-college-800 border-college-700 text-gray-300 focus:border-college-500"
              />
              <Button className="bg-college-600 hover:bg-college-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="border-t border-college-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Green College. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-college-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-college-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-college-400 text-sm transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
