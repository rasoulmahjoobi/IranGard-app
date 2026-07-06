function Review({ name, location, rating, text }) {
  return (
    <div className="review-card">
      <div className="stars">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <p className="review-text">"{text}"</p>

      <div className="review-author">
        <p className="author-name">{name}</p>
        <p className="author-location">{location}</p>
      </div>
    </div>
  );
}

export default Review;