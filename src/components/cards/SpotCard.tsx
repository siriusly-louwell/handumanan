import { Link } from "react-router-dom";
import type { Spot } from "../../services/types";

export default function SpotCard({
  label,
  name,
  place,
  content,
  image,
  subheader,
}: Spot) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-fine text-gray-700 shadow-md">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 text-left">
        <div className="flex items-center gap-2">
          <p className="block antialiased font-sans text-sm font-medium leading-normal text-blue-500 mb-2 font-normal !text-gray-400">
            {subheader}
          </p>
        </div>
        <Link
          to="/read"
          state={{ name: name, place: place }}
          className="block font-poppins text-xl font-semibold text-forest mb-2">
          {label}
        </Link>
        <p className="block antialiased font-poppins font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-400">
          {content}
        </p>
        <Link to="/read" state={{ name: name, place: place }}>
          <button
            className="font-bold text-center uppercase hover:!bg-accent/70 hover:!text-white !bg-white text-xs py-3 px-6 rounded-lg border border-accent text-accent hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
            type="button">
            view
          </button>
        </Link>
      </div>
    </div>
  );
}
