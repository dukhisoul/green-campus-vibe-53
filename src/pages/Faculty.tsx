
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, Search, BookOpen, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for faculty members
const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Principal",
    email: "sjohnson@greencollege.edu",
    phone: "(123) 456-7890",
    bio: "Dr. Johnson has led Green College since 2018. She has over 20 years of experience in higher education administration and is committed to fostering academic excellence and student success.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",
    department: "Administration",
    education: ["Ph.D. in Education Leadership, Stanford University", "M.Ed. in Administration, UCLA", "B.A. in English, University of Michigan"],
    research: ["Higher Education Policy", "Educational Equity", "Institutional Leadership"],
    awards: ["Educator of the Year 2019", "Distinguished Leadership Award 2017"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Professor of Computer Science",
    email: "mchen@greencollege.edu",
    phone: "(123) 456-7891",
    bio: "Dr. Chen specializes in artificial intelligence and machine learning. His research focuses on developing algorithms for autonomous systems and natural language processing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
    department: "Computer Science",
    education: ["Ph.D. in Computer Science, MIT", "M.S. in Electrical Engineering, Stanford University", "B.S. in Computer Engineering, UC Berkeley"],
    research: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
    awards: ["Best Paper Award, AI Conference 2023", "Research Excellence Award 2021"],
  },
  {
    id: 3,
    name: "Dr. Amara Okafor",
    title: "Associate Professor of Biology",
    email: "aokafor@greencollege.edu",
    phone: "(123) 456-7892",
    bio: "Dr. Okafor is a molecular biologist whose research examines cellular mechanisms and their implications for disease treatment. She leads the college's innovative Biotechnology program.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop",
    department: "Biology",
    education: ["Ph.D. in Molecular Biology, Harvard University", "M.S. in Biochemistry, Johns Hopkins University", "B.S. in Biology, University of Chicago"],
    research: ["Molecular Biology", "Genetics", "Disease Mechanisms"],
    awards: ["Outstanding Researcher Award 2022", "Teaching Excellence Award 2020"],
  },
  {
    id: 4,
    name: "Prof. James Wilson",
    title: "Professor of Business",
    email: "jwilson@greencollege.edu",
    phone: "(123) 456-7893",
    bio: "Professor Wilson brings over 15 years of industry experience to his teaching. He specializes in entrepreneurship and strategic management, helping students bridge theory and practice.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop",
    department: "Business",
    education: ["MBA, Wharton School of Business", "B.S. in Economics, London School of Economics"],
    research: ["Entrepreneurship", "Strategic Management", "Business Innovation"],
    awards: ["Faculty Mentor of the Year 2023", "Business Leader Award 2018"],
  },
  {
    id: 5,
    name: "Dr. Elena Rodriguez",
    title: "Assistant Professor of Mathematics",
    email: "erodriguez@greencollege.edu",
    phone: "(123) 456-7894",
    bio: "Dr. Rodriguez specializes in applied mathematics and statistical modeling. Her research has applications in environmental science and public health.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=120&auto=format&fit=crop",
    department: "Mathematics",
    education: ["Ph.D. in Applied Mathematics, Princeton University", "M.S. in Statistics, Columbia University", "B.S. in Mathematics, UCLA"],
    research: ["Statistical Modeling", "Computational Mathematics", "Ecological Modeling"],
    awards: ["Early Career Researcher Award 2022", "Excellence in Teaching Award 2021"],
  },
  {
    id: 6,
    name: "Prof. Thomas Lee",
    title: "Associate Professor of History",
    email: "tlee@greencollege.edu",
    phone: "(123) 456-7895",
    bio: "Professor Lee is a historian specializing in 20th century international relations. His work examines the geopolitical developments that shaped the modern world.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
    department: "History",
    education: ["Ph.D. in History, Yale University", "M.A. in International Relations, Georgetown University", "B.A. in History, University of Virginia"],
    research: ["20th Century International Relations", "Diplomatic History", "Cold War Studies"],
    awards: ["Outstanding Faculty Award 2020", "Book of the Year Award 2019"],
  },
  {
    id: 7,
    name: "Dr. Maya Patel",
    title: "Professor of Environmental Science",
    email: "mpatel@greencollege.edu",
    phone: "(123) 456-7896",
    bio: "Dr. Patel's research focuses on sustainable resource management and climate change adaptation. She leads multiple international research collaborations and field studies.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=120&auto=format&fit=crop",
    department: "Environmental Science",
    education: ["Ph.D. in Environmental Science, UC Davis", "M.S. in Ecology, Cornell University", "B.S. in Earth Sciences, University of Washington"],
    research: ["Climate Change Adaptation", "Sustainable Resource Management", "Environmental Policy"],
    awards: ["Environmental Leadership Award 2022", "Research Impact Award 2020"],
  },
  {
    id: 8,
    name: "Dr. Robert Kim",
    title: "Professor of Physics",
    email: "rkim@greencollege.edu",
    phone: "(123) 456-7897",
    bio: "Dr. Kim is a theoretical physicist specializing in quantum mechanics and particle physics. His research contributes to our understanding of fundamental physical principles.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=120&auto=format&fit=crop",
    department: "Physics",
    education: ["Ph.D. in Physics, California Institute of Technology", "M.S. in Physics, University of Chicago", "B.S. in Physics, Seoul National University"],
    research: ["Quantum Mechanics", "Particle Physics", "Theoretical Physics"],
    awards: ["Distinguished Researcher Award 2023", "Excellence in Physics Education Award 2021"],
  },
];

