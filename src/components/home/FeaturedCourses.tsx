
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// Mock data for featured courses
const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 4,
    duration: "16 weeks",
    enrolledCount: 120,
    maxCapacity: 150,
    description: "A foundational course covering the basic principles of computer science, including programming, algorithms, and data structures.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop",
    popular: true,
  },
  {
    id: 2,
    title: "Environmental Biology",
    department: "Biology",
    credits: 3,
    duration: "14 weeks",
    enrolledCount: 85,
    maxCapacity: 100,
    description: "Explore the relationships between organisms and their environment, focusing on ecological principles and conservation.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=500&auto=format&fit=crop",
    popular: false,
  },
  {
    id: 3,
    title: "Digital Marketing Strategies",
    department: "Business",
    credits: 3,
    duration: "12 weeks",
    enrolledCount: 95,
    maxCapacity: 100,
    description: "Learn modern digital marketing techniques including social media, content creation, SEO, and analytics.",
    image: "https://images.unsplash.com/photo-1529075023343-fd9e9fcfd891?q=80&w=500&auto=format&fit=crop",
    popular: true,
  },
  {
    id: 4,
    title: "Modern World History",
    department: "History",
    credits: 3,
    duration: "16 weeks",
    enrolledCount: 70,
    maxCapacity: 120,
    description: "An examination of major historical events and developments from the 18th century to the present day.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=500&auto=format&fit=crop",
    popular: false,
  },
];

const FeaturedCourses = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.course-card');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-college-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-college-800 dark:text-college-300">Featured Courses</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Explore our most popular academic offerings</p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="border-college-500 text-college-700 hover:bg-college-50 dark:border-college-400 dark:text-college-400 dark:hover:bg-college-900/50">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className={cn(
                "course-card hover-card opacity-0 overflow-hidden transition-all duration-500",
                course.popular && "border-r-4 border-r-college-500"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
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
                  <span className="text-sm font-medium text-college-600 dark:text-college-400">{course.credits} Credits</span>
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
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-college-600 hover:bg-college-700 text-white">
            <BookOpen className="mr-2 h-4 w-4" /> Browse All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
