import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - PakIndiaWar.com',
  description: 'Read the Terms and Conditions for using PakIndiaWar.com. Learn about the rules, responsibilities, and policies regarding the use of the website.',
  keywords: ['PakIndiaWar', 'Terms and Conditions', 'website rules', 'Pakistan-India conflict', 'website policies'],
  alternates: {
  canonical: 'https://www.pakindiawar.com/terms-and-conditions',
  }
};
const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-red-600">Terms and Conditions</h1>

      <p>
        By using <strong>PakIndiaWar.com</strong>, you agree to follow the rules and terms mentioned on this page. These terms are very important for the safety, fairness, and good experience of everyone who visits or uses this website.
      </p>

      <p>
        This website is created to share stories, articles, and real-life experiences related to the conflicts and relationships between Pakistan and India. We also write about peace, family separation, history, and other topics that touch peoples hearts. While visiting our website, we want all users to act respectfully and responsibly. Please read all the points below before continuing to use our site.
      </p>

      <h2 className="text-2xl font-semibold mt-6">User Responsibilities</h2>
      <ul className="list-decimal pl-6 space-y-2">
        <li>Do not copy or reproduce our content without asking us first. All text, images, and ideas on this website are protected under copyright.</li>
        <li>Do not write or submit comments that are hateful, abusive, political, or harmful. We do not allow violence or disrespect.</li>
        <li>Be kind to others. We welcome users from all backgrounds and want everyone to feel safe here.</li>
        <li>Do not use our website to spread lies, fake news, or wrong information.</li>
        <li>You are not allowed to hack, damage, or try to break the website in any way.</li>
        <li>Do not pretend to be someone else or provide false information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Website Changes</h2>
      <p>
        We may update or change any part of the website, including these terms and conditions, without giving any personal notice. You should check this page often to make sure you are aware of the most recent terms. If you keep using the website after changes are made, it means you accept the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Use of Information</h2>
      <p>
        All the articles and resources on this website are written in good faith and for educational purposes only. We do our best to make sure everything is correct, but we do not promise 100% accuracy. Any decisions you make based on our content are your own responsibility.
      </p>

      <h2 className="text-2xl font-semibold mt-6">External Links</h2>
      <p>
        Sometimes we may link to other websites. These are not controlled by us, and we are not responsible for anything on those websites. Please read their terms and policies before using them.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Termination</h2>
      <p>
        If you break these rules, we can stop you from using the website without warning. We can also remove any content or comments you make that go against our terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Contact</h2>
      <p>
        If you have questions about these terms or if you think any rule is unfair, please contact us. We will try to listen and make things better. You can email us at: contact@pakindiawar.com
      </p>

      <p>
        Thank you for visiting <strong>PakIndiaWar.com</strong>. We hope this space remains helpful, peaceful, and safe for everyone.
      </p>
    </div>
  );
};

export default TermsAndConditions;