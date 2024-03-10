"use client";
import { experienceData } from "@/constants/data";
import { Icon } from "@iconify/react";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceProps {}
const ExperienceItem = ({ item }: { item: any }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.li
      className="mb-10 ms-6"
      initial="hidden"
      whileInView="animate"
      variants={{
        animate: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.05 * index,
          },
        }),
        hidden: { opacity: 0, y: 50 },
      }}
      viewport={{
        once: true,
      }}
    >
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {item.job}
      </time>
      <p className="font-normal mt-0 " onClick={() => setShowMore(!showMore)}>
        {showMore ? item.description : `${item.description.substring(0, 250)}....`}
        <a onClick={() => setShowMore(!showMore)} className="cursor-pointer">
          {!showMore ? "Read More" : ""}
        </a>
      </p>
    </motion.li>
  );
};
const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section className="h-auto">
      <p className="text-center text-3xl font-semibold leading-normal text-gray-900 mb-10 dark:text-white">
        My Experience
      </p>
      {/* <VerticalTimeline> */}
      <ol className="relative border-s mx-10 border-gray-200 dark:border-gray-700">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </ol>

      {/* </VerticalTimeline> */}
    </section>
  );
};

export default Experience;
