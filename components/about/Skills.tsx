"use client";
import { skillsData } from "@/constants/data";
import { FC } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

interface SkillsProps {}

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
interface SkillProps {
  item: {
    title: string;
    icon: string;
  };
  index: number;
}
interface CardSkillsProps {
  title: string;
  skills: {
    title: string;
    icon: string;
  }[];
}
const CardSkills: React.FC<CardSkillsProps> = ({ title, skills }) => (
  <div className="card card-side p-10 bg-base-200 shadow-xl w-full h-auto flex flex-col">
    <h2 className="text-center">{title}</h2>
    <ul className="flex flex-wrap gap-2 justify-center text-xs md:text-base text-text dark:text-darkText ">
      {skills.map((item, index) => (
        <motion.li
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="bg-background flex justify-center items-center gap-2 dark:bg-darkBackground border dark:border-white border-black rounded-xl px-5 py-3 "
        >
          <Icon icon={item.icon} className=" text-xl" />
          {item.title}
        </motion.li>
      ))}
    </ul>
  </div>
);
const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section className="mb-28 w-90% mx-auto h-auto mt-10 scroll-mt-28 text-center sm:mb-40 ">
      <div className="md:grid grid-cols-2 gap-5 flex flex-col  ">
        <CardSkills title="Frontend" skills={skillsData.frontend} />
        <CardSkills title="Backend" skills={skillsData.backend} />
        <CardSkills title="Other Skills" skills={skillsData.SocialDesign} />
        <CardSkills title="Hobbies" skills={skillsData.Hobbies} />
      </div>
    </section>
  );
};

export default Skills;
