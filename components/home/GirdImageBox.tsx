import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

interface GirdImageBoxProps {
  icon: StaticImageData;
  title: string;
  body: string;
}

const GirdImageBox: FC<GirdImageBoxProps> = ({ icon, title, body }) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image alt="nextui logo" height={40} src={icon} width={40} />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GirdImageBox;
