function GoogleMap() {
    return (
        <div className="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85174.60906269275!2d26.79029402272146!3d55.8762072979652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2eefef5496eb7%3A0x8c1c881444d39c24!2sDaugavas%20loki!5e0!3m2!1sen!2slv!4v1601557728450!5m2!1sen!2slv"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            />
        </div>
    )
}

export default GoogleMap;