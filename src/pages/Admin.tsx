
import { useParams, useLocation } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminDashboard from '@/components/admin/Dashboard';
import AdminAnnouncements from '@/components/admin/Announcements';
import AdminAnnouncementDetail from '@/components/admin/AnnouncementDetail';
import AdminEvents from '@/components/admin/Events';
import AdminEventDetail from '@/components/admin/EventDetail';
import AdminCourses from '@/components/admin/Courses';
import AdminCourseDetail from '@/components/admin/CourseDetail';

const Admin = () => {
  const location = useLocation();
  const { id } = useParams();
  const path = location.pathname;
  
  // Determine which component to render based on the path
  const renderContent = () => {
    // Dashboard
    if (path === '/admin') {
      return <AdminDashboard />;
    }
    
    // Announcements
    if (path === '/admin/announcements') {
      return <AdminAnnouncements />;
    }
    if (path.startsWith('/admin/announcements/') && id) {
      return <AdminAnnouncementDetail />;
    }
    
    // Events
    if (path === '/admin/events') {
      return <AdminEvents />;
    }
    if (path.startsWith('/admin/events/') && id) {
      return <AdminEventDetail />;
    }
    
    // Courses
    if (path === '/admin/courses') {
      return <AdminCourses />;
    }
    if (path.startsWith('/admin/courses/') && id) {
      return <AdminCourseDetail />;
    }
    
    // Default to dashboard
    return <AdminDashboard />;
  };
  
  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default Admin;
