
import { useState } from "react";
import { ResponsiveNav } from "@/components/navigation/ResponsiveNav";
import { GalleryImage } from "@/components/ui/gallery-image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image-viewer";
import { Search, Filter } from "lucide-react";

// Sample gallery images
const galleryImages: Image[] = [
  { 
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60", 
    alt: "Campus Aerial View",
    title: "Aerial view of the main campus buildings and grounds" 
  },
  { 
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60", 
    alt: "College Library",
    title: "Modern library with extensive collections and study spaces" 
  },
  { 
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60", 
    alt: "Student Studying",
    title: "Student working on a project in the campus innovation hub" 
  },
  { 
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60", 
    alt: "Career Fair",
    title: "Annual career fair with employers from various industries" 
  },
  { 
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60", 
    alt: "Graduation Ceremony",
    title: "Class of 2025 graduation ceremony at the main auditorium" 
  },
  { 
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60", 
    alt: "Science Fair",
    title: "Students presenting their research at the annual science fair" 
  },
  { 
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=60", 
    alt: "Research Lab",
    title: "State-of-the-art research laboratory in the science building" 
  },
  { 
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60", 
    alt: "Alumni Event",
    title: "Alumni reunion event in the campus reception hall" 
  },
  { 
    src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&auto=format&fit=crop&q=60", 
    alt: "Campus Garden",
    title: "Sustainable garden maintained by environmental science students" 
  }
];

// Categories for filtering
const categories = ["All", "Campus", "Events", "Students", "Facilities"];

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // In a real app, you would filter based on tags or metadata
  // For this demo, we'll just simulate filtering
  const filteredImages = galleryImages;

  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNav />
      
      <main className="flex-grow">
        {/* Hero header */}
        <div className="bg-college-700 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold">Campus Gallery</h1>
            <p className="mt-2 text-lg text-college-200">
              Explore our collection of images showcasing campus life and events
            </p>
          </div>
        </div>
        
        {/* Search and filter */}
        <div className="bg-gray-100 dark:bg-college-900 py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search gallery..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="shrink-0"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery grid */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-college-800">
                <div className="aspect-square overflow-hidden">
                  <GalleryImage 
                    src={image.src} 
                    alt={image.alt} 
                    title={image.title}
                    className="w-full h-full object-cover" 
                    galleryImages={galleryImages}
                    galleryIndex={index}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{image.alt}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">No images found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© 2025 Green College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
