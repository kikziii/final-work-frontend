import cats1 from '../assets/images/cats1.jpg';

function TabContentJoin() {
    return (
        <div className="container mt-3">
            <div class="row">
                <div class="col-4">
                    <img alt="About" src={cats1} className="img-thumbnail"/>
                </div>
                <div class="col-8">
                    <p>Join our weekly forest walks:</p>
                    <ul>
                        <li>Garkalne - October 9, 2020</li>
                        <li>Ropazi - October 16, 2020</li>
                        <li>Talsi - October 23, 2020</li>
                        <li>Cesis - October 30, 2020</li>
                    </ul>
                    <p>Send in your unique fungi photos: <a href="#">photos@fungilitious.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default TabContentJoin;