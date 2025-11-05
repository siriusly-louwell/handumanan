import { Link } from "react-router-dom";
import type { Place } from "../../services/types";

export default function PlaceCard({ title, name, image, description }: Place) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-fine text-gray-700 shadow-none item grid gap-2 sm:grid-cols-2">
      <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
        <Link to="/spots" state={{ name: name }}>
          <img
            src={image}
            alt="Autodesk looks to future of 3D printing with Project"
            className="h-full object-cover cursor-pointer"
          />
        </Link>
      </div>
      <div className="p-6 px-2 sm:pr-6 sm:pl-4">
        <Link
          to="/spots"
          state={{ place: name }}
          className="block antialiased tracking-normal font-poppins text-xl font-semibold leading-snug text-forest hover:underline hover:text-primary mb-2 normal-case transition-colors">
          {title}
        </Link>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}
