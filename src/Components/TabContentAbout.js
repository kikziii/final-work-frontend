import slide1 from '../assets/images/slide1.jpg';
import Contacts from './Contacts';

function TabContentAbout() {
    return (
        <div className="container mt-3">
            <div class="row">
                <div class="col-4">
                    <img alt="About" src={slide1} className="img-thumbnail"/>
                </div>
                <div class="col-8">
                    <p>We are a community of fungi enthusiast. We go for a forest walks to look for some mushrooms, we exchange our finds and create finger licking recipes. Everyone is welcome to join us or support us.</p>
                    <p>Let's get in touch: <a href="#">fungi@fungilitious.com</a> </p>
                </div>
            </div>
            <Contacts/>
        </div>
    )
}

export default TabContentAbout;