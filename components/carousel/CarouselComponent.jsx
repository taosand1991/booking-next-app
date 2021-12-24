import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent({ children, isMobile }) {
  return (
    <Carousel showIndicators={!isMobile} dynamicHeight>
      {children}
    </Carousel>
  );
}

export default CarouselComponent;
