
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight,
  Search,
  Clock,
  Users,
  BookOpen,
  GraduationCap,
  Filter,
  SlidersHorizontal
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

// Mock data for courses
const coursesData = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    department: "Computer Science",
    code: "CS 101",
    credits: 4,
    duration: "16 weeks",
    enrolledCount: 120,
    maxCapacity: 150,
    description: "A foundational course covering the basic principles of computer science, including programming, algorithms, and data structures.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: [],
    popular: true,
    featured: true,
  },
  {
    id: 2,
    title: "Environmental Biology",
    department: "Biology",
    code: "BIO 205",
    credits: 3,
    duration: "14 weeks",
    enrolledCount: 85,
    maxCapacity: 100,
    description: "Explore the relationships between organisms and their environment, focusing on ecological principles and conservation.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["BIO 101"],
    popular: false,
    featured: true,
  },
  {
    id: 3,
    title: "Digital Marketing Strategies",
    department: "Business",
    code: "BUS 330",
    credits: 3,
    duration: "12 weeks",
    enrolledCount: 95,
    maxCapacity: 100,
    description: "Learn modern digital marketing techniques including social media, content creation, SEO, and analytics.",
    image: "https://images.unsplash.com/photo-1529075023343-fd9e9fcfd891?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["BUS 101", "BUS 220"],
    popular: true,
    featured: true,
  },
  {
    id: 4,
    title: "Modern World History",
    department: "History",
    code: "HIST 210",
    credits: 3,
    duration: "16 weeks",
    enrolledCount: 70,
    maxCapacity: 120,
    description: "An examination of major historical events and developments from the 18th century to the present day.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: [],
    popular: false,
    featured: true,
  },
  {
    id: 5,
    title: "Advanced Calculus",
    department: "Mathematics",
    code: "MATH 301",
    credits: 4,
    duration: "16 weeks",
    enrolledCount: 40,
    maxCapacity: 60,
    description: "In-depth study of calculus concepts including limits, continuity, derivatives, and integrals with rigorous mathematical proofs.",
    image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["MATH 201", "MATH 202"],
    popular: false,
    featured: false,
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    department: "Computer Science",
    code: "CS 440",
    credits: 4,
    duration: "14 weeks",
    enrolledCount: 75,
    maxCapacity: 80,
    description: "Introduction to artificial intelligence concepts including machine learning, neural networks, and natural language processing.",
    image: "https://images.unsplash.com/photo-1677442135145-4d55e3699931?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["CS 101", "MATH 201", "CS 310"],
    popular: true,
    featured: false,
  },
  {
    id: 7,
    title: "Organic Chemistry",
    department: "Chemistry",
    code: "CHEM 230",
    credits: 4,
    duration: "16 weeks",
    enrolledCount: 55,
    maxCapacity: 70,
    description: "Study of the structure, properties, and reactions of organic compounds with laboratory component.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["CHEM 101", "CHEM 102"],
    popular: false,
    featured: false,
  },
  {
    id: 8,
    title: "Macroeconomics",
    department: "Economics",
    code: "ECON 201",
    credits: 3,
    duration: "14 weeks",
    enrolledCount: 110,
    maxCapacity: 120,
    description: "Analysis of national income, employment, inflation, and monetary and fiscal policies in the overall economy.",
    image: "https://images.unsplash.com/photo-1638183395404-2e30bacf8ef6?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["ECON 101"],
    popular: true,
    featured: false,
  },
  {
    id: 9,
    title: "Sustainable Design",
    department: "Architecture",
    code: "ARCH 350",
    credits: 4,
    duration: "14 weeks",
    enrolledCount: 35,
    maxCapacity: 40,
    description: "Principles and practices of environmentally sustainable architecture and design with focus on energy efficiency and eco-friendly materials.",
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["ARCH 101", "ARCH 220"],
    popular: false,
    featured: false,
  },
  {
    id: 10,
    title: "Data Science for Business",
    department: "Business",
    code: "BUS 410",
    credits: 3,
    duration: "12 weeks",
    enrolledCount: 65,
    maxCapacity: 75,
    description: "Application of data analysis and statistical methods to solve business problems and inform decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["BUS 101", "MATH 201", "CS 210"],
    popular: true,
    featured: false,
  },
  {
    id: 11,
    title: "Introduction to Psychology",
    department: "Psychology",
    code: "PSYCH 101",
    credits: 3,
    duration: "14 weeks",
    enrolledCount: 140,
    maxCapacity: 150,
    description: "Survey of major topics in psychology including perception, learning, cognition, emotion, personality, and social behavior.",
    image: "https://images.unsplash.com/photo-1576086595581-2014ab678267?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: [],
    popular: true,
    featured: false,
  },
  {
    id: 12,
    title: "Climate Change Science",
    department: "Environmental Science",
    code: "ENV 320",
    credits: 4,
    duration: "16 weeks",
    enrolledCount: 45,
    maxCapacity: 60,
    description: "Scientific principles behind climate change, including atmospheric chemistry, global warming mechanisms, and climate modeling.",
    image: "https://images.unsplash.com/photo-1593316992464-07ff773a5088?q=80&w=500&auto=format&fit=crop",
    level: "Undergraduate",
    prerequisites: ["ENV 101", "CHEM 101"],
    popular: false,
    featured: false,
  },
];

