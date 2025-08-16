// src/components/ShareButtons.tsx
"use client";

import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';

interface ShareButtonsProps {
  orientation?: 'vertical' | 'horizontal';
}

const ShareButtons: FC<ShareButtonsProps> = ({ orientation = 'vertical' }) => {
  const containerClasses = orientation === 'vertical' 
    ? 'flex flex-col space-y-4' 
    : 'flex space-x-4';

  const buttonClasses = 'h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center text-gray-700 hover:text-indigo-600';

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = document.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
  };

  return (
    <div className={containerClasses}>
      <button onClick={() => handleShare('facebook')} className={buttonClasses} aria-label="Share on Facebook">
        <FaFacebookF />
      </button>
      <button onClick={() => handleShare('twitter')} className={buttonClasses} aria-label="Share on Twitter">
        <FaTwitter />
      </button>
      <button onClick={() => handleShare('linkedin')} className={buttonClasses} aria-label="Share on LinkedIn">
        <FaLinkedinIn />
      </button>
      <button onClick={() => handleShare('copy')} className={buttonClasses} aria-label="Copy link">
        <FaLink />
      </button>
    </div>
  );
};

export default ShareButtons;