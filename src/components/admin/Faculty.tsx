
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
import { Search, Plus, PencilLine, Trash2, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock faculty data
const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Professor",
    department: "Computer Science",
    email: "sjohnson@greencollege.edu",
    phone: "(555) 123-4567",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specialization: "Artificial Intelligence"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    position: "Associate Professor",
    department: "Mathematics",
    email: "mchen@greencollege.edu",
    phone: "(555) 234-5678",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specialization: "Advanced Calculus"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Assistant Professor",
    department: "Biology",
    email: "erodriguez@greencollege.edu",
    phone: "(555) 345-6789",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specialization: "Molecular Biology"
  },
  {
    id: 4,
    name: "Prof. David Wilson",
    position: "Professor",
    department: "Physics",
    email: "dwilson@greencollege.edu",
    phone: "(555) 456-7890",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specialization: "Quantum Physics"
  }
];

const AdminFaculty = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique departments for filtering
  const departments = Array.from(new Set(facultyData.map(f => f.department)));
  
  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        faculty.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        faculty.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === null || faculty.department === filter;
    return matchesSearch && matchesFilter;
  });
  
  const handleDelete = (id: number) => {
    // Here we would typically delete from a database
    toast({
      title: "Faculty Member Removed",
      description: "The faculty member has been removed successfully.",
      variant: "destructive"
    });
  };
  
  return (
    <div className="space-y-6 p-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Faculty Management</h1>
          <p className="text-muted-foreground">
            Add, edit, or remove faculty members from this dashboard.
          </p>
        </div>
        <Button className="animate-scale-in">
          <Plus className="mr-2 h-4 w-4" /> Add Faculty
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search faculty..."
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
      
      <div className="border rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Faculty</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFaculty.length > 0 ? (
              filteredFaculty.map((faculty) => (
                <TableRow key={faculty.id} className="animate-fade-in">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{faculty.name}</div>
                        <div className="text-xs text-muted-foreground">{faculty.specialization}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{faculty.position}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-college-50 text-college-700 border-college-200">
                      {faculty.department}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{faculty.email}</div>
                      <div className="text-muted-foreground">{faculty.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon" className="hover-scale">
                      <PencilLine className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(faculty.id)}
                      className="hover-scale"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No faculty members found. Try adjusting your search or filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminFaculty;
