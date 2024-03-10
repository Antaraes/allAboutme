import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { app_development } from "@/assets/icons";
import GirdImageBox from "@/components/home/GirdImageBox";
import human from "@/assets/images/human.jpg";
import ContributionsTable from "@/components/Contributions";
import ProjectPreView from "@/components/home/ProjectPreView";
import TrendingCards from "@/components/home/TrendingCards";
import ProjectPreImage from "@/assets/images/projectPre.jpeg";
import { Card, CardHeader, Spinner } from "@nextui-org/react";
import { Customicons } from "@/layout/Navbar";
import * as icons from "@/assets/icons";
import { Suspense } from "react";
import { products } from "@/constants/data";

export default function Home() {
  return (
    <main className="md:px-8 px-2 ">
      <section className=" md:flex h-auto overflow-x-hidden  items-center justify-center w-full m-auto pb-5 mb-10">
        <div className="w-full md:w-full flex flex-col items-start ">
          <Card className="col-span-12 sm:col-span-4 w-full h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-center">
              <h4 className="mb-3 font-bold text-text  md:text-5xl lg:text-6xl">Hi, my name is</h4>
              <h4 className="mb-3 font-bold  text-darkText  md:text-5xl lg:text-6xl">
                Min Bhone Thant
              </h4>
              <div className="flex items-center justify-center w-full mx-auto mt-2  gap-10">
                <a
                  href="./Resume.pdf"
                  download={"Resume.pdf"}
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 dark:text-darkText transition-colors duration-300 ease-out border-2 border-gray-900 dark:border-gray-50 rounded-lg group-hover:text-white group-hover:dark:text-text">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-darkBackground"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-background group-hover:-rotate-180 ease"></span>
                    <span className="relative">Resume</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-darkPrimary rounded-lg group-hover:mb-0 group-hover:mr-0 dark:opacity-35"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
                <Link
                  href="mailto:minbhonethantajm@gmail.com"
                  target={"_black"}
                  download={true}
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 dark:text-darkText transition-colors duration-300 ease-out border-2 border-gray-900 dark:border-gray-50 rounded-lg group-hover:text-white group-hover:dark:text-text">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-darkBackground"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-background group-hover:-rotate-180 ease"></span>
                    <span className="relative">Get In Touch</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-darkPrimary rounded-lg group-hover:mb-0 group-hover:mr-0 dark:opacity-35"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              </div>
              <div className="flex mt-10 md:hidden ">
                <Customicons
                  href="https://www.instagram.com/min_bhone_thant/"
                  src={icons.instagram}
                />
                <Customicons
                  href="https://www.linkedin.com/in/min-bhone-thant-909b98252/"
                  src={icons.linkedin}
                />
                <Customicons href="https://github.com/Antaraes" src={icons.github} />
                <Customicons
                  href="https://www.youtube.com/@antaresjacxmickynium4640"
                  src={icons.youtube}
                />
                <Customicons href="/" src={icons.twitter} />
                <Customicons href="https://wa.link/7ops1x" src={icons.whatsapp} />
              </div>
            </CardHeader>

            {/* <Video src={banner} autoPlay muted loop playsInline controls={false}></Video> */}

            <Suspense fallback={<Spinner />}>
              <video autoPlay muted loop preload="none">
                <source src="mockup.mp4" type="video/mp4" />
              </video>
            </Suspense>
          </Card>
        </div>
      </section>
      {/* End Header Section  */}
      {/* Start Trending Section  */}
      <section className="w-full">
        <TrendingCards />
      </section>

      {/* End Trending Section  */}

      {/* Start Project Section  */}
      <section className=" m-auto h-auto my-10 ">
        <div className="flex justify-between items-center mb-4">
          <p className="text-center  w-full text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
            Take a look at my recent projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5  ">
          {products.slice(0, 4).map((item: Product) => (
            <ProjectPreView
              key={item.id}
              title={item.title}
              body={item.content}
              preImg={ProjectPreImage}
              tabs={item.tabs}
            />
          ))}
        </div>
      </section>
      {/* End Project Section  */}
      {/* Start Services Section  */}
      <section className="  space-y-5 h-auto gap-4 flex flex-col items-center justify-center dark:text-darkText text-text py-5">
        <p className=" text-center text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
          What Can I do?
        </p>
        <p className="text-center tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, obcaecati!
        </p>
        <div className="grid md:flex  gap-10 ">
          <GirdImageBox icon={app_development} title={"Web development"} body="I can work" />
          <GirdImageBox icon={app_development} title={"Web development"} body="I can work" />
          <GirdImageBox icon={app_development} title={"Web development"} body="I can work" />
        </div>
      </section>
      {/* End Services Section  */}
    </main>
  );
}
