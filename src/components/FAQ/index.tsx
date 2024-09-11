"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the different types of construction projects?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    question: "What are the main phases of a construction project?",
    answer:
      "The main phases typically include planning, design, pre-construction, construction, and post-construction. Each phase is crucial for the successful completion of the project.",
  },
  {
    question: "How do I choose the right contractor for my project?",
    answer:
      "Consider factors such as experience, references, licensing, insurance, and communication skills when selecting a contractor. It's also important to get multiple bids and thoroughly review contracts before making a decision.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <div className="bg-zinc-900 my-5 text-white p-6 md:p-12 rounded-3xl flex md:flex-row flex-col gap-8 md:gap-12">
      <motion.div
        className="rounded-2xl h-96 w-full md:w-1/2 overflow-hidden relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/faqSectionImage.jpg"
          alt="Construction workers"
          // width={450}
          // height={430}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl object-cover object-center"
        />
      </motion.div>

      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <span className="bg-yellow-500 text-black text-xs font-bold py-1 px-3 rounded-full">
            FAQ
          </span>
        </div>
        {/* More Energetic Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
          Got Questions? We&apos;ve Got Answers!
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 border-none"
            >
              <AccordionTrigger className="hover:no-underline bg-zinc-800 hover:bg-yellow-500 hover:text-black rounded-xl px-4 md:px-6 py-3 md:py-4 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="mt-2 px-4 md:px-6 py-3 md:py-4 bg-zinc-800 rounded-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
