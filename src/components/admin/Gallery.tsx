
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, Plus, Search, Filter, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample gallery data
const galleryData = [
  {
    id: 1,
    title: "Campus Aerial View",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Aerial view of the main campus buildings and grounds",
    dateAdded: "April 10, 2025",
    addedBy: "Admin"
  },
  {
    id: 2,
    title: "Library Interior",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Modern library with study spaces and extensive collections",
    dateAdded: "April 8, 2025",
    addedBy: "Admin"
  },
  {
    id: 3,
    title: "Science Fair 2025",
    category: "Events",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Students presenting their research projects at the annual science fair",
    dateAdded: "April 5, 2025",
    addedBy: "Admin"
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Class of 2025 graduation ceremony at the main auditorium",
    dateAdded: "April 2, 2025",
    addedBy: "Admin"
  },
  {
    id: 5,
    title: "Sports Complex",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Modern indoor sports complex with multiple courts and facilities",
    dateAdded: "March 28, 2025",
    addedBy: "Admin"
  },
  {
    id: 6,
    title: "Green Spaces",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Beautiful green spaces and gardens around campus",
    dateAdded: "March 25, 2025",
    addedBy: "Admin"
  },
];

const AdminGallery = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique categories for filtering
  const categories = Array.from(new Set(galleryData.map(g => g.category)));
  
  const filteredGallery = galleryData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        (item.description?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    const matchesFilter = filter === null || item.category === filter;
    return matchesSearch && matchesFilter;
  });
  
  const handleDelete = (id: number) => {
    // Here we would typically delete from a database
    toast({
      title: "Image Deleted",
      description: "The image has been deleted successfully.",
      variant: "destructive"
    });
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gallery</h1>
          <p className="text-muted-foreground">
            Manage all images in the college gallery.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Image
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search images..."
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.length > 0 ? (
          filteredGallery.map((item) => (
            <div key={item.id} className="border rounded-md overflow-hidden group">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="icon" className="rounded-full bg-white/90 backdrop-blur-sm">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    className="rounded-full bg-white/90 backdrop-blur-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Added on {item.dateAdded}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-secondary p-4 mb-4">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No images found</h3>
            <p className="text-muted-foreground mt-1 max-w-md">
              Try adjusting your search or filters, or add new images to the gallery.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGallery;
