
import { useParams, useLocation } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminDashboard from '@/components/admin/Dashboard';
import AdminAnnouncements from '@/components/admin/Announcements';
import AdminAnnouncementDetail from '@/components/admin/AnnouncementDetail';
import AdminFaculty from '@/components/admin/Faculty';
import AdminEvents from '@/components/admin/Events';
import AdminEventDetail from '@/components/admin/EventDetail';
import AdminCourses from '@/components/admin/Courses';
import AdminCourseDetail from '@/components/admin/CourseDetail';
import AdminGallery from '@/components/admin/Gallery';
import AdminSettings from '@/components/admin/Settings';

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
    
    // Faculty
    if (path === '/admin/faculty') {
      return <AdminFaculty />;
    }
    if (path.startsWith('/admin/faculty/') && id) {
      // Add Faculty Detail component when it's created
      return <div className="p-6">Faculty Detail Page for ID: {id}</div>;
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
    
    // Gallery
    if (path === '/admin/gallery') {
      return <AdminGallery />;
    }
    
    // Settings
    if (path === '/admin/settings') {
      return <AdminSettings />;
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
