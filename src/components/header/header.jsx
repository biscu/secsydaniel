import "./header.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import data from "../../content.json";

export default function Header() {
  useGSAP(() => {
    const text = new SplitType("#info", { types: "words lines" });

    gsap.registerPlugin(CustomEase);
    CustomEase.create("animate-in", "M0,0 C0.562,0 0.11,1.004 1,1 ");

    gsap.to(text.lines, {
      y: 50,
      duration: 1,
      delay: 2,
      opacity: 1,
      ease: "animate-in",
      stagger: 0.05,
    });
  });

  return (
    <div className="info-wrapper">
      <p
        className="info z-[-9999999] text-[3rem] absolute tracking-[-0.05rem] uppercase text-justify m-0 md:text-[4rem] md:tracking-[-0.2rem]"
        id="info"
      >
        {data.header}
      </p>
    </div>
  );
}
