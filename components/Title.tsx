"use client";
import { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <h1 className={`font-bold text-6xl text-center tracking-wide `}>{title}</h1>;
};

export default Title;
