
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Events', href: '/events' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/95 dark:bg-college-950/95 backdrop-blur-sm shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-2xl font-bold text-college-700 dark:text-college-400"
        >
          <div className="w-10 h-10 rounded-full bg-college-600 flex items-center justify-center">
            <span className="text-white font-bold">GC</span>
          </div>
          <span className="hidden sm:inline animate-fade-in">Green College</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors college-link",
                location.pathname === item.href
                  ? "text-college-700 dark:text-college-300"
                  : "text-gray-600 hover:text-college-600 dark:text-gray-300 dark:hover:text-college-400"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" className="ml-4 border-college-500 text-college-700 hover:bg-college-50">
            Student Portal
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-college-700 dark:text-college-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-college-950 shadow-lg animate-slide-in-right">
          <div className="px-2 pt-2 pb-4 space-y-1 stagger-animation">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium animate-fade-in transition-colors",
                  location.pathname === item.href
                    ? "bg-college-100 text-college-700 dark:bg-college-800 dark:text-college-300"
                    : "text-gray-600 hover:bg-college-50 hover:text-college-600 dark:text-gray-300 dark:hover:text-college-400 dark:hover:bg-college-900"
                )}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="w-full border-college-500 text-college-700 hover:bg-college-50 animate-fade-in">
              Student Portal
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
