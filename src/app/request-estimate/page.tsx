"use client";

import React, { useState } from "react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EstimatePage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set()
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleService = (serviceName: string) => {
    const newSelectedServices = new Set(selectedServices);
    if (newSelectedServices.has(serviceName)) {
      newSelectedServices.delete(serviceName);
    } else {
      newSelectedServices.add(serviceName);
    }
    setSelectedServices(newSelectedServices);
  };

  const toggleCategory = (categoryName: string) => {
    const newExpandedCategories = new Set(expandedCategories);
    if (newExpandedCategories.has(categoryName)) {
      newExpandedCategories.delete(categoryName);
    } else {
      newExpandedCategories.add(categoryName);
    }
    setExpandedCategories(newExpandedCategories);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-700 py-10 px-8">
          <h1 className="text-4xl font-bold text-white">
            Great Think Construction Company
          </h1>
          <p className="mt-2 text-yellow-100 text-xl">Service Estimate</p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section: What to Expect */}
          <div className="w-full lg:w-1/3 p-8 bg-gray-50">
            <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Thank you for choosing Great Think Construction for your
                  residential and commercial construction needs. We value your
                  time and commitment to enhancing your living or working space.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
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
                    <strong>Convenient Scheduling:</strong> After filling out the form, click the yellow button to schedule an appointment at your convenience.
                  </li>
                  <li>
                    <strong>Transparent Communication:</strong> We are committed
                    to open and transparent communication.
                  </li>
                </ol>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any urgent questions or cannot find a suitable
                  time, please reach out to us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-2 text-yellow-600" />
                    <span className="text-gray-700 font-semibold">
                      +1(718) 666-9256
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="w-5 h-5 mr-2 text-yellow-600" />
                    <span className="text-gray-700 font-semibold">
                      info@greatthink.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-yellow-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="text-gray-700 font-semibold">
                      +1(718) 666-9256
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section: Estimate Form */}
          <div className="w-full lg:w-2/3 p-8">
            <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Client Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Client Name"
                    className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  <Input
                    placeholder="Client Address"
                    className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  <Input
                    placeholder="Client Phone"
                    className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  <Input
                    placeholder="Client Email"
                    className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="mb-4 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                  rows={11}
                  placeholder="Project Description"
                />
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Terms and Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>
                    This estimate is valid for 30 days from the date of issue.
                  </li>
                  <li>
                    A 50% deposit is required to begin work, with the balance
                    due upon completion.
                  </li>
                  <li>
                    Any changes to the scope of work may result in additional
                    charges.
                  </li>
                  <li>
                    Great Think Construction Company guarantees all workmanship
                    for a period of [X] years.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="mt-8 flex justify-end">
              <Button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-200 text-lg font-semibold shadow-md hover:shadow-lg">
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatePage;
