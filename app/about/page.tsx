"use client";
import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import { FC, Suspense } from "react";
import Title from "@/components/Title";
import { Spinner } from "@nextui-org/react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="w-[90%] mx-auto h-auto overflow-x-hidden  items-center justify-center  m-auto pb-5">
        <Title title="About My Self" />
        <Skills />
        <Experience />
      </div>
    </Suspense>
  );
};

export default page;
