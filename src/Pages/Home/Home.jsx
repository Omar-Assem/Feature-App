import CardHeader from "./CardHeader";
import Future from "./Future";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Cards3 from "./Cards-3";
import Carousel from "./Cursle";
import Timer from "./Timer";
import Gallery from "./Gallery";
import HomeProducts from "./HomeProducts";
import Filter from "../../Sides/Filter/Filter";


const Home = () => {
  return (
    <>
    <Filter/>
      <Hero />
      <CardHeader />
      <Future />
      <Cards3 />
      <Testimonials />
      <Carousel />
<HomeProducts/>
      <Timer />
      <Gallery />
      
    </>
  );
};

export default Home;
