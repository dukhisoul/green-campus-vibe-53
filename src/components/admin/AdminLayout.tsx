
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  CalendarDays, 
  BookOpen, 
  PanelRight, 
  ChevronLeft, 
  Settings, 
  LogOut, 
  Image 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Announcements", href: "/admin/announcements", icon: FileText },
    { name: "Faculty", href: "/admin/faculty", icon: Users },
    { name: "Events", href: "/admin/events", icon: CalendarDays },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Gallery", href: "/admin/gallery", icon: Image },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];
  
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-college-950">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white dark:bg-college-900 border-r border-gray-200 dark:border-college-800 transition-all duration-300 flex flex-col",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className={cn(
          "p-4 border-b border-gray-200 dark:border-college-800 flex items-center",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {!isCollapsed && (
            <Link 
              to="/admin" 
              className="flex items-center space-x-2 text-xl font-bold text-college-700 dark:text-college-400"
            >
              <div className="w-8 h-8 rounded-full bg-college-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span>Admin</span>
            </Link>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 rounded-full bg-college-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
              isCollapsed && "hidden"
            )}
          >
            <PanelRight size={20} />
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-grow py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium transition-colors",
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? "bg-college-50 text-college-700 dark:bg-college-800 dark:text-college-300"
                      : "text-gray-600 hover:bg-gray-100 hover:text-college-600 dark:text-gray-400 dark:hover:bg-college-800/50 dark:hover:text-college-400",
                    isCollapsed ? "justify-center" : ""
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isCollapsed ? "" : "mr-3")} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-college-800">
          {isCollapsed ? (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsCollapsed(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 w-full"
            >
              <ChevronLeft size={20} />
            </Button>
          ) : (
            <>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop"
                    alt="Admin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Admin User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">admin@greencollege.edu</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-college-800/50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </>
          )}
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-grow overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
