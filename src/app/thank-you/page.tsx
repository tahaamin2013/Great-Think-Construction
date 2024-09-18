import React from 'react';
import Link from 'next/link';

const ThankYou = () => {
    return (
        <div className='px-4 my-[100px]'>
            <div className="bg-white w-full sm:w-[500px] my-10 rounded-3xl font-sans flex flex-col items-center justify-center shadow-2xl overflow-hidden max-w-6xl mx-auto p-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Thank You!</h1>
                <p className="text-xl text-gray-600 mb-8">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                <Link href="/" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;