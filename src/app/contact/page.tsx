'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formData.name,
          email: formData.email,
        //   message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          message: `${formData.message}`,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const result = await response.json();
        alert(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };


  return (
    <div className="bg-white my-10 rounded-3xl font-sans flex sm:flex-row flex-col shadow-2xl overflow-hidden max-w-6xl mx-auto">
      <div className='sm:w-[40%] relative h-auto min-h-[30rem] overflow-hidden'>
        <Image 
          alt="Contact Us Image" 
          layout="fill" 
          className='object-cover object-center' 
          src="/contact-Image-2.jpg" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-sm">We&apos;re here to help and answer any question you might have.</p>
        </div>
      </div>
      <div className='sm:w-[60%] p-10 flex flex-col items-start justify-center bg-gradient-to-br from-gray-50 to-white'>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-8'>Need to contact us?</h1>
        
        {/* New section for contact details */}
        <div className="w-full mb-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Our Contact Information</h2>
          <Link href="tel:+17186669256" className="text-gray-600"><strong>Phone:</strong> (718) 666-9256</Link>
          <p className="text-gray-600"><strong>Email:</strong> greatthinkconstruction92@gmail.com</p>
          <p className="text-gray-600"><strong>Address:</strong> 777 East 31st Street, Brooklyn, NY</p>
        </div>
        <form onSubmit={handleSubmit} className='w-full space-y-6'>
          <div>
            <label
            
            htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              id="name" 
              placeholder='David' 
              className="w-full bg-white border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300" 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Contact Email</label>
            <Input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
              id="email" 
              type="email" 
              placeholder='example@gmail.com' 
              className="w-full bg-white border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300" 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              id="message" 
              placeholder='Your Message' 
              className="w-full h-32 bg-white border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300" 
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
