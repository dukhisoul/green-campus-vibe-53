
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileDown, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { announcementsData } from '@/data/announcements';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcement = announcementsData.find(a => a.id.toString() === id);
  
  if (!announcement) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-college-800 dark:text-college-300 mb-4">Announcement Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The announcement you're looking for does not exist or has been removed.
            </p>
            <Link to="/announcements">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Announcements
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-college-50 dark:bg-college-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Link to="/announcements" className="inline-flex items-center text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Announcements
            </Link>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                {announcement.category}
              </Badge>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{announcement.date}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-2">{announcement.title}</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert prose-headings:text-college-800 dark:prose-headings:text-college-300 prose-a:text-college-600 dark:prose-a:text-college-400 max-w-none animate-fade-in">
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{announcement.description}</p>
            
            <div className="my-8">
              <h2 className="text-2xl font-semibold text-college-700 dark:text-college-300 mb-4">Additional Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This announcement contains important information for all students and staff members. Please review all details carefully
                and follow up with the relevant department if you have any questions or require further clarification.
              </p>
              
              {announcement.fileAttachment && (
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Attachments</h3>
                  <a 
                    href="#download" 
                    className="inline-flex items-center text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    {announcement.fileAttachment}
                  </a>
                </div>
              )}
              
              {announcement.relatedEvents && (
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Related Events</h3>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-college-600 dark:text-college-400" />
                    <Link 
                      to={`/events/${announcement.relatedEvents[0].id}`} 
                      className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300"
                    >
                      {announcement.relatedEvents[0].title} - {announcement.relatedEvents[0].date}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Separator className="my-8" />
            
            <div className="mt-6">
              <Link to="/announcements">
                <Button variant="outline" className="mr-2">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Announcements
                </Button>
              </Link>
              {announcement.fileAttachment && (
                <Button className="bg-college-600 hover:bg-college-700">
                  <FileDown className="mr-2 h-4 w-4" /> Download Attachment
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnnouncementDetail;
