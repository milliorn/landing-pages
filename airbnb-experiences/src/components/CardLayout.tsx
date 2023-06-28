import katie from "../assets/katie-zaferes.webp";
import bike from "../assets/mountain-bike.webp";
import wedding from "../assets/wedding-photography.webp";

import { Card } from "./Card";

/**
 * create the layout for cards
 */
export function CardLayout(): JSX.Element {
  const url = "https://github.com/milliorn" as string;
  return (
    <div className="container px-1 mx-auto my-12 md:px-12">
      <div className="inline gap-1 mx-1 text-sm md:flex md:mx-4">
        <Card
          href={url}
          alt={"katie-zaferes"}
          src={katie}
          price={"136"}
          title="Life lessons with Katie Zaferes"
          country={"USA"}
        />
        <Card
          href={url}
          alt={"wedding-photography"}
          src={wedding}
          price={"125"}
          title="Learn wedding photography"
          country={"Canada"}
        />
        <Card
          href={url}
          alt={"mountain-bike"}
          src={bike}
          price={"50"}
          title="Group Mountain Biking"
          country={"Scotland"}
        />
      </div>
    </div>
  );
}
