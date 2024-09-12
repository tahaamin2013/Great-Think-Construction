"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    question: "Do you work on both residential and commercial projects?",
    answer:
      "Yes, we have expertise in both residential and commercial construction and renovation projects.",
  },
  {
    question: "Can you handle complete home renovations?",
    answer:
      "Our diverse skill set allows us to manage complete home renovations, from structural work to finishing touches.",
  },
  {
    question: "What types of waterproofing services do you provide?",
    answer:
      "We offer comprehensive waterproofing solutions, including acrylic waterproof coating (Thorocoat), general waterproofing for various surfaces, and sealer applications.",
  },
  {
    question: "Do you offer custom deck building services?",
    answer:
      "Yes, we specialize in custom-built decks for outdoor living spaces, tailored to your specific needs and preferences.",
  },
  {
    question: "Can you repair and restore old brickwork?",
    answer:
      "Certainly! We offer pointing and brick pointing services to restore and repair mortar joints, enhancing the durability and appearance of older brickwork.",
  },
  {
    question: "Do you install gutters and siding?",
    answer:
      "Yes, we provide full gutter and siding installation services to protect and enhance the exterior of your property.",
  },
  {
    question: "Can you create custom walkways and patios?",
    answer:
      "Absolutely! We offer custom design and installation of walkways, steps, and patios using various materials including pavers, tiles, and stones.",
  },
  {
    question: "What type of roofing services do you offer?",
    answer:
      "We provide roofing services for both flat and sloped roofs, including installation, repair, and maintenance.",
  },
  {
    question: "Do you offer any eco-friendly or energy-efficient options?",
    answer:
      "Yes, we can provide eco-friendly options in various areas, such as energy-efficient roofing materials and environmentally friendly paints and sealants. Please ask about our green options for your specific project.",
  },
  {
    question: "How long has Great Think Construction been in business?",
    answer:
      "Great Think Construction has been serving our community for 15 years, building a reputation for quality and reliability.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Great Think Construction is fully licensed and insured. We'd be happy to provide our credentials upon request.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free estimates for all our services. Contact us to schedule an assessment of your project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration varies depending on the scope and complexity of the work. We provide detailed timelines during the estimation process and keep our clients informed throughout the project.",
  },
  {
    question: "Do you offer any warranties on your work?",
    answer:
      "Yes, we stand behind our work. We offer warranties on our services, with specifics varying by project type. We'll provide detailed warranty information for your specific project.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionChange = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <div className="bg-zinc-900 text-white p-6 md:p-12 rounded-3xl flex flex-col-reverse md:flex-row gap-8 md:gap-12 relative">
      <motion.div
        className="rounded-2xl sm:h-96 h-72 w-full md:w-1/2 overflow-hidden relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/faqSectionImage.jpg"
          alt="Construction workers"
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
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
          Got Questions? We&apos;ve Got Answers!
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full overflow-y-scroll max-h-[16rem]"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 border-none"
            >
              <AccordionTrigger
                className={`hover:no-underline bg-zinc-800 hover:bg-yellow-500 hover:text-black rounded-xl px-4 md:px-6 py-3 md:py-4 text-left ${
                  openIndex === index ? "bg-yellow-500 text-black" : ""
                }`}
                onClick={() => handleAccordionChange(index)}
              >
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
