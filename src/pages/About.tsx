
import { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, MapPin, History, Award, Building, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

// Timeline data
const timelineEvents = [
  {
    year: "1985",
    title: "Founding",
    description: "Green College was established with a vision to provide quality education focused on innovation and sustainability."
  },
  {
    year: "1995",
    title: "Campus Expansion",
    description: "Major expansion of facilities including new academic buildings and student residences."
  },
  {
    year: "2002",
    title: "Research Center",
    description: "Opening of the Advanced Research Center for Environmental Studies."
  },
  {
    year: "2010",
    title: "International Recognition",
    description: "Achieved international accreditation and established exchange programs with universities worldwide."
  },
  {
    year: "2018",
    title: "Technology Integration",
    description: "Launched comprehensive digital learning platforms and smart campus initiatives."
  },
  {
    year: "2023",
    title: "Sustainability Leadership",
    description: "Received national recognition for campus sustainability initiatives and carbon neutrality efforts."
  }
];

// Core values data
const coreValues = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "We strive for the highest standards in teaching, learning, and research, fostering intellectual curiosity and critical thinking."
  },
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "We embrace and celebrate diversity in all forms, creating an inclusive environment where everyone can thrive."
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We uphold honesty, transparency, and ethical conduct in all our actions and decisions."
  },
  {
    icon: Building,
    title: "Community Engagement",
    description: "We believe in active participation and service to local and global communities."
  }
];

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.classList.remove('opacity-0');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-college-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-bold mb-6">About Green College</h1>
            <p className="text-xl text-college-100 mb-8">
              For over three decades, Green College has been dedicated to providing transformative education that prepares students for success in a rapidly changing world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-college-700 hover:bg-college-100">
                Our Mission & Vision
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Campus Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Tabs Navigation */}
          <Tabs defaultValue="overview" className="mb-16">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Welcome to Green College</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Green College is a leading institution dedicated to academic excellence, innovation, and sustainable practices. Our comprehensive approach to education integrates cutting-edge research, community engagement, and global perspectives.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    With state-of-the-art facilities spread across our beautiful campus, we provide an inspiring environment for learning and personal growth. Our dedicated faculty members are leaders in their fields, committed to nurturing the next generation of innovators and change-makers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex items-center gap-2 text-college-700 dark:text-college-400">
                      <Clock className="h-5 w-5" />
                      <span>Founded in 1985</span>
                    </div>
                    <div className="flex items-center gap-2 text-college-700 dark:text-college-400">
                      <Users className="h-5 w-5" />
                      <span>5,000+ Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-college-700 dark:text-college-400">
                      <MapPin className="h-5 w-5" />
                      <span>50-Acre Campus</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" 
                    alt="Green College Campus" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
              
              {/* Core Values Section */}
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Core Values</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    These fundamental principles guide our actions and shape our community
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coreValues.map((value, index) => (
                    <Card 
                      key={index} 
                      className="hover-card animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="bg-college-100 dark:bg-college-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <value.icon className="h-8 w-8 text-college-600 dark:text-college-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{value.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Campus Facilities */}
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Campus Facilities</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Our modern campus provides everything students need for academic success and a fulfilling college experience
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative group overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500&auto=format&fit=crop" 
                      alt="Library" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">Modern Library</h3>
                    </div>
                  </div>
                  
                  <div className="relative group overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1513595207829-9f414c0665f6?q=80&w=500&auto=format&fit=crop" 
                      alt="Research Labs" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">Research Laboratories</h3>
                    </div>
                  </div>
                  
                  <div className="relative group overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1576207636089-799cd0e1dbf0?q=80&w=500&auto=format&fit=crop" 
                      alt="Fitness Center" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">Athletic Facilities</h3>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/gallery">
                    <Button className="bg-college-600 hover:bg-college-700 text-white">
                      Explore Campus Gallery <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            {/* Mission & Vision Tab */}
            <TabsContent value="mission" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Green College is committed to providing exceptional education that empowers students to become innovative thinkers, responsible citizens, and effective leaders in a rapidly changing global society.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Through rigorous academic programs, experiential learning opportunities, and community engagement, we cultivate knowledge, skills, and values that enable our students to make meaningful contributions to society while pursuing fulfilling careers.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
                    alt="Students collaborating" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=800&auto=format&fit=crop" 
                    alt="Future of education" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We envision Green College as a leading institution known for academic excellence, innovative research, and sustainable practices. We aspire to be recognized globally for creating transformative educational experiences that prepare students to address complex challenges and make positive changes in the world.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our vision embraces a future where our graduates lead with compassion, creativity, and integrity in diverse fields, contributing to the advancement of knowledge and the betterment of society.
                  </p>
                </div>
              </div>
              
              <div className="bg-college-50 dark:bg-college-900 rounded-lg p-8 text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Strategic Goals</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Academic Innovation</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Develop cutting-edge programs that respond to emerging fields and societal needs.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Sustainability Leadership</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Model environmental stewardship through campus initiatives and curriculum integration.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Global Engagement</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Expand international partnerships and cross-cultural learning opportunities.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Student Success</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Enhance support services and learning resources to improve retention and outcomes.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Research Excellence</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Increase support for faculty and student research with real-world impact.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Community Partnerships</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Strengthen relationships with local organizations for mutual benefit.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* History Tab */}
            <TabsContent value="history" className="animate-fade-in">
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our History</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Since our founding in 1985, Green College has grown from a small institution with a bold vision to a recognized leader in higher education. Our journey reflects our commitment to innovation, excellence, and service.
                  </p>
                </div>
                
                <div ref={timelineRef} className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-college-200 dark:bg-college-800"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-12">
                    {timelineEvents.map((event, index) => (
                      <div 
                        key={index}
                        className={cn(
                          "timeline-item relative flex flex-col md:flex-row opacity-0",
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        )}
                      >
                        <div className="md:w-1/2 pb-8">
                          <div className={cn(
                            "bg-white dark:bg-college-900 p-6 rounded-lg shadow-lg border-t-4 border-t-college-500 mx-8 md:mx-4",
                            index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                          )}>
                            <div className="text-college-600 dark:text-college-400 font-bold text-xl mb-1">{event.year}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{event.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                          </div>
                        </div>
                        
                        {/* Timeline Circle */}
                        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                          <div className="bg-college-500 w-4 h-4 rounded-full border-4 border-white dark:border-college-950"></div>
                        </div>
                        
                        <div className="md:w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">A Legacy of Innovation</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Since our early days, Green College has been at the forefront of educational innovation. We were among the first institutions to integrate sustainability principles across our curriculum and campus operations.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Over the decades, we've expanded our programs to meet emerging workforce needs while maintaining our commitment to the liberal arts foundation that develops critical thinking and communication skills.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Today, as we look toward the future, we continue to evolve while staying true to our founding principles of academic excellence, inclusivity, and environmental stewardship.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=800&auto=format&fit=crop" 
                    alt="Historic campus building" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            </TabsContent>
            
            {/* Leadership Tab */}
            <TabsContent value="leadership" className="animate-fade-in">
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">College Leadership</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Our dedicated leadership team guides Green College with vision, expertise, and commitment to our institutional mission
                  </p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
                    Executive Team
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" 
                          alt="Dr. Sarah Johnson" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dr. Sarah Johnson</h4>
                      <p className="text-college-600 dark:text-college-400 mb-2">President</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ph.D. in Education Leadership, Stanford University
                      </p>
                    </div>
                    
                    <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                        <img 
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" 
                          alt="Dr. Michael Chen" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dr. Michael Chen</h4>
                      <p className="text-college-600 dark:text-college-400 mb-2">Provost & Vice President of Academic Affairs</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ph.D. in Computer Science, MIT
                      </p>
                    </div>
                    
                    <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                        <img 
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                          alt="Dr. Amara Okafor" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dr. Amara Okafor</h4>
                      <p className="text-college-600 dark:text-college-400 mb-2">Vice President of Student Affairs</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ph.D. in Molecular Biology, Harvard University
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
                    Board of Trustees
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      "James Wilson, Chair", 
                      "Elena Rodriguez, Vice Chair", 
                      "Thomas Lee, Treasurer",
                      "Maya Patel, Secretary",
                      "Robert Kim, Member",
                      "Sophia Chen, Member",
                      "David Okafor, Member",
                      "Jennifer Martinez, Member"
                    ].map((member, index) => (
                      <div 
                        key={index} 
                        className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-college-900 hover:border-college-300 dark:hover:border-college-700 transition-colors animate-fade-in"
                        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                      >
                        <p className="font-medium text-gray-900 dark:text-gray-100">{member}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-college-50 dark:bg-college-900 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Leadership Approach</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Green College embraces a collaborative leadership model that values input from all members of our community. Our administrators work closely with faculty, staff, and students to make decisions that advance our mission and enhance the educational experience.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      We are committed to transparency, ethical governance, and responsible stewardship of resources. Through inclusive leadership practices, we foster a campus environment where innovation thrives and everyone has the opportunity to contribute to our shared success.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" 
                      alt="Leadership meeting" 
                      className="rounded-lg shadow-xl w-full max-w-md"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default About;
