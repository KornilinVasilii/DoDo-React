import { Container } from '../Container/Container'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideCentral from './slide-central.webp'
import slideLeft from './slide-left.png'
import slideRight from './slide-reght.png'
import s from "./Slider.module.css"

export function Slider() { 
  return (
    <Container>
      <Carousel>
        <div>
          <img src={slideCentral} className={s.thumbs} />
        </div>
        <div>
          <img src={slideLeft} className={s.thumbs} />
        </div>
        <div>
          <img src={slideRight} className={s.thumbs} />
        </div>
      </Carousel>
    </Container>
  );
}