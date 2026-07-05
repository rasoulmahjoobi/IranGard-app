import { useState } from "react";
import dalkhani from "../../assets/images/Jangale-Abr-Shahroud.jpg";
import lorstan from "../../assets/images/Lorestan-Railway-1.jpg";
import oshtorankoh from "../../assets/images/oshtorankoh.webp";
import './visuals.css'
function Visuals(){

  const images = [dalkhani, lorstan, oshtorankoh];
  const emojis = ["🌧️", "🛤️", "🗻"];


  const description=["Abr Forest lies on the border between Mazandaran and Semnan provinces. When these forests become covered in a sea of clouds, they create a breathtaking scene that fills anyone who sees it with awe." 
    , " The Lorestan railway, connecting the city of Dorud to Andimeshk, winds through the heart of the tall, majestic peaks of the Central Zagros mountains. Along this route lies untouched and astonishing nature, and traveling through it delivers an unforgettable sense of wonder." 
    , ' Oshtorankooh is a mountain range in eastern Lorestan province, often called the "Alps of Iran" for its striking resemblance to the Alps. With several peaks rising above three thousand meters, stunning scenery, and cool summer weather, it draws countless visitors each year']

  const [currentIndex, setCurrentIndex] = useState(0);

  function goToNext() {
    setCurrentIndex((e) => (e + 1) % images.length);
  }

  function goToPrev() {
    setCurrentIndex((e) => (e - 1+images.length) % images.length);
  }

return(
    <div className="visual-container">
              <div className="visuals-container">
        <button className="visuals-btn prev-btn" onClick={goToPrev}>
          ‹
        </button>

          <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="visuals-image"
        />

        <button className="visuals-btn next-btn" onClick={goToNext}>
          ›
        </button>
      </div>
<div>
  <p className="emoji">
    {emojis[currentIndex]}
  </p>
  <p className="visual-description">
    {description[currentIndex]}
  </p>
</div>

    </div>
)

}
export default Visuals;