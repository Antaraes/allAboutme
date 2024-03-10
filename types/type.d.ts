interface Product {
  id: number;
  title: string;
  subTitle: string;
  link: string;
  thumbnail: string;
  tabs: string[];
  background: string;
  content: string;
  contributors?: Contributors[];
}

type Contributors = {
  id: number;
  name: string;
  designation: string;
  image: string;
};
