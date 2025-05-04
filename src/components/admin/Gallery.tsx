
import { useState } from 'react';
import { Upload, Trash2, PlusCircle, Search, Filter, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Mock gallery data
const galleryData = [
  {
    id: 1,
    title: "Campus Main Building",
    category: "Campus",
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    date: "2023-04-15"
  },
  {
    id: 2,
    title: "Science Fair 2023",
    category: "Events",
    url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f669?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    date: "2023-02-10"
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    category: "Events",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    date: "2023-05-20"
  },
  {
    id: 4,
    title: "Library Interior",
    category: "Campus",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    date: "2023-03-15"
  },
  {
    id: 5,
    title: "Football Championship",
    category: "Sports",
    url: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    date: "2023-06-05"
  },
  {
    id: 6,
    title: "Cultural Festival",
    category: "Events",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    date: "2023-02-25"
  }
];

const AdminGallery = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
  // Get unique categories for filtering
  const categories = Array.from(new Set(galleryData.map(g => g.category)));
  
  const filteredGallery = galleryData.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleSelectImage = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
  
  const handleSelectAll = () => {
    if (selectedItems.length === filteredGallery.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredGallery.map(image => image.id));
    }
  };
  
  const handleDelete = () => {
    if (selectedItems.length === 0) return;
    
    // Here we would typically delete from a database
    toast({
      title: `${selectedItems.length} Image${selectedItems.length > 1 ? 's' : ''} Deleted`,
      description: "The selected images have been removed successfully.",
      variant: "destructive"
    });
    
    setSelectedItems([]);
  };
  
  const handleUpload = () => {
    toast({
      title: "Upload Started",
      description: "Your images are being uploaded.",
    });
  };
  
  return (
    <div className="space-y-6 p-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Photo Gallery</h1>
          <p className="text-muted-foreground">
            Manage the college photo gallery from this dashboard.
          </p>
        </div>
        <Button onClick={handleUpload} className="animate-scale-in">
          <Upload className="mr-2 h-4 w-4" /> Upload Images
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
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
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value === '' ? null : e.target.value)}
            className="bg-background border border-input rounded-md h-10 px-3 py-2 text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bg-background border rounded-md p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              checked={selectedItems.length === filteredGallery.length && filteredGallery.length > 0}
              onCheckedChange={handleSelectAll}
            />
            <Label>Select All</Label>
          </div>
          
          {selectedItems.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
              </span>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4 mr-2" /> Delete
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedItems([])}
              >
                <X className="h-4 w-4 mr-2" /> Clear Selection
              </Button>
            </div>
          )}
        </div>
        
        <Separator className="my-4" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGallery.length > 0 ? (
            filteredGallery.map((image) => (
              <Card key={image.id} className={`overflow-hidden hover-scale animate-fade-in ${selectedItems.includes(image.id) ? 'ring-2 ring-primary' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <Checkbox 
                      checked={selectedItems.includes(image.id)}
                      onCheckedChange={() => handleSelectImage(image.id)}
                      className="bg-white/90 border-white"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-black/60 text-white border-none text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="font-medium text-sm truncate">{image.title}</div>
                  <div className="text-xs text-muted-foreground">{image.date}</div>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between">
                  <Button variant="ghost" size="sm">
                    <PencilLine className="h-3 w-3 mr-1" /> Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDelete()}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3 mr-1" /> Delete
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center p-12 text-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground mb-3" />
              <h3 className="font-medium text-lg">No images found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
              <Button variant="outline" className="mt-4">
                <PlusCircle className="h-4 w-4 mr-2" /> Add Images
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
