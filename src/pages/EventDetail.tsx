
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, Users, FileDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { eventsData } from '@/data/events';

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id.toString() === id);
  
  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-college-800 dark:text-college-300 mb-4">Event Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The event you're looking for does not exist or has been removed.
            </p>
            <Link to="/events">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
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
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Link to="/events" className="inline-flex items-center text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Events
            </Link>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                {event.category}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-2">{event.title}</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="relative h-96 overflow-hidden rounded-lg mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <img 
                  src={event.image || "/placeholder.svg"} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose dark:prose-invert prose-headings:text-college-800 dark:prose-headings:text-college-300 prose-a:text-college-600 dark:prose-a:text-college-400 max-w-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{event.description}</p>
                
                <div className="my-8">
                  <h2 className="text-2xl font-semibold text-college-700 dark:text-college-300 mb-4">Event Details</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {event.detailedDescription || "Join us for this exciting event at Green College. All students, faculty, and staff are welcome to attend. Don't miss this opportunity to engage with our community!"}
                  </p>
                  
                  {event.schedule && (
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Event Schedule</h3>
                      <ul className="space-y-2">
                        {event.schedule.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Clock className="mr-2 h-4 w-4 text-college-600 dark:text-college-400 mt-1" />
                            <div>
                              <span className="font-medium">{item.time}</span>: {item.activity}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {event.speakers && (
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Speakers</h3>
                      <ul className="space-y-2">
                        {event.speakers.map((speaker, index) => (
                          <li key={index} className="flex items-start">
                            <Users className="mr-2 h-4 w-4 text-college-600 dark:text-college-400 mt-1" />
                            <div>
                              <span className="font-medium">{speaker.name}</span> - {speaker.title}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <Separator className="my-8" />
                
                <div className="mt-6">
                  <Link to="/events">
                    <Button variant="outline" className="mr-2">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
                    </Button>
                  </Link>
                  <Button className="bg-college-600 hover:bg-college-700">
                    Register for Event
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white dark:bg-college-900 rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="text-xl font-semibold text-college-800 dark:text-college-300 mb-4">Event Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Date</p>
                      <p className="text-gray-600 dark:text-gray-400">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Time</p>
                      <p className="text-gray-600 dark:text-gray-400">{event.time || "6:00 PM - 8:00 PM"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">{event.location || "Main Campus Auditorium"}</p>
                    </div>
                  </div>
                  
                  {event.organizer && (
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">Organizer</p>
                        <p className="text-gray-600 dark:text-gray-400">{event.organizer}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                {event.registrationLink && (
                  <div className="mt-4">
                    <Button className="w-full bg-college-600 hover:bg-college-700">
                      Register Now
                    </Button>
                  </div>
                )}
                
                {event.fileAttachment && (
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      <FileDown className="mr-2 h-4 w-4" /> Download Event Details
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
