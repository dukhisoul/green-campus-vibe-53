
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for announcements
const announcements = [
  {
    id: 1,
    title: "Fall Semester Registration Now Open",
    date: "May 1, 2025",
    description: "Registration for the Fall 2025 semester is now open for all students. Please log in to the student portal to register for your courses.",
    category: "Academic",
    important: true,
  },
  {
    id: 2,
    title: "New Computer Science Lab Opening",
    date: "April 25, 2025",
    description: "We're excited to announce the opening of our new state-of-the-art Computer Science laboratory on May 15th. Join us for the ribbon-cutting ceremony.",
    category: "Facilities",
    important: false,
  },
  {
    id: 3,
    title: "Summer Research Opportunities",
    date: "April 22, 2025",
    description: "Applications are now open for summer research positions. Undergraduate students are encouraged to apply before May 10th.",
    category: "Research",
    important: false,
  },
  {
    id: 4,
    title: "Campus COVID-19 Protocol Updates",
    date: "April 18, 2025",
    description: "Please review the updated campus COVID-19 protocols for the upcoming semester. Vaccination requirements and mask policies have been revised.",
    category: "Health",
    important: true,
  },
];

const Announcements = () => {
  return (
    <section className="py-20 bg-white dark:bg-college-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-college-800 dark:text-college-300">Latest Announcements</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Stay updated with the latest news and events from our college</p>
          </div>
          <Link to="/announcements">
            <Button variant="outline" className="border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          {announcements.map((announcement, index) => (
            <Card 
              key={announcement.id} 
              className={cn(
                "hover-card border-l-4 animate-fade-in",
                announcement.important ? "border-l-red-500" : "border-l-college-500"
              )}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                    {announcement.category}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{announcement.date}</span>
                </div>
                <CardTitle className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                  {announcement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {announcement.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={`/announcements/${announcement.id}`} className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
