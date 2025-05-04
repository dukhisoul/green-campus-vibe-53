
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Mock data for announcements
const announcementsData = [
  {
    id: 1,
    title: "Fall Semester Registration Now Open",
    date: "May 1, 2025",
    description: "Registration for the Fall 2025 semester is now open for all students. Please log in to the student portal to register for your courses before the deadline of June 15, 2025. Early registration is recommended to secure your preferred course sections.",
    category: "Academic",
    important: true,
  },
  {
    id: 2,
    title: "New Computer Science Lab Opening",
    date: "April 25, 2025",
    description: "We're excited to announce the opening of our new state-of-the-art Computer Science laboratory on May 15th. The lab features the latest hardware and software to support advanced coursework and research. Join us for the ribbon-cutting ceremony at 2:00 PM in the Technology Building.",
    category: "Facilities",
    important: false,
  },
  {
    id: 3,
    title: "Summer Research Opportunities",
    date: "April 22, 2025",
    description: "Applications are now open for summer research positions. Undergraduate students are encouraged to apply before May 10th. These positions offer valuable research experience and a stipend for selected participants. Contact the Research Office for more details.",
    category: "Research",
    important: false,
  },
  {
    id: 4,
    title: "Campus COVID-19 Protocol Updates",
    date: "April 18, 2025",
    description: "Please review the updated campus COVID-19 protocols for the upcoming semester. Vaccination requirements and mask policies have been revised in accordance with local health department guidelines. All students and staff should familiarize themselves with the new policies.",
    category: "Health",
    important: true,
  },
  {
    id: 5,
    title: "Library Hours Extended During Finals Week",
    date: "April 15, 2025",
    description: "The main campus library will extend its hours during finals week. From May 10-17, the library will be open 24 hours to accommodate students preparing for exams. Additional study spaces will also be available in the Student Center.",
    category: "Facilities",
    important: false,
  },
  {
    id: 6,
    title: "Annual Scholarship Application Deadline",
    date: "April 10, 2025",
    description: "The deadline for applying to the college's annual scholarship program is May 30, 2025. All continuing students with a GPA of 3.2 or higher are eligible to apply. The financial aid office is available to assist with application questions.",
    category: "Financial",
    important: true,
  },
  {
    id: 7,
    title: "New International Exchange Programs",
    date: "April 5, 2025",
    description: "Green College is proud to announce three new international exchange partnerships with universities in Japan, Germany, and Brazil. Information sessions about these programs will be held throughout May. Check the Global Education Office website for details.",
    category: "Academic",
    important: false,
  },
  {
    id: 8,
    title: "Campus Sustainability Initiative Launch",
    date: "April 1, 2025",
    description: "Green College is launching a new sustainability initiative aimed at reducing our carbon footprint by 30% over the next five years. Student volunteers are needed to help implement various eco-friendly programs across campus.",
    category: "Campus",
    important: false,
  },
];

// Get unique categories for filtering
const categories = Array.from(new Set(announcementsData.map(a => a.category)));

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredAnnouncements = announcementsData.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        announcement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || announcement.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <div className="bg-college-50 dark:bg-college-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-4">Announcements</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and important information from Green College
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="w-full md:w-auto relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search announcements..."
                className="pl-10 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full md:w-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="all" onClick={() => setSelectedCategory(null)}>
                  All
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement, index) => (
                <Card 
                  key={announcement.id}
                  className={cn(
                    "hover-card border-l-4 animate-fade-in",
                    announcement.important ? "border-l-red-500" : "border-l-college-500"
                  )}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                        {announcement.category}
                      </Badge>
                      <div className="flex items-center">
                        {announcement.important && (
                          <Badge className="bg-red-100 text-red-600 border-red-200 mr-2 flex items-center">
                            <Bell className="h-3 w-3 mr-1" /> Important
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500 dark:text-gray-400">{announcement.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 mt-2">
                      {announcement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      {announcement.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/announcements/${announcement.id}`} className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 inline-flex items-center">
                      Read Full Announcement <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No announcements found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Announcements;
