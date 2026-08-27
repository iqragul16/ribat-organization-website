import Navbar from "../components/Navbar";
import ReligiousHero from "../Components/ReligiousHero";
import ExploreBooks from "../Components/ExploreBooks";
import AboutSection from "../Components/AboutSection";
import Nextvideosection from "../Components/Nextvideosection";
import Books2 from "../Components/Books2";
import Partners from "../Components/Partners";
import InstagramSection from "../Components/InstagramSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ReligiousHero />
       <ExploreBooks/> 
      <AboutSection/> 
      <Nextvideosection/>
      <Books2/>
      <Partners/>
      <InstagramSection/>
      <Footer/>
      <main>
        
        {/* Home page ka baqi content yahan ayega */}
      </main>
    </>
  );
}