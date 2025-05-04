
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Clock, Calendar, Users, FileDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { coursesData } from '@/data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id.toString() === id);
  
  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-college-800 dark:text-college-300 mb-4">Course Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The course you're looking for does not exist or has been removed.
            </p>
            <Link to="/courses">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
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
            <Link to="/courses" className="inline-flex items-center text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300 mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Courses
            </Link>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-college-50 text-college-700 dark:bg-college-900 dark:text-college-400">
                {course.department}
              </Badge>
              <Badge className="bg-college-500 text-white">
                {course.level} Course
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-college-800 dark:text-college-300 mb-2">{course.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl">{course.code}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Tabs defaultValue="overview" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="instructors">Instructors</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="pt-6">
                  <div className="prose dark:prose-invert prose-headings:text-college-800 dark:prose-headings:text-college-300 prose-a:text-college-600 dark:prose-a:text-college-400 max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{course.description}</p>
                    
                    <h2 className="text-2xl font-semibold text-college-700 dark:text-college-300 mb-4">Learning Outcomes</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      {course.learningOutcomes?.map((outcome, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">{outcome}</li>
                      )) || (
                        <>
                          <li className="text-gray-700 dark:text-gray-300">Understand fundamental principles and theories in the field</li>
                          <li className="text-gray-700 dark:text-gray-300">Develop critical thinking and analytical skills</li>
                          <li className="text-gray-700 dark:text-gray-300">Apply theoretical knowledge to practical situations</li>
                          <li className="text-gray-700 dark:text-gray-300">Communicate effectively using field-specific terminology</li>
                        </>
                      )}
                    </ul>
                    
                    <h2 className="text-2xl font-semibold text-college-700 dark:text-college-300 mb-4">Assessment Methods</h2>
                    <div className="space-y-4 mb-8">
                      {course.assessmentMethods?.map((method, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300">{method.name}</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{method.weight}%</span>
                          </div>
                          <Progress value={method.weight} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-college-500" />
                        </div>
                      )) || (
                        <>
                          <div className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300">Exams</span>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">40%</span>
                            </div>
                            <Progress value={40} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-college-500" />
                          </div>
                          <div className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300">Assignments</span>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">30%</span>
                            </div>
                            <Progress value={30} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-college-500" />
                          </div>
                          <div className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300">Projects</span>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">20%</span>
                            </div>
                            <Progress value={20} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-college-500" />
                          </div>
                          <div className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 dark:text-gray-300">Participation</span>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">10%</span>
                            </div>
                            <Progress value={10} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-college-500" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="syllabus" className="pt-6">
                  <div className="prose dark:prose-invert prose-headings:text-college-800 dark:prose-headings:text-college-300 prose-a:text-college-600 dark:prose-a:text-college-400 max-w-none">
                    <h2 className="text-2xl font-semibold text-college-700 dark:text-college-300 mb-4">Course Content</h2>
                    
                    <div className="space-y-6">
                      {course.syllabus?.map((unit, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-college-700 dark:text-college-400 mb-2">
                            Module {index + 1}: {unit.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-3">{unit.description}</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {unit.topics.map((topic, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-400">{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )) || (
                        <>
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-college-700 dark:text-college-400 mb-2">
                              Module 1: Introduction to the Course
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Overview of fundamental concepts and historical context</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li className="text-gray-600 dark:text-gray-400">Historical development of the field</li>
                              <li className="text-gray-600 dark:text-gray-400">Core terminology and concepts</li>
                              <li className="text-gray-600 dark:text-gray-400">Current trends and developments</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-college-700 dark:text-college-400 mb-2">
                              Module 2: Theoretical Frameworks
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Examination of major theories and their applications</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li className="text-gray-600 dark:text-gray-400">Theory A and its practical applications</li>
                              <li className="text-gray-600 dark:text-gray-400">Theory B and case studies</li>
                              <li className="text-gray-600 dark:text-gray-400">Comparing and contrasting theoretical approaches</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-college-700 dark:text-college-400 mb-2">
                              Module 3: Applied Methods
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">Practical approaches and methodologies</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li className="text-gray-600 dark:text-gray-400">Research methodologies</li>
                              <li className="text-gray-600 dark:text-gray-400">Data analysis techniques</li>
                              <li className="text-gray-600 dark:text-gray-400">Practical implementation strategies</li>
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      <Button className="bg-college-600 hover:bg-college-700 flex items-center">
                        <FileDown className="mr-2 h-4 w-4" /> Download Full Syllabus
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="instructors" className="pt-6">
                  <div className="prose dark:prose-invert prose-headings:text-college-800 dark:prose-headings:text-college-300 prose-a:text-college-600 dark:prose-a:text-college-400 max-w-none">
                    <h2 className="text-2xl font-semibold text-college-700 dark:text-college-300 mb-6">Course Instructors</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.instructors?.map((instructor, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center">
                          <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                            <img 
                              src={instructor.image || "/placeholder.svg"} 
                              alt={instructor.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-medium text-college-800 dark:text-college-300">{instructor.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">{instructor.title}</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{instructor.bio}</p>
                          <Link to={`/faculty/${instructor.id}`} className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300">
                            View Profile
                          </Link>
                        </div>
                      )) || (
                        <>
                          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center">
                            <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                              <img 
                                src="/placeholder.svg" 
                                alt="Dr. Jane Smith" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <h3 className="text-xl font-medium text-college-800 dark:text-college-300">Dr. Jane Smith</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">Associate Professor</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Dr. Smith has over 15 years of experience in the field and has published numerous papers in leading journals.</p>
                            <Link to="/faculty/1" className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300">
                              View Profile
                            </Link>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center">
                            <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                              <img 
                                src="/placeholder.svg" 
                                alt="Prof. Robert Johnson" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <h3 className="text-xl font-medium text-college-800 dark:text-college-300">Prof. Robert Johnson</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">Assistant Professor</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Prof. Johnson specializes in advanced research methodologies and has led several international research projects.</p>
                            <Link to="/faculty/2" className="text-college-600 hover:text-college-800 dark:text-college-400 dark:hover:text-college-300">
                              View Profile
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white dark:bg-college-900 rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="text-xl font-semibold text-college-800 dark:text-college-300 mb-4">Course Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Book className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Credits</p>
                      <p className="text-gray-600 dark:text-gray-400">{course.credits || 3} credit hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Duration</p>
                      <p className="text-gray-600 dark:text-gray-400">{course.duration || "16 weeks"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Schedule</p>
                      <p className="text-gray-600 dark:text-gray-400">{course.schedule || "Mon/Wed 2:00 - 3:30 PM"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-college-600 dark:text-college-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Prerequisites</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {course.prerequisites?.join(", ") || "None"}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="mt-4">
                  <Button className="w-full bg-college-600 hover:bg-college-700">
                    Register for Course
                  </Button>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    <FileDown className="mr-2 h-4 w-4" /> Download Course Outline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
