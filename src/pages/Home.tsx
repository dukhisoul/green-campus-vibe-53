
import { ResponsiveNav } from "@/components/navigation/ResponsiveNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNav />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-800 to-college-600 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Welcome to Green College
              </h1>
              <p className="text-lg md:text-xl text-gray-100">
                A leading institution committed to academic excellence and sustainable education
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-college-700 hover:bg-gray-100">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
                alt="Students on campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Announcements Section */}
      <section className="py-12 bg-gray-50 dark:bg-college-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest Announcements</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Stay updated with the latest campus news and events</p>
            </div>
            <Link to="/announcements" className="text-college-600 dark:text-college-400 font-medium hover:underline mt-4 lg:mt-0">
              View all announcements →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Announcements - These would typically come from data */}
            <div className="bg-white dark:bg-college-900 rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-800 mb-4">Important</span>
              <h3 className="text-xl font-semibold mb-2">Fall 2025 Registration Now Open</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Registration for fall semester classes is now open for all continuing students.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">May 1, 2025</span>
                <Link to="/announcements/1" className="text-sm text-college-600 dark:text-college-400 hover:underline">Read more</Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-college-900 rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800 mb-4">Facilities</span>
              <h3 className="text-xl font-semibold mb-2">New Science Building Grand Opening</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Join us for the ribbon cutting ceremony of our state-of-the-art science facility.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">April 28, 2025</span>
                <Link to="/announcements/2" className="text-sm text-college-600 dark:text-college-400 hover:underline">Read more</Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-college-900 rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-800 mb-4">Academic</span>
              <h3 className="text-xl font-semibold mb-2">Summer Research Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Applications for summer research positions are now being accepted.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">April 25, 2025</span>
                <Link to="/announcements/3" className="text-sm text-college-600 dark:text-college-400 hover:underline">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-12 bg-white dark:bg-college-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Join us for these exciting campus events</p>
            </div>
            <Link to="/events" className="text-college-600 dark:text-college-400 font-medium hover:underline mt-4 lg:mt-0">
              View all events →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample Events - These would typically come from data */}
            <div className="bg-gray-50 dark:bg-college-800 rounded-lg overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=500"
                alt="Career Fair" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Annual Career Fair</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with over 50 employers from various industries.</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="mr-4">May 10, 2025</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <Link 
                  to="/events/1"
                  className="inline-block bg-college-600 text-white py-2 px-4 rounded hover:bg-college-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-college-800 rounded-lg overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=500"
                alt="Research Symposium" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Student Research Symposium</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Showcasing innovative research projects from our students.</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="mr-4">May 15, 2025</span>
                  <span>1:00 PM - 5:00 PM</span>
                </div>
                <Link 
                  to="/events/2"
                  className="inline-block bg-college-600 text-white py-2 px-4 rounded hover:bg-college-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-college-800 rounded-lg overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=500"
                alt="Alumni Reunion" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spring Alumni Reunion</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Reconnect with classmates and celebrate your alma mater.</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="mr-4">May 20, 2025</span>
                  <span>6:00 PM - 9:00 PM</span>
                </div>
                <Link 
                  to="/events/3"
                  className="inline-block bg-college-600 text-white py-2 px-4 rounded hover:bg-college-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Green College</h3>
              <p className="text-gray-400">
                123 Campus Drive<br />
                Greenville, GC 12345<br />
                (555) 123-4567<br />
                info@greencollege.edu
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link to="/faculty" className="text-gray-400 hover:text-white">Faculty</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Student Portal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Library</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">IT Help Desk</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
              <form className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter</p>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="px-4 py-2 w-full text-gray-900 rounded-l" />
                  <button type="submit" className="bg-college-600 hover:bg-college-700 text-white px-4 py-2 rounded-r">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Green College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