// Get unique departments for filtering
const departments = Array.from(new Set(facultyData.map(f => f.department)));

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [visibleFaculty, setVisibleFaculty] = useState<typeof facultyData>([]);
  
  useEffect(() => {
    // Filter faculty based on search term and department
    const filtered = facultyData.filter(faculty => {
      const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faculty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faculty.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || faculty.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
    
    setVisibleFaculty(filtered);
  }, [searchTerm, selectedDepartment]);
  
  return (
    <Layout>
      <div className="bg-college-50 dark:bg-college-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-4">Our Faculty</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Meet the dedicated educators and researchers who make Green College exceptional
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="w-full md:w-auto relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search faculty..."
                className="pl-10 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs 
              defaultValue="All" 
              className="w-full md:w-auto animate-fade-in" 
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
              style={{ animationDelay: "0.2s" }}
            >
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="All">All Departments</TabsTrigger>
                {departments.map((department) => (
                  <TabsTrigger key={department} value={department}>
                    {department}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleFaculty.length > 0 ? (
              visibleFaculty.map((faculty, index) => (
                <Card
                  key={faculty.id}
                  className="hover-card animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardHeader className="p-0 overflow-hidden group relative">
                    <div className="aspect-[3/2] w-full bg-college-100 dark:bg-college-800 flex items-center justify-center overflow-hidden">
                      {faculty.image ? (
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Avatar className="w-24 h-24">
                          <AvatarFallback className="text-4xl bg-college-200 text-college-700">
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                    <Badge className="absolute top-3 right-3 bg-college-600/90 text-white">
                      {faculty.department}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{faculty.name}</h3>
                    <p className="text-college-600 dark:text-college-400 text-sm mt-1">{faculty.title}</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${faculty.email}`} className="hover:text-college-600 dark:hover:text-college-400 transition-colors">
                          {faculty.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${faculty.phone}`} className="hover:text-college-600 dark:hover:text-college-400 transition-colors">
                          {faculty.phone}
                        </a>
                      </div>
                    </div>
                    
                    <CardDescription className="mt-4 line-clamp-3">
                      {faculty.bio}
                    </CardDescription>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-college-100 text-college-700 dark:bg-college-800 dark:text-college-300 flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" /> {faculty.education.length} Degrees
                      </Badge>
                      <Badge variant="secondary" className="bg-college-100 text-college-700 dark:bg-college-800 dark:text-college-300 flex items-center">
                        <Award className="h-3 w-3 mr-1" /> {faculty.awards.length} Awards
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 p-0">
                      View Full Profile <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No faculty members found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faculty;
