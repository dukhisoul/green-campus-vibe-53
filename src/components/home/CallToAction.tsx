
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-college-700 via-college-600 to-college-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Begin Your Academic Journey Today
          </h2>
          <p className="text-lg text-college-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Take the first step toward a brighter future. Apply now for our upcoming semester and join our community of scholars and innovators.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-white text-college-700 hover:bg-college-100">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
