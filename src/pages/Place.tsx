import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import type { SpotState } from "../services/types";
import { SPOTS } from "../services/data";

export default function Place() {
  const { state } = useLocation() as { state: SpotState };

  function getTitle() {
    const place = SPOTS[state.place].spot
      .filter((place) => place.name === state.name)
      .map((val) => val.label);

    return place.length > 0 ? place[0] : "";
  }

  return (
    <section className="lg:py-10 px-20 text-left w-screen">
      <div className="container p-10 bg-fine grid grid-cols-1 items-center rounded-xl justify-between gap-x-10 lg:grid-cols-2">
        <div className="mb-12">
          <h1 className="text-accent font-semibold font-poppins mb-5">{getTitle()}</h1>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-8 font-normal !text-course">
            It really matters and then like it really doesn't matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn't matter.
          </p>
          <div className="ml-4 mb-2">
            <ul className="flex list-disc flex-col gap-2 pl-4 !font-normal text-course">
              <li>People are so scared to lose their hope</li>
              <li>That's the main thing people</li>
              <li>Thoughts- their perception of themselves!</li>
            </ul>
          </div>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-8 font-normal !text-course">
            It really matters and then like it really doesn't matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn't matter.
          </p>
          <h3 className="block antialiased tracking-normal font-poppins text-3xl font-medium leading-snug text-gray-500 mb-2 !text-2xl lg:!text-3xl">
            We will be with you forever
          </h3>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-6 font-normal !text-course">
            It really matters and then like it really doesn't matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn't matter.
          </p>
          <figure className="mb-2 border-l-2 border-gray-400 pl-4">
            <blockquote cite="#">
              <p className="block antialiased font-sans text-xl font-medium leading-relaxed text-inherit mb-2 font-bold italic !text-gray-400">
                "And thank you for turning my personal jean jacket into a
                couture piece."
              </p>
            </blockquote>
            <figcaption>
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit ml-2 font-normal !text-gray-600">
                — Kanye West, Producer
              </p>
            </figcaption>
          </figure>
        </div>
        <img
          src="https://www.material-tailwind.com/image/blog-11.jpeg"
          alt="blog"
          className="ml-auto h-full w-full rounded-lg object-cover object-center shadow-md lg:min-h-[38rem]"
        />
      </div>

      <Carousel
        items={[
          {
            image: "/BUKIDNON/NASULI SPRING/1.jpg",
            caption: "",
          },
          {
            image: "/BORACAY/ARIEL_S POINT/2.jpg",
            caption: "",
          },
          {
            image: "/BORACAY/WHITE BEACH/4.jpg",
            caption: "",
          },
          {
            image: "/CAMIGUIN/SUNKEN CEMETERY/5.webp",
            caption: "",
          },
        ]}
      />
    </section>
  );
}
