
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export interface Image {
  src: string;
  alt: string;
  title?: string;
}

interface ImageViewerProps {
  images: Image[];
  currentIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImageViewer({ images, currentIndex, open, onOpenChange }: ImageViewerProps) {
  const [index, setIndex] = useState(currentIndex);
  
  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          onOpenChange(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] p-0 sm:p-1 md:p-2 bg-black/90 border-gray-800">
        <div className="relative flex items-center justify-center w-full h-full min-h-[50vh]">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 z-50 bg-black/40 hover:bg-black/60 text-white rounded-full"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>
          
          {images.length > 1 && (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10"
                onClick={handlePrevious}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10"
                onClick={handleNext}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </>
          )}
          
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-full max-h-[85vh] object-contain" 
            />
          </div>
          
          {currentImage.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
              <p className="text-sm md:text-base">{currentImage.title}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
