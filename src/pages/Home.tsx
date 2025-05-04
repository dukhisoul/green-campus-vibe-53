
import HeroBanner from '@/components/home/HeroBanner';
import Announcements from '@/components/home/Announcements';
import PrincipalMessage from '@/components/home/PrincipalMessage';
import RecentEvents from '@/components/home/RecentEvents';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CampusLife from '@/components/home/CampusLife';
import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <Announcements />
      <PrincipalMessage />
      <RecentEvents />
      <Stats />
      <FeaturedCourses />
      <Testimonials />
      <CampusLife />
      <CallToAction />
    </Layout>
  );
};

export default Home;
