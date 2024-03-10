"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Button, Slider, Tooltip } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOneIcon";
import { ShuffleIcon } from "./Shuffelcon";
import albums from "@/assets/images/albums.jpeg";
import Image from "next/image";
import { PlayCricleIcon } from "./PlayCricleIcon";
import WaveSurfer from "wavesurfer.js";
import { motion, AnimatePresence } from "framer-motion";
import { formatDuration } from "@/utils/formatter";

export default function PlayerMusic() {
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(new Audio("/song1.mp3"));

  useEffect(() => {
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });

    return () => {
      audioRef.current.pause();
    };
  }, []);
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration - audioRef.current.currentTime);
  };
  const handleSeek = (newValue: any) => {
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };
  const handleRepeat = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <AnimatePresence>
      <motion.div>
        <Card isBlurred className="border-none bg-background  max-w-full p-5 " shadow="sm">
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
              <div className="relative col-span-6 md:col-span-4">
                <Image alt="Album cover" className="object-cover" height={200} src={albums} />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <Tooltip
                    showArrow={true}
                    content="Download Song"
                    className="text-black"
                  ></Tooltip>
                </div>
                <audio src="/song1.mp3"></audio>

                <div className="flex flex-col mt-3 gap-1">
                  <Slider
                    aria-label="Music progress"
                    classNames={{
                      track: "bg-default-500/30",
                      thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                    }}
                    color="foreground"
                    value={currentTime}
                    onChange={handleSeek}
                    size="sm"
                  />
                  <div className="flex justify-between">
                    <p className="text-small">{formatDuration(currentTime)}</p>
                    <p className="text-small text-foreground/50">{formatDuration(duration)}</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onClick={handleRepeat}
                  >
                    <RepeatOneIcon width={10} height={10} className="text-foreground/80" />
                  </Button>

                  <Button
                    isIconOnly
                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <PauseCircleIcon width={10} height={10} size={54} />
                    ) : (
                      <PlayCricleIcon width={10} height={10} size={54} />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
