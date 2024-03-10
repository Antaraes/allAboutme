"use client";
import { FC, useState } from "react";
import { HeroParallax } from "@/components/ui/HeroParllax";
import { products } from "@/constants/data";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/Animated-tooltip";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full mx-auto h-full overflow-x-hidden items-center justify-start m-auto ">
      <HeroParallax products={products} />
      <div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const variants = {
    initial: { opacity: 0.4, boxShadow: "0 0 0 rgba(0,0,0,0)" },
    animate: () => ({
      opacity: 1,
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      transition: {
        delay: 1,
      },
    }),
  };
  console.log(product.thumbnail.includes("spline"));
  return (
    <div className="h-full my-10 w-full md:w-[60%] mx-5 md:mx-auto ">
      <div className="content flex flex-col gap-5 justify-between ">
        <div>
          <h1 className="bg-gradient-to-r text-3xl font-bold from-blue-200 to-blue-600 inline-block text-transparent bg-clip-text">
            {product.title}
          </h1>
          <h3 className="text-4xl font-bold ">{product.subTitle}</h3>
          <p className="text-[#ced6de]">{product.content}</p>
        </div>

        <div className="flex flex-row  mb-10 w-full">
          <AnimatedTooltip items={product.contributors} />
        </div>
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={variants}
        viewport={{ once: true }}
        className={` pr-5 md:p-10  w-full h-full rounded-3xl flex justify-center items-center  bg-[${product.background}]`}
      >
        {!product.thumbnail.includes("spline") ? (
          <Image
            alt="Card background"
            className="object-cover "
            src={product.thumbnail}
            height={600}
            width={800}
          />
        ) : (
          <Spline scene="https://prod.spline.design/KyanK0mzRR7mzCZt/scene.splinecode" />
        )}
      </motion.div>
    </div>
  );
};

export default Page;
