import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PakIndiaWar.com | Pak VS India war 2025',
  description: 'Simple Privacy Policy of PakIndiaWar.com. See how we protect your info.',
  keywords: ['PakIndiaWar', 'Privacy', 'easy words', 'cookies', 'safe'],
  alternates: {
    canonical: 'https://www.pakindiawar.com/policy',
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Privacy Policy</h1>

      <p>
        Welcome to <strong>PakIndiaWar.com</strong>. We care about your privacy. This means we want to keep your information safe.
      </p>

      <p>
        We do not ask for your personal details like name, address, or email unless you give them to us yourself. We do not sell your information. We do not give it to other people.
      </p>

      <h2 className="text-2xl font-semibold mt-6">What We Collect</h2>
      <p>
        We may collect very basic information like what device you are using or which pages you visit. This helps us make our website better for you. But we do not collect your name, phone number, or email unless you choose to send it.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
      <p>
        Our website uses cookies. Cookies are small files saved in your browser. They help us understand what you do on our website. You can turn off cookies in your browser settings if you don’t want them.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Why We Use Tools</h2>
      <p>
        We use tools like Google Analytics. These tools help us count how many people visit our site and what they look at. These tools do not know who you are. They do not take your name or contact info.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Links to Other Websites</h2>
      <p>
        Sometimes we share links to other websites. We do not control those websites. Please check their privacy rules before using them. We are not responsible for their actions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Your Choices</h2>
      <p>
        You can choose not to use cookies. You can also leave the website anytime. It is your choice. We want you to feel safe.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Changes to This Page</h2>
      <p>
        We may update this Privacy Policy in the future. If we do, we will change the date and let you know. Please check this page from time to time.
      </p>

      <h2 className="text-2xl font-semibold mt-6">You Agree</h2>
      <p>
        By using <strong>PakIndiaWar.com</strong>, you agree to follow this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p>
        If you have any questions, email us at <strong>contact@pakindiawar.com</strong>. We are happy to help.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
