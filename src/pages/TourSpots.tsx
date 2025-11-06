import { PLACES, SPOTS } from "../services/data";
import SpotCard from "../components/cards/SpotCard";
import { useLocation } from "react-router-dom";
import type { ValidPathname } from "../services/types";

export default function TourSpots() {
  const { pathname } = useLocation();

  const currentPath = pathname.slice(1).toLowerCase() as ValidPathname;

  function getTitle() {
    const place = PLACES.filter((place) => place.name === currentPath);
    return place[0].title;
  }

  return (
    <section className="py-10 px-40">
      <div className="container mx-auto mb-24 text-center">
        <h2 className="block antialiased tracking-normal font-poppins text-4xl font-semibold leading-[1.3] text-accent mb-2 !text-3xl lg:!text-4xl">
          {getTitle()}
        </h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto max-w-full !text-course">
          {SPOTS[currentPath].context}
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
        {SPOTS[currentPath].spot.map((spot, i) => (
          <SpotCard
            key={i}
            name={spot.name}
            place={currentPath}
            label={spot.label}
            image={spot.image}
            content={spot.content}
            subheader={spot.subheader}
          />
        ))}
      </div>
    </section>
  );
}
