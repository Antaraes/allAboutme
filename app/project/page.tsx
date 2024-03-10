"use client";
import { FC, Suspense, useState, lazy } from "react";
import Title from "@/components/Title";
import { HeroParallax } from "@/components/ui/HeroParllax";
import { products } from "@/constants/data";
import { Spinner } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full mx-auto h-auto overflow-x-hidden  items-center justify-start  m-auto pb-5">
      <HeroParallax products={products} />
      <div className="h-full w-full">
        <Spline scene="https://prod.spline.design/KyanK0mzRR7mzCZt/scene.splinecode" />
      </div>
    </div>
  );
};

export default Page;
