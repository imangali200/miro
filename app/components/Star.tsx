import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  rating: number; 
}

const StarRating: React.FC<RatingProps> = ({ rating }) => {
  const totalStars = 5; 

  return (
    <div style={{ display: 'flex', gap: '4px', color: '#ff9800' }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return <Star key={index} fill="currentColor" />;
        } 
        else if (rating > starValue - 1 && rating < starValue) {
          return <StarHalf key={index} fill="currentColor" />;
        } 
        else {
          return <Star key={index} fill="none" />;
        }
      })}
    </div>
  );
};

export default StarRating;