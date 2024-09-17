// "use client"
// // pages/feedback.js

// import { useState } from 'react';

// const sampleReviews = [
//     {
//         id: 1,
//         name: "John Doe",
//         comment: "Great service! The team was professional and completed the project on time.",
//         rating: 5,
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         comment: "Good work overall, but there were some minor issues with communication.",
//         rating: 4,
//     },
//     {
//         id: 3,
//         name: "Mike Johnson",
//         comment: "Excellent craftsmanship. I'm very satisfied with the results.",
//         rating: 5,
//     },
// ];

// export default function Feedback() {
//     const [feedback, setFeedback] = useState('');
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you would typically send the feedback to your server
//         console.log('Feedback submitted:', feedback);
//         setSubmitted(true);
//         setFeedback('');
//     };

//     return (
//         <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto">
//                 <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
//                     Great Think Construction Corp.
//                 </h1>
//                 <div className="bg-white p-8 rounded-lg shadow-md mb-8">
//                     <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
//                         We Value Your Feedback
//                     </h2>
//                     {submitted ? (
//                         <p className="text-green-600 text-center">Thank you for your feedback!</p>
//                     ) : (
//                         <form onSubmit={handleSubmit}>
//                             <textarea
//                                 className="w-full p-2 border border-yellow-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 rows="5"
//                                 value={feedback}
//                                 onChange={(e) => setFeedback(e.target.value)}
//                                 placeholder="Please share your thoughts..."
//                                 required
//                             ></textarea>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
//                             >
//                                 Submit Feedback
//                             </button>
//                         </form>
//                     )}
//                 </div>
//                 <div className="bg-white p-8 rounded-lg shadow-md">
//                     <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
//                         Previous Reviews
//                     </h2>
//                     <div className="space-y-4">
//                         {sampleReviews.map((review) => (
//                             <div key={review.id} className="border-b border-yellow-200 pb-4">
//                                 <div className="flex justify-between items-center mb-2">
//                                     <h3 className="font-semibold text-red-600">{review.name}</h3>
//                                     <div className="text-yellow-500">
//                                         {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
//                                     </div>
//                                 </div>
//                                 <p className="text-gray-700">{review.comment}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page