import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

const slides = [
  {
    url: "https://source.unsplash.com/random/2560x1440/?lobster",
    title: "lobster",
  },
  {
    url: "https://source.unsplash.com/random/2560x1440/?sushi",
    title: "sushi",
  },
  {
    url: "https://source.unsplash.com/random/2560x1440/?pasta",
    title: "pasta",
  },
  {
    url: "https://source.unsplash.com/random/2560x1440/?halibut+dinner",
    title: "halibut",
  },
] as const;

// Image gallery on bottom of landing page
export default function Carousel(): JSX.Element {
  const [index, setindex] = useState(0);

  // click on arrow to jump to previous image in image gallery
  function prevSlide(): void {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
    setindex(newIndex);
  }

  // click on arrow to jump to next image in image gallery
  function nextSlide(): void {
    const isLastSlide = index === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setindex(newIndex);
  }

  // click on buttons to jump to image in image gallery
  function goToSlide(slideIndex: number): void {
    setindex(slideIndex);
  }

  return (
    <div className="max-w-7xl h-[720px] w-11/12	m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[index].url})` }}
      />
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slide.title}
            onClick={() => goToSlide(slideIndex)}
            aria-hidden="true"
            role="button"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
