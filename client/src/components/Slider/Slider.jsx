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
          <img className={s.slideCentral} src={slideCentral} />
        </div>
        <div>
          <img className={s.slideLeft} src={slideLeft} />
        </div>
        <div>
          <img className={s.slideRight} src={slideRight} />
        </div>
      </Carousel>
    </Container>
  );
}