"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const EstimatePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/requestEstimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          //   message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          message: `${formData.message}`,
          address: `${formData.address}`,
          phone: `${formData.phone}`,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          address: "",
          phone: "",
        });
      } else {
        const result = await response.json();
        alert(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-700 py-6 px-4 sm:py-10 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Great Think Construction Company
          </h1>
          <p className="mt-2 text-yellow-100 text-lg sm:text-xl">
            Service Estimate
          </p>
        </div>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-green-100 mx-4 sm:mx-8 my-6">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-semibold text-green-800">
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 mb-4">
              If you have any urgent questions or cannot find a suitable time,
              please reach out to us:
            </p>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center text-base sm:text-lg flex-wrap">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-green-600" />
                <span className="text-green-700 font-semibold">
                  +1(718) 666-9256
                </span>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 text-green-600" />
                <span className="text-green-700 font-semibold">
                  greatthinkc@gmail.com
                </span>
              </div>
              <Link href='tel:+17186669256' className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-green-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-green-700 font-semibold">
                  +1(718) 666-9256
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section: What to Expect */}
          <div className="w-full lg:w-1/3 p-4 sm:p-8 bg-blue-50">
            <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-blue-100">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-blue-800">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Thank you for choosing Great Think Construction for your
                  residential and commercial construction needs. We value your
                  time and commitment to enhancing your living or working space.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-blue-600">
                  <li>
                    <strong>Detailed Information Gathering:</strong> Your
                    responses will help us understand your project requirements
                    in detail.
                  </li>
                  <li>
                    <strong>Tailored Solutions:</strong> Our team will review
                    your questionnaire and prepare a customized plan for your
                    project.
                  </li>
                  <li>
                    <strong>Convenient Scheduling:</strong> After filling out
                    the form, click the yellow button to schedule an appointment
                    at your convenience.
                  </li>
                  <li>
                    <strong>Transparent Communication:</strong> We are committed
                    to open and transparent communication.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Right Section: Estimate Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 p-4 sm:p-8 bg-amber-50"
          >
            <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-amber-100">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-amber-800">
                  Client Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    id="name"
                    placeholder="Client Name"
                    className="border-amber-300 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    id="address"
                    placeholder="Client Address"
                    className="border-amber-300 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <Input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    id="phone"
                    placeholder="Client Phone"
                    className="border-amber-300 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    id="email"
                    type="email"
                    placeholder="Client Email"
                    className="border-amber-300 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-amber-100">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-amber-800">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="message"
                  className="mb-4 border-amber-300 focus:ring-amber-500 focus:border-amber-500"
                  rows={8}
                  placeholder="Project Description"
                />
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                className="bg-amber-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Request Estimate
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EstimatePage;
