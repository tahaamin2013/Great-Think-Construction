import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - PakIndiaWar.com | Pak VS India war 2025',
  description: 'Easy-to-read disclaimer for PakIndiaWar.com. Know what we share, what we don’t promise, and how to contact us.',
  keywords: ['PakIndiaWar', 'Disclaimer', 'easy terms', 'simple words', 'safe reading'],
  alternates: {
    canonical: 'https://www.pakindiawar.com/disclaimer',
  },
};

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">Disclaimer</h1>

      <p>
        Welcome to <strong>PakIndiaWar.com</strong>. This website is for learning and reading only. We share news, stories, and opinions in very easy words. But we cannot promise that everything will always be perfect.
      </p>

      <p>
        Sometimes, there can be small mistakes. We try to fix them fast. But please do not use our website for very big or serious decisions. Always check other trusted sources too.
      </p>

      <p>
        The stories here are written by writers who share their own thoughts. We do not speak for any government, army, or leader. We try to show both sides of the story – Pakistan and India – in a fair and kind way.
      </p>

      <h2 className="text-2xl font-semibold mt-6">No Promises</h2>
      <p>
        We do not promise that everything will always be correct, safe, or always online. If something goes wrong or you feel upset, we are not responsible. Please use this website kindly and carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Other Websites</h2>
      <p>
        Sometimes we give links to other websites to help you learn more. But we do not control those websites. So please read their rules and be careful before clicking or sharing anything there.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Be Respectful</h2>
      <p>
        When you use <strong>PakIndiaWar.com</strong>, please do not post anything rude, hateful, or false in the comments. Let’s keep this place safe and friendly for everyone.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Using This Site</h2>
      <p>
        By using this site, you agree that <strong>PakIndiaWar.com</strong> is not to blame for mistakes or wrong information. We are here to help, not to harm.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p>
        If you have questions or want to talk to us, send an email to <strong>contact@pakindiawar.com</strong>. We are always happy to help.
      </p>
    </div>
  );
};

export default Disclaimer;
