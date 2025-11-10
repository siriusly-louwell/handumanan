import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen w-screen bg-[url('/VIGAN/CALLE_CRISOLOGO/3.jpg')] bg-bottom bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <h1 className="block antialiased tracking-normal font-poppins text-5xl font-semibold leading-tight text-white text-4xl !leading-snug lg:text-5xl">
              Travel with purpose. Take home more than memories
            </h1>
            <img
              src="/handumanan_logo.png"
              alt="handumanan logo"
              className="mt-10 w-[15vh]"
            />
            <p className="block antialiased font-sans text-lg font-normal italic leading-relaxed text-fine mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl">
              <strong>HANDUMANAN</strong>: A Memories that Lives On
            </p>
            <p className="block antialiased font-sans text-sm font-light leading-relaxed text-white mt-5 mb-3 font-normal uppercase">
              Connect with us on:
            </p>
            <div className="flex !gap-4">
              <div className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <FaFacebook size={25} />
                </span>
              </div>
              <div className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <FaInstagram size={25} />
                </span>
              </div>
              <div className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <FaTwitter size={25} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-gradient-to-b pb-10 px-6 md:px-16">
        <div className="w-full flex justify-center">
          <img
            src="/handumanan_logo.png"
            alt="handumanan logo"
            className="w-[30vh]"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center border-b pb-10 border-course mb-5">
          <h2 className="text-4xl font-bold text-accent mb-8 tracking-wide">
            Introduction
          </h2>

          <div className="space-y-10 text-slate-800">
            <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
              <strong>Handumanan</strong> is a bisaya term which means “memory”
              or “something kept to remember.” The name represents our goal of
              creating souvenirs that do more than just decorate a shelf; they
              preserve experiences and tell stories. The term “hand” reflects
              the idea of handmade craftsmanship, emphasizing care, creativity,
              and cultural identity.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                Executive Summary
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
                <strong>Handumanan</strong> is a sustainable souvenir brand that
                merges Filipino craftsmanship with digital innovation to
                redefine how travelers keep and relive their memories. The
                business offers eco-friendly, interactive souvenirs that not
                only serve as tangible reminders but also connect to digital
                content, such as photos, videos, and stories, through QR
                technology.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent mb-8 tracking-wide">
            Our Purpose
          </h2>

          <div className="space-y-10 text-slate-800">
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                Mission
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
                <strong>HANDUMANAN</strong> aims to promote sustainable tourism
                by offering eco-friendly souvenirs that share stories about
                local destinations and culture. Through QR codes, we connect
                travelers to meaningful experiences while supporting local
                artisans and communities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                Vision
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
                <strong>HANDUMANAN</strong> envisions becoming a leading
                platform for sustainable and cultural souvenirs that inspire
                travelers to appreciate and protect both local culture and the
                environment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                Core Values
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
                We value sustainability, cultural appreciation, and authenticity
                by promoting eco-friendly souvenirs that reflect true Filipino
                craftsmanship. We embrace innovation through QR code technology
                and empower local communities while ensuring the quality of
                every product we offer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
