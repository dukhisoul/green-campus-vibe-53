
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileDown, Save, Trash2, ArrowLeft, Plus, Book } from 'lucide-react';
import { coursesData } from '@/data/courses';
import { useToast } from '@/hooks/use-toast';

const AdminCourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const existingCourse = id && id !== 'new' 
    ? coursesData.find(c => c.id.toString() === id)
    : null;
  
  const [formData, setFormData] = useState({
    code: existingCourse?.code || '',
    title: existingCourse?.title || '',
    description: existingCourse?.description || '',
    department: existingCourse?.department || 'Computer Science',
    level: existingCourse?.level || 'Undergraduate',
    credits: existingCourse?.credits?.toString() || '3',
    duration: existingCourse?.duration || '16 weeks',
    schedule: existingCourse?.schedule || '',
    prerequisites: existingCourse?.prerequisites?.join(', ') || '',
  });
  
  const [learningOutcomes, setLearningOutcomes] = useState<string[]>(
    existingCourse?.learningOutcomes || ['']
  );
  
  const [assessmentMethods, setAssessmentMethods] = useState(
    existingCourse?.assessmentMethods || [
      { name: 'Assignments', weight: 30 },
      { name: 'Exams', weight: 40 },
      { name: 'Projects', weight: 20 },
      { name: 'Participation', weight: 10 },
    ]
  );
  
  const [syllabus, setSyllabus] = useState(
    existingCourse?.syllabus || [
      { title: '', description: '', topics: [''] }
    ]
  );
  
  const [instructors, setInstructors] = useState(
    existingCourse?.instructors || [
      { id: 0, name: '', title: '', bio: '' }
    ]
  );
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Learning Outcomes handlers
  const handleLearningOutcomeChange = (index: number, value: string) => {
    const newOutcomes = [...learningOutcomes];
    newOutcomes[index] = value;
    setLearningOutcomes(newOutcomes);
  };
  
  const handleAddOutcome = () => {
    setLearningOutcomes([...learningOutcomes, '']);
  };
  
  const handleRemoveOutcome = (index: number) => {
    if (learningOutcomes.length > 1) {
      setLearningOutcomes(learningOutcomes.filter((_, i) => i !== index));
    }
  };
  
  // Assessment Methods handlers
  const handleAssessmentChange = (index: number, field: string, value: string | number) => {
    const newMethods = [...assessmentMethods];
    newMethods[index] = { ...newMethods[index], [field]: value };
    setAssessmentMethods(newMethods);
  };
  
  const handleAddAssessment = () => {
    setAssessmentMethods([...assessmentMethods, { name: '', weight: 0 }]);
  };
  
  const handleRemoveAssessment = (index: number) => {
    if (assessmentMethods.length > 1) {
      setAssessmentMethods(assessmentMethods.filter((_, i) => i !== index));
    }
  };
  
  // Syllabus handlers
  const handleSyllabusChange = (index: number, field: string, value: string) => {
    const newSyllabus = [...syllabus];
    newSyllabus[index] = { ...newSyllabus[index], [field]: value };
    setSyllabus(newSyllabus);
  };
  
  const handleSyllabusTopicChange = (syllabusIndex: number, topicIndex: number, value: string) => {
    const newSyllabus = [...syllabus];
    const newTopics = [...newSyllabus[syllabusIndex].topics];
    newTopics[topicIndex] = value;
    newSyllabus[syllabusIndex].topics = newTopics;
    setSyllabus(newSyllabus);
  };
  
  const handleAddSyllabusTopic = (syllabusIndex: number) => {
    const newSyllabus = [...syllabus];
    newSyllabus[syllabusIndex].topics.push('');
    setSyllabus(newSyllabus);
  };
  
  const handleRemoveSyllabusTopic = (syllabusIndex: number, topicIndex: number) => {
    if (syllabus[syllabusIndex].topics.length > 1) {
      const newSyllabus = [...syllabus];
      newSyllabus[syllabusIndex].topics = newSyllabus[syllabusIndex].topics.filter((_, i) => i !== topicIndex);
      setSyllabus(newSyllabus);
    }
  };
  
  const handleAddSyllabusModule = () => {
    setSyllabus([...syllabus, { title: '', description: '', topics: [''] }]);
  };
  
  const handleRemoveSyllabusModule = (index: number) => {
    if (syllabus.length > 1) {
      setSyllabus(syllabus.filter((_, i) => i !== index));
    }
  };
  
  // Instructor handlers
  const handleInstructorChange = (index: number, field: string, value: string | number) => {
    const newInstructors = [...instructors];
    newInstructors[index] = { ...newInstructors[index], [field]: value };
    setInstructors(newInstructors);
  };
  
  const handleAddInstructor = () => {
    const newId = instructors.length > 0 
      ? Math.max(...instructors.map(i => i.id)) + 1 
      : 1;
    setInstructors([...instructors, { id: newId, name: '', title: '', bio: '' }]);
  };
  
  const handleRemoveInstructor = (index: number) => {
    if (instructors.length > 1) {
      setInstructors(instructors.filter((_, i) => i !== index));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically save to a database
    toast({
      title: "Course Saved",
      description: `The course "${formData.title}" has been saved successfully.`,
    });
    navigate('/admin/courses');
  };
  
  const handleDelete = () => {
    // Here we would typically delete from a database
    toast({
      title: "Course Deleted",
      description: `The course has been deleted successfully.`,
      variant: "destructive"
    });
    navigate('/admin/courses');
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {id === 'new' ? 'Create New Course' : 'Edit Course'}
          </h1>
          <p className="text-muted-foreground">
            {id === 'new' 
              ? 'Fill in the details to create a new course' 
              : 'Make changes to the course details'}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/admin/courses')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
        </Button>
      </div>
      
      <Separator />
      
      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="code">Course Code</Label>
                <Input 
                  id="code"
                  value={formData.code}
                  onChange={(e) => handleChange('code', e.target.value)}
                  placeholder="e.g., CS301"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select 
                  defaultValue={formData.department}
                  onValueChange={(value) => handleChange('department', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Biology">Biology</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Business Administration">Business Administration</SelectItem>
                    <SelectItem value="Psychology">Psychology</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="title">Course Title</Label>
                <Input 
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Enter course title"
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea 
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Enter course description"
                  rows={5}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select 
                  defaultValue={formData.level}
                  onValueChange={(value) => handleChange('level', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="Graduate">Graduate</SelectItem>
                    <SelectItem value="Certificate">Certificate</SelectItem>
                    <SelectItem value="Professional Development">Professional Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="credits">Credits</Label>
                <Input 
                  id="credits"
                  type="number"
                  min="0"
                  max="12"
                  value={formData.credits}
                  onChange={(e) => handleChange('credits', e.target.value)}
                  placeholder="e.g., 3"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input 
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => handleChange('duration', e.target.value)}
                  placeholder="e.g., 16 weeks"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="schedule">Schedule</Label>
                <Input 
                  id="schedule"
                  value={formData.schedule}
                  onChange={(e) => handleChange('schedule', e.target.value)}
                  placeholder="e.g., Mon/Wed 10:00 AM - 11:30 AM"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="prerequisites">Prerequisites</Label>
                <Input 
                  id="prerequisites"
                  value={formData.prerequisites}
                  onChange={(e) => handleChange('prerequisites', e.target.value)}
                  placeholder="e.g., MATH101, CS201 (comma separated)"
                />
                <p className="text-sm text-muted-foreground mt-1">Enter course codes separated by commas</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <Input
                      value={outcome}
                      onChange={(e) => handleLearningOutcomeChange(index, e.target.value)}
                      placeholder="Enter a learning outcome"
                      className="flex-grow"
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleRemoveOutcome(index)}
                      disabled={learningOutcomes.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={handleAddOutcome}
                  className="w-full"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Learning Outcome
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assessment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 font-medium text-sm">
                  <div className="flex-grow">Assessment Type</div>
                  <div className="w-20 text-right">Weight (%)</div>
                  <div className="w-10"></div>
                </div>
                
                {assessmentMethods.map((method, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <Input
                      value={method.name}
                      onChange={(e) => handleAssessmentChange(index, 'name', e.target.value)}
                      placeholder="e.g., Assignments"
                      className="flex-grow"
                    />
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={method.weight}
                      onChange={(e) => handleAssessmentChange(index, 'weight', parseInt(e.target.value) || 0)}
                      className="w-20 text-right"
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleRemoveAssessment(index)}
                      disabled={assessmentMethods.length <= 1}
                      className="w-10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={handleAddAssessment}
                  className="w-full"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Assessment Method
                </Button>
                
                <div className="flex justify-between items-center text-sm font-medium pt-2">
                  <span>Total</span>
                  <span className={`w-20 text-right ${
                    assessmentMethods.reduce((sum, method) => sum + (method.weight || 0), 0) !== 100 ? 'text-red-500' : ''
                  }`}>
                    {assessmentMethods.reduce((sum, method) => sum + (method.weight || 0), 0)}%
                  </span>
                  <span className="w-10"></span>
                </div>
                {assessmentMethods.reduce((sum, method) => sum + (method.weight || 0), 0) !== 100 && (
                  <p className="text-sm text-red-500">Total weight should equal 100%</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="syllabus" className="space-y-6">
            {syllabus.map((module, moduleIndex) => (
              <Card key={moduleIndex}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Module {moduleIndex + 1}</CardTitle>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRemoveSyllabusModule(moduleIndex)}
                      disabled={syllabus.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Module Title</Label>
                    <Input
                      value={module.title}
                      onChange={(e) => handleSyllabusChange(moduleIndex, 'title', e.target.value)}
                      placeholder="e.g., Introduction to Computing"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={module.description}
                      onChange={(e) => handleSyllabusChange(moduleIndex, 'description', e.target.value)}
                      placeholder="Brief overview of this module"
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Topics</Label>
                    </div>
                    
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex gap-3 items-center">
                        <Input
                          value={topic}
                          onChange={(e) => handleSyllabusTopicChange(moduleIndex, topicIndex, e.target.value)}
                          placeholder="Enter a topic for this module"
                          className="flex-grow"
                        />
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleRemoveSyllabusTopic(moduleIndex, topicIndex)}
                          disabled={module.topics.length <= 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleAddSyllabusTopic(moduleIndex)}
                      className="w-full mt-2"
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Topic
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button 
              type="button" 
              variant="outline"
              onClick={handleAddSyllabusModule}
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Module
            </Button>
          </TabsContent>
          
          <TabsContent value="instructors" className="space-y-6">
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Instructor {index + 1}</CardTitle>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRemoveInstructor(index)}
                      disabled={instructors.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input
                        value={instructor.name}
                        onChange={(e) => handleInstructorChange(index, 'name', e.target.value)}
                        placeholder="Instructor name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={instructor.title}
                        onChange={(e) => handleInstructorChange(index, 'title', e.target.value)}
                        placeholder="e.g., Associate Professor"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label>Profile Image URL</Label>
                      <Input
                        value={instructor.image || ''}
                        onChange={(e) => handleInstructorChange(index, 'image', e.target.value)}
                        placeholder="Image URL"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label>Bio</Label>
                      <Textarea
                        value={instructor.bio || ''}
                        onChange={(e) => handleInstructorChange(index, 'bio', e.target.value)}
                        placeholder="Brief instructor biography"
                        rows={4}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button 
              type="button" 
              variant="outline"
              onClick={handleAddInstructor}
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Instructor
            </Button>
          </TabsContent>
        </Tabs>
        
        <Separator className="my-6" />
        
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => navigate('/admin/courses')}>
            Cancel
          </Button>
          
          <div className="space-x-2">
            {id !== 'new' && (
              <Button 
                type="button" 
                variant="destructive" 
                onClick={handleDelete}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete Course
              </Button>
            )}
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Save Course
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminCourseDetail;
