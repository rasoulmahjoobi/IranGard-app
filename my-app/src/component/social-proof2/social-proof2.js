import { useState } from "react";
import Review from "./review-card";
import "./social-proof2.css";

function SocialProof2() {
  const reviews = [
    {
      name: "Sara Ahmadi",
      location: "Tehran, Iran",
      rating: 5,
      text: "An absolutely incredible experience! The guides at Abr Forest knew every trail like the back of their hand.",
    },
    {
      name: "David Miller",
      location: "London, UK",
      rating: 5,
      text: "I've traveled to over 30 countries, and the Lorestan railway tour is still one of the most breathtaking journeys I've ever taken.",
    },
    {
      name: "Leila Karimi",
      location: "Shiraz, Iran",
      rating: 4,
      text: "Oshtorankooh exceeded all my expectations. The views from the peak were unreal.",
    },
    {
      name: "Marco Rossi",
      location: "Milan, Italy",
      rating: 5,
      text: "Booking was simple, communication was clear, and the tour itself was unforgettable.",
    },
    {
      name: "Niloofar Rezaei",
      location: "Isfahan, Iran",
      rating: 5,
      text: "The local guides shared so much history and culture along the way.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function goToNext() {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }

  function goToPrev() {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className="social-proof2-container">
      <h2 className="reviews-title">What Our Travelers Say</h2>

      <div className="review-card-wrapper">
        <button className="review-btn prev-btn" onClick={goToPrev}>
          ‹
        </button>

        <Review
          name={currentReview.name}
          location={currentReview.location}
          rating={currentReview.rating}
          text={currentReview.text}
        />

        <button className="review-btn next-btn" onClick={goToNext}>
          ›
        </button>
      </div>

      <div className="review-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active-dot" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SocialProof2;
