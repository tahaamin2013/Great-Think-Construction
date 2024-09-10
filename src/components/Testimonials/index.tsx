import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactUsBanner from '../Contactus Banner';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Homeowner",
    comment: "Great Think Construction transformed our house into a dream home. Their attention to detail is unmatched!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Owner",
    comment: "We hired Great Think for our office renovation. They completed the project on time and within budget. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Architect",
    comment: "As an architect, I appreciate Great Think's commitment to quality and innovation. They bring designs to life beautifully.",
    rating: 5,
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="relative">
    <ContactUsBanner />
    <div className="py-32 pt-48 px-4 mt-64 sm:px-6 lg:px-24 bg-white rounded-3xl">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          What Our Clients Say
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className='sm:basis-1/2 basis-[100%]'>
                <div className="bg-white shadow-lg rounded-3xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-red-500 fill-red-500' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                  <hr className='mb-2' />
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='sm:-left-12 left-1 !bg-yellow-400 text-black w-10 h-10' />
          <CarouselNext className='sm:-right-12 right-1 !bg-yellow-400 text-black w-10 h-10' />
        </Carousel>
      </div>
      </div>
  );
};

export default TestimonialsCarousel;