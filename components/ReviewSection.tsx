
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

interface ReviewSectionProps {
  reviews: Review[];
  title?: string;
  subtitle?: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, title = "What Clients Say", subtitle = "Testimonials from our valued partners worldwide" }) => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full relative group hover:shadow-xl transition-shadow">
              <Quote className="absolute top-4 right-4 text-indigo-50 opacity-10 group-hover:opacity-100 group-hover:text-indigo-100 transition-all" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < review.rating ? "#fbbf24" : "none"} className="text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm italic leading-relaxed mb-6 flex-grow">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
