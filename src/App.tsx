
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/announcements" element={<Admin />} />
          <Route path="/admin/announcements/:id" element={<Admin />} />
          <Route path="/admin/faculty" element={<Admin />} />
          <Route path="/admin/events" element={<Admin />} />
          <Route path="/admin/events/:id" element={<Admin />} />
          <Route path="/admin/courses" element={<Admin />} />
          <Route path="/admin/courses/:id" element={<Admin />} />
          <Route path="/admin/gallery" element={<Admin />} />
          <Route path="/admin/settings" element={<Admin />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
