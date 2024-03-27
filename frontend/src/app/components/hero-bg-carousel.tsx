import { useState, useEffect } from "react";

type HeroBgCarouselProps = {
  bgUrls: string[];
};

export function HeroBgCarousel({ bgUrls }: HeroBgCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bgUrls]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bgUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt="Hero Background Carousel"
            className="w-full h-full object-cover filter brightness-[30%]  z-[-1]"
          />
        ))}
      </div>
    </div>
  );
}