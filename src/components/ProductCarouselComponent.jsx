import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };

  return (
    <Carousel style={{ height: "300px" }}>
      <Carousel.Item>
        <img
          src="/images/carousel-img/carousel-1.jpg"
          className="d-block w-100"
          alt="carousel-1"
          style={{ height: "300px" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h1>Laptops Category Bestseller.</h1>
          </LinkContainer>
          <p>best selling Laptop in affordable price</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/carousel-img/carousel-2.jpg"
          className="d-block w-100"
          alt="carousel-2"
          style={{ height: "300px" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h1>Books Category Bestseller.</h1>
          </LinkContainer>
          <p>Books, ethic books and which u want to read</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/carousel-img/carousel-3.jpg"
          className="d-block w-100"
          alt="carousel-3"
          style={{ height: "300px" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h1>Cameras Category Bestseller.</h1>
          </LinkContainer>
          <p>best selling cameras with HD quality in affordable prices</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarouselComponent;
