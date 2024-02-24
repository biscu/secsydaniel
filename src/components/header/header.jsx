import "./header.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import data from "../../content.json";

export default function Header() {
  useGSAP(() => {
    const text = new SplitType("#info", { types: "words lines chars" });

    const wordElements = document.querySelectorAll(".char");
    const windowCenterX = window.innerWidth / 2;
    const maxRotationAngle = 40;
    const maxFontSizeReduction = 0.6;
    const opacityReductionFactor = 0.6;

    wordElements.forEach((word) => {
      const boundingRect = word.getBoundingClientRect();
      const wordCenterX = boundingRect.x + boundingRect.width / 2;
      const distanceFromCenter = Math.abs(wordCenterX - windowCenterX);
      const rotationDirection = wordCenterX > windowCenterX ? 1 : -1;
      const rotationAngle =
        (distanceFromCenter / windowCenterX) *
        maxRotationAngle *
        rotationDirection;
      const fontSizeReduction =
        (distanceFromCenter / windowCenterX) * maxFontSizeReduction;
      const opacityReduction =
        (distanceFromCenter / windowCenterX) * opacityReductionFactor;
      word.style.transform = `rotateY(${rotationAngle}deg)`;
      const originalFontSize = parseFloat(
        window.getComputedStyle(word).fontSize
      );
      const newFontSize =
        originalFontSize - originalFontSize * fontSizeReduction;
      word.style.fontSize = `${newFontSize}px`;
      const originalOpacity = parseFloat(window.getComputedStyle(word).opacity);
      const newOpacity = originalOpacity - opacityReduction;
      word.style.opacity = newOpacity;

      // Adjust transform-origin based on word position
      if (wordCenterX > windowCenterX) {
        word.style.transformOrigin = "center left";
      } else {
        word.style.transformOrigin = "center right";
      }
    });

    gsap.registerPlugin(CustomEase);
    CustomEase.create("animate-in", "M0,0 C0.562,0 0.11,1.004 1,1 ");

    gsap.fromTo(
      text.words,
      {
        y: -40,
      },
      {
        y: 0,
        duration: 1,
        delay: 2,
        opacity: 1,
        ease: "animate-in",
        stagger: 0.05,
      }
    );
  });

  return (
    <div className="info-wrapper relative">
      <p
        className="info z-[-9999999] left-0 right-0 mt-4 text-center max-w-[1000px] mx-auto text-[2rem] absolute tracking-[-0.05rem] uppercase md:text-[3rem] md:tracking-[-0.2rem] md:mt-52"
        id="info"
      >
        {data.header}
      </p>
    </div>
  );
}
