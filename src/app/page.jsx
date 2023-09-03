import AboutUs from "./_components/AboutUs";
import Banner from "./_components/Banner";
import Careers from "./_components/Careers";
import Guides from "./_components/Guides";
import Stats from "./_components/Stats";
import VideoGuide from "./_components/VideoGuide";
import Reviews from "./_components/Reviews";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Stats />
      <Guides />
      <Careers />
      <VideoGuide />
      <Reviews />
    </>
  );
}
