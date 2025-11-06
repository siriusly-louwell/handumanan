import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import type { SpotState, ImageCollection } from "../services/types";
import { SPOTS } from "../services/data";
import { SPOT_INFO } from "../services/SpotInfo";
import { IMAGES } from "../services/images";

export default function Place() {
  const { state } = useLocation() as { state: SpotState };
  const images = (IMAGES as ImageCollection)[state.place].images[state.name];
  const spotInfo = SPOT_INFO[state.name];

  function getTitle() {
    const place = SPOTS[state.place].spot
      .filter((place) => place.name === state.name)
      .map((val) => val.label);

    return place.length > 0 ? place[0] : "";
  }

  return (
    <section className="lg:py-10 md:px-20 text-left container">
      <div className="container p-10 bg-fine grid grid-cols-1 gap-y-10 items-center rounded-xl justify-between gap-x-10 lg:grid-cols-2">
        <div className="mb-12">
          <h1 className="text-accent font-semibold font-poppins mb-5">
            {getTitle()}
          </h1>
          <p className="block antialiased font-sans text-xl font-semibold leading-relaxed text-inherit mb-8 font-normal !text-course">
            {spotInfo.description}
          </p>

          {spotInfo.quote !== "" && (
            <figure className="mb-2 border-l-2 border-gray-400 pl-4">
              <blockquote cite="#">
                <p className="block antialiased font-sans text-xl font-medium leading-relaxed text-inherit mb-2 font-bold italic !text-gray-400">
                  {spotInfo.quote}
                </p>
              </blockquote>
            </figure>
          )}
        </div>
        <img
          src={images[0]}
          alt="blog"
          className="ml-auto h-full w-full rounded-lg object-cover object-center shadow-md lg:min-h-[38rem]"
        />

        <img
          className="col-span-1 w-full rounded-lg shadow-md lg:w-11/12"
          src={images[1]}
          alt=""
        />
        <div className="col-span-1 w-full lg:w-9/12">
          <h1 className="block antialiased tracking-normal font-poppins text-5xl font-medium leading-snug text-gray-500 mb-2 !text-2xl lg:!text-5xl">
            {spotInfo.header}
          </h1>
          <div className="ml-4 mb-2">
            <ul className="flex list-disc text-xl flex-col gap-2 pl-4 !font-normal text-course">
              {spotInfo.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Carousel items={images.filter((_, i: number) => i !== 0 && i !== 1)} />
    </section>
  );
}
