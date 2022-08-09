import { Carousel } from "react-bootstrap";
export default function ImageSlider({ images }) {
  return (
    <>
      <Carousel style={{width:'24rem'}}>
        {images.map((img) => {
          return (
            <Carousel.Item>
              <img className="w-100 rounded" src={img} alt="Third slide" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
