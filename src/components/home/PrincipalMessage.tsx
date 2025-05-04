
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrincipalMessage = () => {
  return (
    <section className="py-20 bg-college-50 dark:bg-college-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-3xl font-bold text-college-800 dark:text-college-300 mb-4">
              Principal's Message
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Welcome to Green College, where we believe in nurturing not just academic excellence, but holistic growth. For over three decades, our institution has stood as a beacon of quality education and values-based learning.
              </p>
              <p className="leading-relaxed">
                In today's rapidly evolving world, we understand that education must go beyond textbooks. Our dedicated faculty members work tirelessly to create an environment that fosters critical thinking, creativity, and ethical leadership.
              </p>
              <p className="leading-relaxed">
                At Green College, we take pride in our diverse and inclusive community. We believe that by embracing different perspectives, we enrich the educational experience for all. Our aim is to prepare students not just for careers, but for life.
              </p>
              <p className="font-medium text-college-700 dark:text-college-400 italic">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>
              <div className="pt-4">
                <span className="font-bold text-college-800 dark:text-college-300 text-lg">Dr. Sarah Johnson</span>
                <p className="text-gray-600 dark:text-gray-400">Principal, Green College</p>
              </div>
              <div className="pt-2">
                <Link to="/about">
                  <Button variant="default" className="bg-college-600 hover:bg-college-700 text-white">
                    More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-slide-in-right">
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                    alt="College Principal" 
                    className="w-full h-auto object-cover rounded-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-college-900/70 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center space-x-3">
                      <svg className="text-college-400 w-8 h-8" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,8L4,16l6,8V16h4l-4-8ZM22,8l-6,8h4v8l6-8-6-8Z"/>
                      </svg>
                      <p className="text-white italic font-light">
                        Dedicated to transforming education and nurturing tomorrow's leaders
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
