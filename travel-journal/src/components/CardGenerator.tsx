import uuid from "react-uuid";
import { data } from "../data";
import Card from "./Card";

/* map out all the cards and build them */
export default function CardGenerator(): JSX.Element[] {
  return data.map((e) => (
    <Card
      alt={e.alt}
      country={e.country}
      date={e.date}
      description={e.description}
      imgSrc={e.imgSrc}
      key={uuid()}
      location={e.location}
      locationUrl={e.locationUrl}
    />
  ));
}
