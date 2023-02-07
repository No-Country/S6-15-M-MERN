import { useState, useRef, useEffect } from "react";
import Card from "./Card";

const MostRequested = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current['scrollLeft'] = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 h-500 bg-primary">
      <section className="carousel my-20 mx-auto font-poppins bg-red-500 w-[1308px] h-[415px]">
      <div className="ml-16 mb-4 text-left">
        <h3 className="text-gray-600 font-extrabold text-3l ">
        Nuestros Servicios
        </h3>
        </div>
        <div className="carousel my-4">
          <Card />
        </div>
      </section>
    </div>
  );
};

export default MostRequested;
