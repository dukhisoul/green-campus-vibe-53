
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, PencilLine, Trash2, Filter, Book } from 'lucide-react';
import { coursesData } from '@/data/courses';
import { useToast } from '@/hooks/use-toast';

const AdminCourses = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique departments for filtering
  const departments = Array.from(new Set(coursesData.map(c => c.department)));
  
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === null || course.department === filter;
    return matchesSearch && matchesFilter;
  });
  
  const handleDelete = (id: number) => {
    // Here we would typically delete from a database
    toast({
      title: "Course Deleted",
      description: "The course has been deleted successfully.",
      variant: "destructive"
    });
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">
            Manage all college courses and academic programs from this dashboard.
          </p>
        </div>
        <Link to="/admin/courses/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Course
          </Button>
        </Link>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses by title or code..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 sm:w-auto w-full">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select 
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value === '' ? null : e.target.value)}
            className="bg-background border border-input rounded-md h-10 px-3 py-2 text-sm"
          >
            <option value="">All Departments</option>
            {departments.map((department) => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Code</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div className="flex items-center font-medium">
                      <Book className="h-3 w-3 mr-2 text-muted-foreground" /> 
                      <span>{course.code}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.department}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{course.level}</Badge>
                  </TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Link to={`/admin/courses/${course.id}`}>
                      <Button variant="ghost" size="icon">
                        <PencilLine className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(course.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6">
                  No courses found. Try adjusting your search or filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCourses;
