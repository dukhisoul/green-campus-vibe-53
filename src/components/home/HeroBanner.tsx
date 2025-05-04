
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    title: "Welcome to Green College",
    subtitle: "Where Knowledge Meets Excellence",
    description: "Providing transformative education since 1985. Join us to build your future with innovative programs and dedicated faculty.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1600&auto=format&fit=crop",
    bgPosition: "center",
  },
  {
    title: "Discover Your Potential",
    subtitle: "Innovative Education for Tomorrow's Leaders",
    description: "Our state-of-the-art facilities and programs prepare you for success in a rapidly changing world.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    bgPosition: "center",
  },
  {
    title: "Join Our Community",
    subtitle: "A Place to Learn, Grow, and Succeed",
    description: "With supportive faculty and diverse student body, we cultivate an environment where everyone thrives.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop",
    bgPosition: "center top",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-college-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,30,10,0.8), rgba(0,30,10,0.4)), url(${slide.image})`,
            backgroundPosition: slide.bgPosition,
            backgroundSize: "cover",
          }}
        />
      ))}
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white space-y-6">
            <h2 
              className="text-college-400 text-xl md:text-2xl font-medium animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].subtitle}
            </h2>
            <h1 
              className="text-4xl md:text-6xl font-bold animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {slides[currentSlide].title}
            </h1>
            <p 
              className="text-lg text-gray-200 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {slides[currentSlide].description}
            </p>
            <div 
              className="flex flex-wrap gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button size="lg" className="bg-college-600 hover:bg-college-700 text-white">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-college-400 w-8" 
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
