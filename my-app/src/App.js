import "./App.css";
import Heading from "./component/heading-subheading/heading";
import SubheadingHero from "./component/heading-subheading/subheading-hero";
import Visuals from "./component/visuals/visuals";
import OfferCta from "./component/offer-cta/offer-cta";
import SocialProof1 from "./component/social-proof1/social-proof1";
import SocialProof2 from "./component/social-proof2/social-proof2";

function App() {
  return (
    <div>
      <Heading />
      <SubheadingHero />
      <div className="visuals-offerCta">
        <OfferCta />
        <Visuals />
      </div>
      <SocialProof1 />
      <SocialProof2 />
    </div>
  );
}

export default App;
