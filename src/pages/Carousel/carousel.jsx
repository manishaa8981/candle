
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

 function Carousel() {
    return (
        <MDBCarousel showControls interval={3000}>
            <MDBCarouselItem itemId={1} interval={1000}>
                <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
                <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
export default Carousel