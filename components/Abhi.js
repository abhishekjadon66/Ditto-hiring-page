import Carousel from "react-bootstrap/Carousel";

export default function Abhi() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="image1.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="banner.webp" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="web.webp" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
