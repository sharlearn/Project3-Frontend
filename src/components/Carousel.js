import Carousel from "react-bootstrap/Carousel";
import Image1 from "./images/carousel1.jpg";
import Image2 from "./images/carousel2.jpg";
import Image3 from "./images/carousel3.jpg";

function HomepageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={Image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={Image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;
