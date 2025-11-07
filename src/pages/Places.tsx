import PlaceCard from "../components/cards/PlaceCard";
import { PLACES } from "../services/data";

export default function Places() {
  return (
    <section className="grid min-h-screen place-items-center w-full p-8 lg:px-40">
      <div className="container my-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PLACES.map((place, i) => (
          <PlaceCard
            key={i}
            title={place.title}
            video=""
            image={place.image}
            name={place.name}
            description={place.description}
          />
        ))}
      </div>
    </section>
  );
}
