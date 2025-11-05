import { SPOTS } from "../services/data";
import SpotCard from "../components/cards/SpotCard";
import { useLocation } from "react-router-dom";
import type { LocationState } from "../services/types";

export default function TourSpots() {
  const { state } = useLocation() as { state: LocationState };

  return (
    <section className="py-10 px-40">
      <div className="container mx-auto mb-24 text-center">
        <h2 className="block antialiased tracking-normal font-poppins text-4xl font-semibold leading-[1.3] text-accent mb-2 !text-3xl lg:!text-4xl">
          Learn more about Philippines
        </h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto max-w-xl !text-course">
          An arrangement you make to have a hotel room, tickets, etc. at a
          particular time in the future.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
        {SPOTS[state.place].spot.map((spot, i) => (
          <SpotCard
            key={i}
            name={spot.name}
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
