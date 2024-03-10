"use client";
import { useTheme } from "@/components/context/ThemeContext";
import { LampDemo } from "@/components/ui/Lamp";
import { FC, useEffect } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    if (theme !== "dark") {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    if (theme !== "dark") {
      setTheme("dark");
    }
  }, [theme]);
  return (
    <div>
      <LampDemo />
    </div>
  );
};

export default Page;
