import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import STCWCourses from "./pages/STCWCourses.tsx";
import STCWOnlineCourses from "./pages/STCWOnlineCourses.tsx";
import DeckhandCourses from "./pages/DeckhandCourses.tsx";
import YachtDeckhandCourses from "./pages/YachtDeckhandCourses.tsx";
import YachtInteriorCourses from "./pages/YachtInteriorCourses.tsx";
import EntertainmentWorkshops from "./pages/EntertainmentWorkshops.tsx";
import SevenSeasStars from "./pages/SevenSeasStars.tsx";
import CaptainsLicense from "./pages/CaptainsLicense.tsx";
import CourseSchedule from "./pages/CourseSchedule.tsx";
import BookingCheckout from "./pages/BookingCheckout.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stcw-courses" element={<STCWCourses />} />
          <Route path="/stcw-online-courses" element={<STCWOnlineCourses />} />
          <Route path="/deckhand-courses" element={<DeckhandCourses />} />
          <Route path="/yacht-deckhand-courses" element={<YachtDeckhandCourses />} />
          <Route path="/yacht-interior-courses" element={<YachtInteriorCourses />} />
          <Route path="/cruise-ship-entertainment" element={<EntertainmentWorkshops />} />
          <Route path="/seven-seas-stars" element={<SevenSeasStars />} />
          <Route path="/captains-license" element={<CaptainsLicense />} />
          <Route path="/course-schedule" element={<CourseSchedule />} />
          <Route path="/booking" element={<BookingCheckout />} />
          <Route path="/course/:slug" element={<CoursePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
