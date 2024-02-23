import "./model.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import Spline from "@splinetool/react-spline";

export default function Model() {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("animate-in", "M0,0 C0.562,0 0.11,1.004 1,1 ");

    gsap.to("#model", {
      y: -50,
      duration: 0.5,
      delay: 1.5,
      opacity: 1,
      ease: "animate-in",
    });
  });
  return (
    <div className="w-[99%] h-[100svh] absolute -z-10 top-0;">
      <Spline
        className="opacity-0"
        id="model"
        scene="https://prod.spline.design/pbzHApcUvKnfcq1r/scene.splinecode"
      />
    </div>
  );
}
