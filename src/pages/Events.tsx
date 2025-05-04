
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  MapPin, 
  CalendarClock, 
  Users,
  Filter,
  ChevronsUpDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for events
const eventsData = [
  {
    id: 1,
    title: "Annual Science Exhibition",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Auditorium",
    description: "Join us for a showcase of innovative student projects from our Science and Technology departments. This event features over 100 exhibits demonstrating cutting-edge research and applications in various scientific fields.",
    image: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=500&auto=format&fit=crop",
    tags: ["Exhibition", "Science"],
    category: "Academic",
    upcoming: true,
  },
  {
    id: 2,
    title: "Career Fair 2025",
    date: "May 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Student Center",
    description: "Connect with over 50 employers from various industries looking to recruit our talented students and alumni. Bring your resume and dress professionally for this exceptional networking opportunity.",
    image: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?q=80&w=500&auto=format&fit=crop",
    tags: ["Career", "Networking"],
    category: "Professional",
    upcoming: true,
  },
  {
    id: 3,
    title: "Literary Festival",
    date: "May 25, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "College Library",
    description: "A celebration of literature featuring readings, workshops, and discussions with renowned authors. This year's theme is 'Stories That Connect Us' and will include sessions on poetry, fiction, and memoir writing.",
    image: "https://images.unsplash.com/photo-1554357395-dbdc356ca5da?q=80&w=500&auto=format&fit=crop",
    tags: ["Arts", "Literature"],
    category: "Cultural",
    upcoming: true,
  },
  {
    id: 4,
    title: "Alumni Reunion Weekend",
    date: "June 5-7, 2025",
    time: "Various Times",
    location: "Across Campus",
    description: "Welcome back our alumni for a weekend of networking, reminiscing, and celebrating the Green College community. Events include class gatherings, campus tours, and the annual gala dinner.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=500&auto=format&fit=crop",
    tags: ["Alumni", "Networking"],
    category: "Community",
    upcoming: true,
  },
  {
    id: 5,
    title: "Spring Sports Tournament",
    date: "May 8-10, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "College Athletics Complex",
    description: "Our annual intercollegiate sports tournament featuring competitions in basketball, volleyball, soccer, and tennis. Come support our teams as they compete against rival colleges.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500&auto=format&fit=crop",
    tags: ["Sports", "Competition"],
    category: "Athletics",
    upcoming: true,
  },
  {
    id: 6,
    title: "International Cultural Festival",
    date: "June 15, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Campus Green",
    description: "Experience the diversity of our campus community through food, performances, art, and cultural displays representing countries from around the world.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500&auto=format&fit=crop",
    tags: ["Cultural", "Festival"],
    category: "Cultural",
    upcoming: true,
  },
  {
    id: 7,
    title: "Artificial Intelligence Symposium",
    date: "April 10, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Technology Building, Room 305",
    description: "An academic symposium exploring the latest developments in AI research and applications, featuring keynote speakers from leading tech companies and research institutions.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=500&auto=format&fit=crop",
    tags: ["Technology", "Research"],
    category: "Academic",
    upcoming: false,
  },
  {
    id: 8,
    title: "Environmental Awareness Day",
    date: "April 22, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Campus Green",
    description: "Join us for a day dedicated to environmental education and sustainability initiatives. Activities include tree planting, recycling workshops, and guest speakers on climate action.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=500&auto=format&fit=crop",
    tags: ["Environment", "Sustainability"],
    category: "Community",
    upcoming: false,
  },
];

// Get unique categories for filtering
const categories = Array.from(new Set(eventsData.map(e => e.category)));

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('newest');
  const [timeFilter, setTimeFilter] = useState<string>('all');
  
  const filteredEvents = eventsData
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      const matchesTime = timeFilter === 'all' || 
                        (timeFilter === 'upcoming' && event.upcoming) || 
                        (timeFilter === 'past' && !event.upcoming);
      return matchesSearch && matchesCategory && matchesTime;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date.replace(/-/g, ' ')).getTime();
      const dateB = new Date(b.date.replace(/-/g, ' ')).getTime();
      
      if (sortOrder === 'newest') return dateA - dateB;
      return dateB - dateA;
    });
  
  return (
    <Layout>
      <div className="bg-college-50 dark:bg-college-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-4">College Events</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Stay connected with all the exciting events happening across our campus
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/events/calendar">
                <Button className="bg-college-600 hover:bg-college-700 text-white">
                  <CalendarClock className="mr-2 h-4 w-4" /> View Calendar View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="w-full md:w-auto relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                className="pl-10 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Tabs 
                defaultValue="all" 
                className="w-full md:w-auto animate-fade-in" 
                value={timeFilter}
                onValueChange={setTimeFilter}
                style={{ animationDelay: "0.1s" }}
              >
                <TabsList className="w-full">
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filter</span>
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                    <DropdownMenuRadioItem value="All">All Categories</DropdownMenuRadioItem>
                    {categories.map((category) => (
                      <DropdownMenuRadioItem key={category} value={category}>
                        {category}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                    <DropdownMenuRadioItem value="newest">Soonest First</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="oldest">Latest First</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <Card 
                  key={event.id}
                  className="hover-card overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={cn(
                        "px-3 py-1",
                        event.upcoming 
                          ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400" 
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      )}>
                        {event.upcoming ? "Upcoming" : "Past Event"}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-white dark:bg-college-800 shadow rounded p-2 flex flex-col items-center">
                        <span className="text-xs font-medium text-college-700 dark:text-college-300">
                          {event.date.split(' ')[0]}
                        </span>
                        <span className="text-xs font-bold text-college-800 dark:text-college-200">
                          {event.date.split(' ')[1].replace(',', '')}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                        {event.category}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-college-800 dark:text-college-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-college-600 dark:text-college-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-college-600 dark:text-college-400" />
                        {event.location}
                      </div>
                    </div>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter>
                    <Link 
                      to={`/events/${event.id}`}
                      className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 inline-flex items-center"
                    >
                      Event Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Calendar className="h-12 w-12 mx-auto text-college-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No events found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
                <Button variant="outline" className="mt-4" onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setTimeFilter('all');
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 bg-college-50 dark:bg-college-900 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-college-800 dark:text-college-300 mb-4">Want to organize an event?</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Student organizations and departments can request to organize events using our online event planning system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-college-600 hover:bg-college-700 text-white">
                <Calendar className="mr-2 h-4 w-4" /> Request an Event
              </Button>
              <Button variant="outline" className="border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
                <Users className="mr-2 h-4 w-4" /> Join Event Committee
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
