import { FC } from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import currentProject from "@/assets/images/current.jpg";
import playerMusic from "@/assets/images/playerMusic.png";
import Announce from "@/assets/images/announcet.png";
import Image from "next/image";
import PlayerMusic from "../MusicPlayer/PlayerMusic";
interface TrendingCardsProps {}

const TrendingCards: FC<TrendingCardsProps> = ({}) => {
  return (
    <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 ">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={currentProject}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
          <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={currentProject}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
          <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={currentProject}
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4>
        </CardHeader>
        <Image
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={Announce}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-full flex items-center justify-center col-span-12 sm:col-span-7"
      >
        <PlayerMusic />
      </Card>
    </div>
  );
};

export default TrendingCards;
