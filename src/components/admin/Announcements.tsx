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
import { Search, Plus, Pencil, Trash2, Filter } from 'lucide-react';
import { announcementsData } from '@/data/announcements';
import { useToast } from '@/hooks/use-toast';

const AdminAnnouncements = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique categories for filtering
  const categories = Array.from(new Set(announcementsData.map(a => a.category)));
  
  const filteredAnnouncements = announcementsData.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        announcement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === null || announcement.category === filter;
    return matchesSearch && matchesFilter;
  });
  
  const handleDelete = (id: number) => {
    // Here we would typically delete from a database
    toast({
      title: "Announcement Deleted",
      description: "The announcement has been deleted successfully.",
      variant: "destructive"
    });
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground">
            Manage all college announcements from this dashboard.
          </p>
        </div>
        <Link to="/admin/announcements/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Announcement
          </Button>
        </Link>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search announcements..."
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
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <TableRow key={announcement.id}>
                  <TableCell className="font-medium">{announcement.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{announcement.category}</Badge>
                  </TableCell>
                  <TableCell>{announcement.date}</TableCell>
                  <TableCell>
                    {announcement.important ? (
                      <Badge className="bg-red-500">Important</Badge>
                    ) : (
                      <Badge variant="secondary">Standard</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Link to={`/admin/announcements/${announcement.id}`}>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(announcement.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No announcements found. Try adjusting your search or filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminAnnouncements;
