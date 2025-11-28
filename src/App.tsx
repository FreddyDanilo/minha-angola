import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    const dur = 1;
    const start50 = dur * 0.3;

    tl.addLabel("start")
      .to(
        ".hero-section-wallpaper",
        {
          scale: 2,
          duration: dur,
        },
        "start"
      )

      .to(
        ".hero-section-mask",
        {
          opacity: 1,
          duration: 1,
        },
        "start"
      )

      .to(
        ".hero-section-title",
        {
          opacity: 1,
          y: 160,
          duration: 1.5,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        `start+=${start50}`
      );
  });

  return (
    <main>
      <section className="relative w-full overflow-hidden hero-section">
        <img
          src="/wallpaper.webp"
          alt="Baía de Luanda"
          className="w-screen h-screen object-cover hero-section-wallpaper"
        />

        <div
          className="top-0 right-0 bottom-0 left-0 absolute hero-section-mask"
          style={{ backgroundColor: "#000", opacity: 0 }}
        ></div>

        <h1
          className="top-1/2 left-1/2 absolute p-6 font-bold text-white text-9xl text-center -translate-x-1/2 -translate-y-1/2 hero-section-title"
          style={{
            opacity: 0,
            filter: "blur(100px)",
          }}
        >
          Minha cidade de Luanda ❤️
        </h1>
      </section>

      <section className="flex justify-center items-center bg-gray-50 w-full h-screen font-black text-gray-900">
        <div className="gap-4 grid p-6 w-full max-w-6xl text-left">
          <div className="relative">
            <h1>Gostaste da animação?</h1>
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: "350%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                repeatDelay: 1.5,
              }}
              className="top-0 left-0 absolute bg-linear-to-r from-transparent via-white/70 to-transparent blur-md w-1/4 h-full rotate-15"
            />
          </div>
          <p>Posso dar uma outra vibe no teu projeto</p>
          <a href="https://freddydanilo.com" target="_blank">
            Me encontra aqui
          </a>
        </div>
      </section>
    </main>
  );
}
