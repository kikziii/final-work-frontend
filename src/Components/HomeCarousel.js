import Carousel from 'react-bootstrap/Carousel'; 
import slide1 from '../assets/images/slide1.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';


function HomeCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mushrooms taste great but most are indigestible if uncooked</h3>
                        <p>Cooking releases essential nutrients we need for a healthy life, including protein, vitamins B, C and D, and selenium. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fungi could save the world</h3>
                        <p>Health superheroes, whose powers range from fighting cancer to cleaning up pollution.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Penicillium, a group of moulds (a type of fungi)</h3>
                        <p>A drug that has saved countless lives since it was developed in the late 1920s.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel;