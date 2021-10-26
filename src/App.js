import Index from "./components/header/Index";
import CarouselSlider from "./components/carouusel_slider/Carousel_Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/css-body/body.css";
import Body from "./components/main_body/body";
import ContactUs from "./components/contact_us_section/ContactUs";
import Footer from "./components/footer_section/Footer";

function App() {
  return (
    <div className="App">
      <Index />
      <CarouselSlider />
      <Body />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
