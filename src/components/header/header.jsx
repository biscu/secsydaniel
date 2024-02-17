import "./header.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export default function Header() {
  useGSAP(() => {
    const text = new SplitType(".info", { types: "words lines" });
    // gsap code here...
    gsap.to(text.lines, {
      y: 360,
      duration: 2,
      delay: 2,
      ease: "expo.out",
      stagger: 0.1,
    });
  });

  return (
    <div className="info-wrapper">
      <p className="info">
        Secsy Daniel is a poliedric swedish designer with a big hairy carpet in
        the living room and olimpic medal for which he did not compete in any
        Olympic sport.
      </p>
    </div>
  );
}
