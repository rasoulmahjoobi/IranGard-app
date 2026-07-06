import "./App.css";
import Heading from "./component/heading-subheading/heading";
import SubheadingHero from "./component/heading-subheading/subheading-hero";
import Visuals from "./component/visuals/visuals";
import OfferCta from "./component/offer-cta/offer-cta";
function App() {
  return (
    <div>
      <Heading />
      <SubheadingHero />
      <div className="visuals-offerCta">
        <OfferCta />
        <Visuals />
      </div>
    </div>
  );
}

export default App;
