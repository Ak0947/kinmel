import React, { useState } from 'react';

const CustomerReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      text: 'This is a great product! I would definitely recommend it to others.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      text: 'I had some issues with the product, but the customer support was excellent in helping me resolve them.',
      rating: 4,
    },
  ]);

  const addReview = (name, text, rating) => {
    setReviews([...reviews, { name, text, rating }]);
  };

  return (
    <div>
      <h1>Customer Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index}>
          <h2>{review.name}</h2>
          <p>{review.text}</p>
          <p>Rating: {review.rating}/5</p>
        </div>
      ))}
      <hr />
      <h2>Add a Review</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addReview(e.target.name.value, e.target.text.value, e.target.rating.value);
        }}
      >
        <input type="text" name="name" placeholder="Your Name" />
        <textarea name="text" placeholder="Your Review"></textarea>
        <input type="number" name="rating" min="1" max="5" placeholder="Your Rating (1-5)" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerReviewPage;
