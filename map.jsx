import './map.css'
function Map() {
    return (
        <div className='map'>
            <div className='map-header'>
                <h1>Explore Sri Lanka</h1>
                <p>Discover the beauty of Sri Lanka through our interactive map!</p>
            </div>
            <div className='map-container'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6457141.176469586!2d79.83780022007964!3d7.87305422866681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b76a44ffadf%3A0x6bf38546a6f8b17f!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1697022936167!5m2!1sen!2slk'
                    height='100%' width='100%' style={{ border: 0 }} allowFullScreen={true} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
        </div>
    );
}
export default Map