
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Announcements", href: "/announcements" },
  { name: "Faculty", href: "/faculty" },
  { name: "Events", href: "/events" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

export function ResponsiveNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-college-900 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-college-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <span className="text-xl font-semibold text-college-700 dark:text-college-400">Green College</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-college-700 dark:text-college-300"
                  : "text-gray-600 hover:text-college-600 dark:text-gray-300 dark:hover:text-college-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Sign in/Admin - desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/admin"
            className="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 hover:text-college-600 dark:hover:text-college-400"
          >
            Admin <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-y-0 right-0 z-50 w-full bg-white dark:bg-college-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-college-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span className="text-xl font-semibold text-college-700 dark:text-college-400">Green College</span>
            </div>
          </Link>
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "-mx-3 block rounded-lg px-3 py-2 text-base font-medium",
                  location.pathname === item.href
                    ? "bg-gray-50 text-college-700 dark:bg-college-900 dark:text-college-300"
                    : "text-gray-700 hover:bg-gray-50 hover:text-college-600 dark:text-gray-300 dark:hover:bg-college-900 dark:hover:text-college-400"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="py-6">
            <Link
              to="/admin"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-college-600 dark:text-gray-300 dark:hover:bg-college-900 dark:hover:text-college-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
