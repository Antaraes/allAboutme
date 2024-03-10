import { Spinner } from "@nextui-org/react";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
