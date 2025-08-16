import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - PakIndiaWar.com | Pak VS India war 2025',
  description: 'Learn about PakIndiaWar.com’s mission to share stories and insights into the ongoing and past conflicts between Pakistan and India.',
  keywords: ['PakIndiaWar', 'About Us', 'Pakistan India conflict', 'peace efforts', 'family separation'],

  alternates: {
  canonical: 'https://www.pakindiawar.com/about',
},
};
const AboutUs = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-green-600">About Us</h1>
      <p>
        Welcome to <strong>PakIndiaWar.com</strong>! Our website shares the history of the ongoing and past conflicts between Pakistan and India. We focus on the real stories of people affected by wars, political tensions, and family separations. We also write about the efforts made towards peace and unity between these two nations.
      </p>
      <p>
        Our mission is to inform people about the human side of these conflicts, to highlight the struggles of individuals, families, and communities during such times of distress. The purpose of this site is not to take sides or encourage hatred. Instead, we aim to foster understanding, compassion, and hope.
      </p>
      <h2 className="text-2xl font-semibold mt-6">What We Believe</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Peace is the ultimate goal.</li>
        <li>Families should never be separated due to political conflicts.</li>
        <li>Both nations have shared experiences and can learn from each other’s history.</li>
        <li>Real-life stories from both sides can help break barriers and bring healing.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Our Work</h2>
      <p>
        At <strong>PakIndiaWar.com</strong>, we work hard to research, write, and present stories, articles, and information that are easy to understand. We ensure that our articles are fact-based, respectful, and empathetic. We welcome anyone who wants to contribute or collaborate with us in sharing the truth.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Our Team</h2>
      <p>
        We are a team of writers, researchers, and passionate individuals dedicated to telling the stories that matter. While our website may appear small, our vision is big — to spread love and knowledge across borders, one story at a time.
      </p>
      <p>
        Thank you for visiting <strong>PakIndiaWar.com</strong>. Together, let’s promote peace, healing, and understanding in our world.
      </p>
    </div>
  );
};

export default AboutUs;
