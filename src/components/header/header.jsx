import "./header.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import data from "../../content.json";

export default function Header() {
  useGSAP(() => {
    const text = new SplitType("#info", { types: "words lines chars" });

    Pace.on("done", function () {
      gsap.registerPlugin(CustomEase);
      CustomEase.create("animate-in", "M0,0 C0.562,0 0.11,1.004 1,1 ");
      gsap.fromTo(
        text.words,
        {
          y: 60,
        },
        {
          y: 0,
          duration: 1.1,
          opacity: 1,
          ease: "animate-in",
          stagger: 0.02,
        }
      );
    });
  });

  return (
    <div className="relative info-wrapper">
      <p
        className="info z-[10] max-w-[500px] text-[1.5rem] absolute md:text-[1.5rem]"
        id="info"
      >
        {data.header}
      </p>
    </div>
  );
}
