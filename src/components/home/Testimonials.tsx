
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "My time at Green College was transformative. The supportive faculty and challenging curriculum prepared me exceptionally well for my career in environmental science.",
    name: "Alex Thompson",
    role: "Environmental Scientist, GreenTech Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 2,
    content: "The computer science program at Green College gave me the perfect foundation for my tech startup. The practical approach to learning and industry connections were invaluable.",
    name: "Michael Chen",
    role: "Co-founder, TechInnovate",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 3,
    content: "As an international student, I found a welcoming community at Green College. The diverse perspectives and inclusive environment enriched my educational experience tremendously.",
    name: "Sophia Rodriguez",
    role: "Marketing Director, Global Brands",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 4,
    content: "The faculty at Green College don't just teach—they mentor. Their guidance helped me discover my passion for research and set me on the path to my current academic career.",
    name: "David Okafor",
    role: "Assistant Professor, National University",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-college-50 dark:bg-college-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-college-800 dark:text-college-300">Student Testimonials</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what our students and alumni have to say about their experience at Green College
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 text-college-200 dark:text-college-800 opacity-30 z-0">
            <Quote size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <Card className="border-none bg-white dark:bg-college-800 shadow-lg">
                      <CardContent className="p-8">
                        <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 border-2 border-college-500">
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                            <AvatarFallback className="bg-college-100 text-college-700">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-college-600 w-8" 
                      : "bg-college-300 hover:bg-college-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={handlePrev}
                className="rounded-full bg-white/80 dark:bg-college-800/80 backdrop-blur-sm border-college-300 hover:bg-college-100"
              >
                <ChevronLeft className="h-5 w-5 text-college-700 dark:text-college-400" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleNext}
                className="rounded-full bg-white/80 dark:bg-college-800/80 backdrop-blur-sm border-college-300 hover:bg-college-100"
              >
                <ChevronRight className="h-5 w-5 text-college-700 dark:text-college-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