// Get unique departments and levels for filtering
const departments = Array.from(new Set(coursesData.map(c => c.department)));
const levels = Array.from(new Set(coursesData.map(c => c.level)));

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCredits, setSelectedCredits] = useState('All');
  const [sortOrder, setSortOrder] = useState('popular');
  const [visibleCourses, setVisibleCourses] = useState<typeof coursesData>([]);
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    // Filter courses based on search term and filters
    let filtered = coursesData;
    
    // Apply tab filter
    if (activeTab === 'featured') {
      filtered = filtered.filter(course => course.featured);
    } else if (activeTab === 'popular') {
      filtered = filtered.filter(course => course.popular);
    }
    
    // Apply search and other filters
    filtered = filtered.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.code.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || course.department === selectedDepartment;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesCredits = selectedCredits === 'All' || course.credits.toString() === selectedCredits;
      
      return matchesSearch && matchesDepartment && matchesLevel && matchesCredits;
    });
    
    // Apply sorting
    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'popular') {
        return (b.enrolledCount / b.maxCapacity) - (a.enrolledCount / a.maxCapacity);
      } else if (sortOrder === 'name-asc') {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === 'name-desc') {
        return b.title.localeCompare(a.title);
      } else if (sortOrder === 'credits-high') {
        return b.credits - a.credits;
      } else if (sortOrder === 'credits-low') {
        return a.credits - b.credits;
      }
      return 0;
    });
    
    setVisibleCourses(filtered);
  }, [searchTerm, selectedDepartment, selectedLevel, selectedCredits, sortOrder, activeTab]);
  
  return (
    <Layout>
      <div className="bg-college-50 dark:bg-college-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-4">Course Catalog</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse our comprehensive selection of academic courses and programs
            </p>
            <div className="mt-8 flex justify-center">
              <Button className="bg-college-600 hover:bg-college-700 text-white">
                <BookOpen className="mr-2 h-4 w-4" /> Download Course Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Tabs */}
          <Tabs 
            defaultValue="all" 
            className="w-full animate-fade-in mb-8" 
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center">
              <TabsList className="w-full max-w-md">
                <TabsTrigger value="all" className="flex-1">All Courses</TabsTrigger>
                <TabsTrigger value="featured" className="flex-1">Featured</TabsTrigger>
                <TabsTrigger value="popular" className="flex-1">Popular</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
          
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="w-full md:w-auto relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                className="pl-10 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Department</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <DropdownMenuRadioItem value="All">All Departments</DropdownMenuRadioItem>
                    {departments.map((department) => (
                      <DropdownMenuRadioItem key={department} value={department}>
                        {department}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Level</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
                    <DropdownMenuRadioItem value="All">All Levels</DropdownMenuRadioItem>
                    {levels.map((level) => (
                      <DropdownMenuRadioItem key={level} value={level}>
                        {level}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Credits</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={selectedCredits} onValueChange={setSelectedCredits}>
                    <DropdownMenuRadioItem value="All">Any Credits</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="3">3 Credits</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="4">4 Credits</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="hidden sm:inline">Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                    <DropdownMenuRadioItem value="popular">Most Popular</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="name-asc">Name (A-Z)</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="name-desc">Name (Z-A)</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="credits-high">Credits (High-Low)</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="credits-low">Credits (Low-High)</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCourses.length > 0 ? (
              visibleCourses.map((course, index) => (
                <Card 
                  key={course.id}
                  className={cn(
                    "hover-card overflow-hidden animate-fade-in",
                    course.popular && "border-r-4 border-r-college-500"
                  )}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    {course.popular && (
                      <div className="absolute top-3 left-0">
                        <Badge className="bg-college-600 text-white rounded-r-md rounded-l-none px-3 py-1">
                          Popular
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                        {course.department}
                      </Badge>
                      <span className="text-sm font-medium text-college-600 dark:text-college-400">
                        {course.code} • {course.credits} Credits
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                      {course.description}
                    </CardDescription>
                    
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-college-600 dark:text-college-400" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-college-600 dark:text-college-400" />
                        {course.enrolledCount}/{course.maxCapacity}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Enrollment</span>
                        <span>{Math.round(course.enrolledCount / course.maxCapacity * 100)}%</span>
                      </div>
                      <Progress value={course.enrolledCount / course.maxCapacity * 100} className="h-1.5 bg-gray-200 dark:bg-gray-700">
                        <div className="bg-college-500 h-full rounded-full" />
                      </Progress>
                    </div>
                    
                    {course.prerequisites.length > 0 && (
                      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Prerequisites:</span> {course.prerequisites.join(', ')}
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter>
                    <Link 
                      to={`/courses/${course.id}`}
                      className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto text-college-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No courses found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
                <Button variant="outline" className="mt-4" onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('All');
                  setSelectedLevel('All');
                  setSelectedCredits('All');
                  setActiveTab('all');
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Degree Programs Section */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Degree Programs</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our comprehensive academic programs are designed to prepare you for success in your chosen field
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-college-600 dark:text-college-400" />
                    Undergraduate Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    Bachelor's degrees offered across a wide range of disciplines, with opportunities for specialization and research.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Bachelor of Science (B.S.)</li>
                    <li>• Bachelor of Arts (B.A.)</li>
                    <li>• Bachelor of Business Administration (B.B.A.)</li>
                    <li>• Bachelor of Fine Arts (B.F.A.)</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
                    Explore Undergraduate Programs
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-college-600 dark:text-college-400" />
                    Graduate Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    Advanced degree programs focused on specialized knowledge, research, and professional development.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Master of Science (M.S.)</li>
                    <li>• Master of Arts (M.A.)</li>
                    <li>• Master of Business Administration (M.B.A.)</li>
                    <li>• Doctor of Philosophy (Ph.D.)</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
                    Explore Graduate Programs
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-college-600 dark:text-college-400" />
                    Certificate Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    Focused, short-term programs designed to develop specific skills and knowledge for career advancement.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Data Science Certificate</li>
                    <li>• Sustainable Business Practices</li>
                    <li>• Digital Marketing</li>
                    <li>• Healthcare Management</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
                    Explore Certificate Programs
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
