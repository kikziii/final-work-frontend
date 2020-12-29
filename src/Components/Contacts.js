import GoogleMap from './GoogleMap';

function Contacts() {
    return (
        <div className="container">
            <div class="mt-5 mb-5">
                <h5>Contacts</h5>
            </div>
            <div class="row">
                <div class="col">
                    <GoogleMap/>
                </div>
                <div class="col">
                    <h6>Address:</h6>
                    <p>Forests of Latvia</p>
                    <h6>Email:</h6>
                    <a href="#">fungi@fungilitious.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;