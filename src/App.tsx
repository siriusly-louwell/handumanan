import "./App.css";
import Header from "./components/Header";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Places from "./pages/Places";
import Place from "./pages/Place";
import HomePage from "./pages/HomePage";
import TourSpots from "./pages/TourSpots";

function App() {
  return (
    <div className="flex flex-col items-center w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<Places />} />
        <Route path="/read" element={<Place />} />
        <Route path="/spots" element={<TourSpots />} />
      </Routes>

      {/* <section className="py-10 px-8">
        <div className="container mx-auto mb-24 text-center">
          <h2 className="block antialiased tracking-normal font-poppins text-4xl font-semibold leading-[1.3] text-gray-900 mb-2 !text-3xl lg:!text-4xl">
            Book your next trip
          </h2>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto max-w-xl !text-gray-500">
            An arrangement you make to have a hotel room, tickets, etc. at a
            particular time in the future.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg">
              <img
                src="https://www.material-tailwind.com/image/blog-13.png"
                alt="Lovely and cozy apartment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <div className="flex items-center gap-2">
                <p className="block antialiased font-sans text-sm font-medium leading-normal text-blue-500 mb-2 font-normal !text-gray-400">
                  Entire Apartment • 3 Guests • 2 Beds
                </p>
              </div>
              <a
                href="#"
                className="block font-poppins text-xl font-semibold text-gray-900 mb-2">
                Lovely and cozy apartment
              </a>
              <p className="block antialiased font-poppins font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-400">
                Siri's latest trick is offering a hands-free TV viewing
                experience, that will allow consumers to turn on or off their
                television, change inputs, fast forward.
              </p>
              <button
                className="font-bold text-center uppercase hover:bg-gray-300 !bg-white text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button">
                from /night
              </button>
            </div>
          </div>

          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-52">
              <img
                src="https://www.material-tailwind.com/image/blog-14.png"
                alt="Single room in the center of city"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 font-normal !text-gray-500">
                  Private Room • 1 Guests • 1 Sofa
                </p>
              </div>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case">
                Single room in the center of city
              </a>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                As Uber works through a huge amount of internal management
                turmoil, the company is also consolidating more of its
                international business.
              </p>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button">
                from /night
              </button>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-52">
              <img
                src="https://www.material-tailwind.com/image/blog-15.png"
                alt="Independent house bedroom"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 font-normal !text-gray-500">
                  Entire Apartment • 4 Guests • 2 Beds
                </p>
              </div>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case">
                Independent house bedroom
              </a>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                Music is something that every person has his or her own specific
                opinion about. Different people have different taste, and
                various types of music.
              </p>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button">
                from /night
              </button>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-52">
              <img
                src="https://www.material-tailwind.com/image/blog-16.jpeg"
                alt="Zen Gateway with pool and garden"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 font-normal !text-gray-500">
                  Entire Apartment • 2 Guests • 1 Bed
                </p>
              </div>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case">
                Zen Gateway with pool and garden
              </a>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                Fast forward, rewind and more, without having to first invoke a
                specific skill, or even press a button on their remote.
              </p>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button">
                from /night
              </button>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-52">
              <img
                src="https://www.material-tailwind.com/image/blog-17.jpeg"
                alt="Cheapest hotels for a luxury vacation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 font-normal !text-gray-500">
                  Entire Flat • 8 Guests • 3 Rooms
                </p>
              </div>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case">
                Cheapest hotels for a luxury vacation
              </a>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                Today, the company announced it will be combining its
                rides-on-demand business and UberEATS.
              </p>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button">
                from /night
              </button>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-52">
              <img
                src="https://www.material-tailwind.com/image/blog-18.jpeg"
                alt="Cozy Double Room Near Station"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 font-normal !text-gray-500">
                  Entire Apartment • 4 Guests • 2 Beds
                </p>
              </div>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case">
                Cozy Double Room Near Station
              </a>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                Different people have different taste, and various types of
                music have many ways of leaving an impact on someone.
              </p>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button">
                from /night
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
