import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-screen bg-[url('https://www.material-tailwind.com/image/image-4.jpeg')] bg-bottom bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-black/50"></div>
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white text-4xl !leading-snug lg:text-5xl">
            Work with an amazing
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl">
            We're constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game
          </p>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-white mt-1 mb-7 font-normal uppercase">
            Connect with us on:
          </p>
          <div className="flex !gap-4">
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <FaFacebook size={25} />
              </span>
            </button>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <FaInstagram size={25} />
              </span>
            </button>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <FaTwitter size={25} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
