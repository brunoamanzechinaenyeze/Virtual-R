import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Price from "./Components/Price";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection />
        <FeatureSection />
        <Workflow />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
