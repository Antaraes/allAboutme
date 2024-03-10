import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import {
  FC,
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

interface ProjectPreViewProps {
  title: string;
  body: string;
  preImg: StaticImageData | string;
  tabs: string[];
}

const ProjectPreView: FC<ProjectPreViewProps> = ({ preImg, title, body, tabs }) => {
  return (
    <div className="py-4 bg-transparent min-w-[40%] flex flex-col justify-center items-center">
      <div className="pb-0 pt-2  w-[70%] flex justify-between items-start">
        <div>
          <h4 className="font-bold text-large">{title}</h4>
          <small className="text-default-500">
            {tabs.map(
              (
                tab:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined,
                index: Key | null | undefined
              ) => (
                <Chip key={index} color="default" className="mx-2" variant="bordered">
                  {tab}
                </Chip>
              )
            )}
          </small>
        </div>
        <Button
          color="success"
          className="hover:bg-success-300 hover:text-white"
          variant="bordered"
          as={Link}
          href=""
        >
          Go
        </Button>
      </div>
      <div className=" py-2 px-4     ">
        <Image
          alt="Card background"
          className="object-cover  rounded-xl"
          src={preImg}
          width={500}
        />
      </div>
    </div>
  );
};

export default ProjectPreView;
