
import { useState } from "react";
import { ImageViewer, Image as ImageType } from "./image-viewer";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  galleryImages?: ImageType[];
  galleryIndex?: number;
}

export function GalleryImage({ 
  src, 
  alt, 
  title, 
  className, 
  galleryImages, 
  galleryIndex = 0 
}: GalleryImageProps) {
  const [open, setOpen] = useState(false);
  
  // If no gallery images are provided, use the current image
  const images = galleryImages || [{ src, alt, title }];

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={cn("cursor-pointer hover:opacity-90 transition-opacity", className)}
        onClick={() => setOpen(true)}
      />
      
      <ImageViewer 
        images={images} 
        currentIndex={galleryIndex} 
        open={open} 
        onOpenChange={setOpen}
      />
    </>
  );
}
