import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="100"
          height="59"
          viewBox="0 0 100 59"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="5" width="14" height="5"  />
          <rect x="83" y="50" width="14" height="5"  />
          <rect x="4" y="49" width="14" height="5"  />
          <rect x="82" y="5" width="15" height="5"  />
          <rect x="4" y="18" width="13" height="5" transform="rotate(-90 4 18)"  />
          <rect x="92" y="18" width="13" height="5" transform="rotate(-90 92 18)"  />
          <rect x="92" y="55" width="12" height="5" transform="rotate(-90 92 55)"  />
          <rect x="4" y="54" width="14" height="5" transform="rotate(-90 4 54)"  />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9297 19.2969C12.7018 18.6953 12.916 18.3945 13.5723 18.3945H15.7461C16.3568 18.3945 16.776 18.709 17.0039 19.3379L21.1875 30.7539C21.3971 31.3372 21.5202 31.7292 21.5566 31.9297C21.5931 32.1211 21.6341 32.4447 21.6797 32.9004H21.7344C21.7799 32.4447 21.821 32.1211 21.8574 31.9297C21.8939 31.7292 22.0169 31.3372 22.2266 30.7539L26.4102 19.3379C26.638 18.709 27.0573 18.3945 27.668 18.3945H29.8418C30.498 18.3945 30.7122 18.6953 30.4844 19.2969L23.9492 36.8926C23.6758 37.6309 23.2474 38 22.6641 38H20.75C20.1667 38 19.7383 37.6309 19.4648 36.8926L12.9297 19.2969ZM31.8242 34.1719C31.8242 32.349 32.6947 31.0273 34.4355 30.207C36.1764 29.3867 38.1634 28.9492 40.3965 28.8945V28.3477C40.3965 27.5091 40.1868 26.9167 39.7676 26.5703C39.3483 26.224 38.765 26.0508 38.0176 26.0508C37.4889 26.0508 37.0195 26.1283 36.6094 26.2832C36.2083 26.429 35.8574 26.6022 35.5566 26.8027C35.265 26.9941 35.0007 27.1901 34.7637 27.3906C34.3444 27.7552 33.998 27.7734 33.7246 27.4453L32.5898 26.0508C32.3073 25.7044 32.3757 25.349 32.7949 24.9844C33.1139 24.7018 33.4831 24.4557 33.9023 24.2461C34.3307 24.0365 34.8958 23.8405 35.5977 23.6582C36.2995 23.4668 37.2109 23.3711 38.332 23.3711C40.2279 23.3711 41.6816 23.8086 42.6934 24.6836C43.7142 25.5586 44.2246 26.8483 44.2246 28.5527V37.1797C44.2246 37.7266 43.9512 38 43.4043 38H41.1621C40.6699 38 40.4238 37.7266 40.4238 37.1797V36.7695H40.3965C39.8587 37.2891 39.2116 37.6719 38.4551 37.918C37.7077 38.1549 37.0195 38.2734 36.3906 38.2734C34.8958 38.2734 33.7611 37.9089 32.9863 37.1797C32.2116 36.4414 31.8242 35.4388 31.8242 34.1719ZM35.8711 34.0898C35.8711 34.4089 35.9349 34.6868 36.0625 34.9238C36.1901 35.1517 36.3906 35.3203 36.6641 35.4297C36.9375 35.5391 37.2428 35.5938 37.5801 35.5938C38.0449 35.5938 38.4961 35.5299 38.9336 35.4023C39.3711 35.2747 39.8587 34.974 40.3965 34.5V31.5332C38.8652 31.7064 37.8398 31.9297 37.3203 32.2031C36.8008 32.4766 36.4271 32.7591 36.1992 33.0508C35.9805 33.3424 35.8711 33.6888 35.8711 34.0898ZM48.7773 38C48.2305 38 47.957 37.7266 47.957 37.1797V24.4648C47.957 23.918 48.2305 23.6445 48.7773 23.6445H50.9375C51.4844 23.6445 51.7578 23.918 51.7578 24.4648V25.5859H51.8125C52.0495 25.0026 52.446 24.4876 53.002 24.041C53.5579 23.5944 54.2142 23.3711 54.9707 23.3711C55.4902 23.3711 55.9186 23.4349 56.2559 23.5625C56.5749 23.681 56.6979 23.8997 56.625 24.2188L56.2422 25.8457C56.1602 26.2103 55.9141 26.3197 55.5039 26.1738C55.2669 26.0918 55.0391 26.0508 54.8203 26.0508C53.9453 26.0508 53.2207 26.5749 52.6465 27.623C52.0723 28.6712 51.7852 30.1979 51.7852 32.2031V37.1797C51.7852 37.7266 51.5117 38 50.9648 38H48.7773ZM58.6758 32.0391V24.4648C58.6758 23.918 58.9492 23.6445 59.4961 23.6445H61.6836C62.2305 23.6445 62.5039 23.918 62.5039 24.4648V31.0547C62.5039 33.0417 62.6406 34.2949 62.9141 34.8145C63.1875 35.334 63.7617 35.5938 64.6367 35.5938C65.5664 35.5938 66.2728 35.2246 66.7559 34.4863C67.2389 33.7389 67.4805 32.194 67.4805 29.8516V24.4648C67.4805 23.918 67.7539 23.6445 68.3008 23.6445H70.4883C71.0352 23.6445 71.3086 23.918 71.3086 24.4648V37.1797C71.3086 37.7266 71.0352 38 70.4883 38H68.3281C67.7812 38 67.5078 37.7266 67.5078 37.1797V36.3867H67.4531C67.0339 37.1068 66.5007 37.6035 65.8535 37.877C65.2064 38.1413 64.4408 38.2734 63.5566 38.2734C62.1621 38.2734 61 37.8268 60.0703 36.9336C59.1406 36.0404 58.6758 34.4089 58.6758 32.0391ZM75.8477 38C75.3008 38 75.0273 37.7266 75.0273 37.1797V24.4648C75.0273 23.918 75.3008 23.6445 75.8477 23.6445H78.0078C78.5547 23.6445 78.8281 23.918 78.8281 24.4648V25.2578H78.8828C79.3021 24.5378 79.8353 24.0456 80.4824 23.7812C81.1296 23.5078 81.9089 23.3711 82.8203 23.3711C84.2422 23.3711 85.418 23.8177 86.3477 24.7109C87.2773 25.6042 87.7422 27.2357 87.7422 29.6055V37.1797C87.7422 37.7266 87.4688 38 86.9219 38H84.7344C84.1875 38 83.9141 37.7266 83.9141 37.1797V30.5898C83.9141 28.6029 83.7773 27.3496 83.5039 26.8301C83.2305 26.3105 82.6426 26.0508 81.7402 26.0508C80.7832 26.0508 80.0632 26.4245 79.5801 27.1719C79.097 27.9102 78.8555 29.4505 78.8555 31.793V37.1797C78.8555 37.7266 78.582 38 78.0352 38H75.8477Z"  
          />
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>About</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>Skills</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
