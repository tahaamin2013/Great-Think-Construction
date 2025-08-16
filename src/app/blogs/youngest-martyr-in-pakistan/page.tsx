import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Sad Story of a Child– The Youngest Martyr ",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/youngest-martyr-in-pakistan",
  },
  description:
    "Read the heartbreaking story of Ali, an 8-year-old boy from Jhelum, Pakistan, who became the first young martyr in a tragic explosion.",
  keywords: "Youngest martyr in Pakistan, Pakistan child martyr, Jhelum explosion, India Pakistan war 2025, child victim, war effects on children",
  openGraph: {
    title: "A Sad Story of a Child– The Youngest Martyr in Pakistan",
    description:
      "Read the heartbreaking story of Ali, an 8-year-old boy from Jhelum, Pakistan, who became the first young martyr in a tragic explosion.",
    type: "article",
    publishedTime: "2025-05-07T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="a-sad-story-of-a-pakistani-child" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">A Sad Story of a Pakistani Child Becoming the First Martyr</h2>
    <p style="font-size: 1rem; line-height: 1.6;">A very sad incident happened in Pakistan. A young child, only 4 years old, became the first martyr. His name was Ali. He was standing near his home in a small village when the accident took place. Ali was playing outside with his friends. His parents, Mr. Ahmed (his father) and Mrs. Sana (his mother), were also with him at the time.</p>

    <h2 id="the-tragic-event-in-jhelum" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">The Tragic Event in Jhelum</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Ali, his father, and his mother were all in the village of Jhelum, which is in Pakistan. The family was enjoying a peaceful afternoon when suddenly a terrible thing happened. There was an explosion nearby, and the blast was so strong that it hurt them badly. Ali, unfortunately, lost his life in this tragic incident. His mother and father were badly injured. They were rushed to the hospital for treatment.</p>

    <h2 id="reaction-of-the-village" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Reaction of the Village</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The people in the village were very shocked and sad when they heard about the incident. Ali’s parents are still in the hospital, and they are getting better, but they are very sad and heartbroken because of their loss.</p>

    <h2 id="who-was-ali" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Who Was Ali?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Ali was very young, only 4 years old. He loved playing cricket and running around with his friends. He always smiled and brought happiness to his family and neighbors. His parents, Mr. Ahmed and Mrs. Sana, are in their late 30s. They are known to be kind and caring people in their community.</p>

    <h2 id="the-impact-of-his-loss" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">The Impact of His Loss</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The whole village is mourning this loss, and everyone is praying for the speedy recovery of Ali’s parents. People from nearby areas also came to show their support. This sad event has made many people in Pakistan feel very sad and worried.</p>

    <h2 id="connection-to-the-war" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Connection to the War</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Ali's story has touched the hearts of many. He will always be remembered by his family, friends, and the people in his village. Everyone is hoping for peace and safety for the people of Pakistan.</p>
    <p style="font-size: 1rem; line-height: 1.6;">The incident has led to conversations about the ongoing India Pakistan war, especially the war of India and Pakistan 2025, and the tension between the India and Pakistan news is only growing. Many wonder how such tragedies affect the lives of innocent children like Ali, whose life was cut short by the violence surrounding the war of India and Pakistan. India Pakistan relations remain a key issue in the region, and such incidents only make it worse.</p>

    <h2 id="concerns-for-the-future" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Concerns for the Future</h2>
    <p style="font-size: 1rem; line-height: 1.6;">People are increasingly concerned about the potential for further escalation, with talk of the India and Pakistan war continuing to dominate the headlines. Despite this, the focus remains on the innocent lives lost, such as Ali's, which highlights the tragic impact of the pk vs India war. As the world watches, the India-Pakistan 2025 scenario becomes more uncertain, with no resolution in sight. The effects of the pk vs India war today and the fear surrounding the India vs Pak war today are tangible, leaving many people, like Ali’s family, to cope with unimaginable loss.</p>

    <h2 id="call-for-peace" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Call for Peace</h2>
    <p style="font-size: 1rem; line-height: 1.6;">As the Indian Army and Pakistan Army continue their operations, many are questioning whether peace will ever come between the two nations. The events in Jhelum are a stark reminder of the innocent victims caught in the middle of such conflicts.</p>
  `;

  return (
    <>
      <Blog
        title="A Sad Story of a Child– The Youngest Martyr in Pakistan"
        description="Read the heartbreaking story of Ali, an 8-year-old boy from Jhelum, Pakistan, who became the first young martyr in a tragic explosion. His story has touched hearts across the nation."
        tableOfContents={[
          "a-sad-story-of-a-pakistani-child",
          "the-tragic-event-in-jhelum",
          "reaction-of-the-village",
          "who-was-ali",
          "the-impact-of-his-loss",
          "connection-to-the-war",
          "concerns-for-the-future",
          "call-for-peace"
        ]}
        publishDate="May 7, 2025"
        readTime="3 min read"
        photo="/assets/ali-thumbnai.jpeg"
        content={blogContent}
      />
    </>
  );
}
