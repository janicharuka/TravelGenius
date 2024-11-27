import './home.css'
import img1 from './assets/IMG-20241126-WA0001.jpg'
import img2 from './assets/IMG-20241126-WA0002.jpg'
import img3 from './assets/IMG-20241126-WA0003.jpg'
import img4 from './assets/IMG-20241126-WA0004.jpg'
import img5 from './assets/IMG-20241126-WA0005.jpg'
import img6 from './assets/IMG-20241126-WA0006.jpg'
import img7 from './assets/IMG-20241126-WA0007.jpg'
import img8 from './assets/IMG-20241126-WA0008.jpg'
import img9 from './assets/IMG-20241126-WA0009.jpg'
import img10 from './assets/IMG-20241126-WA0010.jpg'
import img11 from './assets/IMG-20241126-WA0011.jpg'
import img13 from './assets/IMG-20241126-WA0013.jpg'
import img14 from './assets/IMG-20241126-WA0014.jpg'
import img15 from './assets/IMG-20241126-WA0015.jpg'
function Home() {
    return (
        <div>
            <section className='hero'>
                <img src={img7} />
                <div className='hero-content'>
                    <h1>Welcome to TravelGenius</h1>
                    <p>Discover amazing destinations.</p>
                    <a href='/register' className='hero-button'>join us</a>
                </div>
            </section>
            <section id='destinations' className='destinations'>
                <h2>Popular Destinations</h2>
                <div className='destination-grid'>
                    <div className='destination-item'>
                        <img src={img14} alt='' />
                        <h3>Sigiriya</h3>
                        <p>
                            Sigiriya or Sinhagiri is an ancient rock fortress located in the
                            northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.
                        </p>
                    </div>
                    <div className='destination-item'>
                        <img src={img11} alt='' />
                        <h3>Horton Plains</h3>
                        <p>
                            At an altitude of 2,100 meters above sea level, Horton Plains spreads across over 3,169 hectares
                            of the highest tableland of the island. In view of the large number of endemic flora and fauna species,
                            Horton Plains was declared a UNESCO World Heritage Site on 30th July 2010.
                        </p>
                    </div>
                    <div className='destination-item'>
                        <img src={img15} alt='' />
                        <h3>The Nine Arch Bridge in Ella</h3>
                        <p>
                            The bridge is 300 feet long, 25 feet wide, and 80–100 feet high.
                            It's made of nine stone, brick, and cement spans.
                        </p>
                    </div>
                </div>
            </section>
            <section id='hotels' className='destinations'>
                <h2>Featured Hotels</h2>
                <div className='destination-grid'>
                    <div className='destination-item'>
                        <img src={img8} alt='' />
                        <h3>Sunset Beach Hotel</h3>
                        <p>
                            Located in Mirissa, a few steps from Mirissa Beach, Sunset Beach Hotel provides accommodation with a garden,
                            free private parking, a private beach area and a terrace.
                        </p>
                    </div>
                    <div className='destination-item'>
                        <img src={img1} alt='' />
                        <h3>Ella Jungle Resort</h3>
                        <p>
                            Ella Junggle Resort nestled on the banks of the Kirindi Oya River and surrounded by wild jungles,
                            bubbling mountain streams, and abundant flora and fauna.
                        </p>
                    </div>
                    <div className='destination-item'>
                        <img src={img13} alt='' />
                        <h3>Avani Bentota Resort And Spa</h3>
                        <p>

                            A relaxing family-orientated west coast resort with just 75 rooms designed by Geoffrey Bawa, which still flaunts many original features.<br />
                            It’s squarely located on wide, sandy Bentota Beach, a popular destination for languid holidays with water sports and activities on tap.

                        </p>
                    </div>
                </div>
            </section>
            <section id='activites' className='destinations'>
                <h2>Featured Activities</h2>
                <div className='destination-grid'>
                    <div className='destination-item'>
                        <img src={img6} alt='' />
                        <h3>Hiking Trails</h3>
                        <p>
                            Sri Lanka offers many hiking trails, including scenic trails in the central highlands,
                            trails in the Knuckles Mountain Range, and the Pekoe Trail.
                            A forest with trails that can be customized for different fitness levels and interests.
                        </p>
                    </div>
                    <div className='destination-item'>
                        <img src={img1} alt='' />
                        <h3>Whale Watching in Mirissa</h3>
                        <p>
                            Set sail to the depths of the Indian Ocean on a smooth cruise,
                            in search of the magnificent creatures that dwell beneath the surface of the azure waters.
                            Come to srilanaka mirissa
                        </p>
                    </div>
                    <div className='destination-item'>
                        <img src={img5} alt='' />
                        <h3>Diving</h3>
                        <p>
                            Bathed in warm Indian Ocean currents, and with 1600 km of palm-fringed coastline, Sri Lanka is an amazing dive destination.
                            The waters of Sri Lanka are home to an incredible range of marine creatures from massive blue whales all the way through to tiny nudibranch.
                        </p>
                    </div>
                </div>
            </section>

            <section id='about' className='about'>
                <h3>About Us</h3>
                <p>
                    TravelGenius is a revolutionary travel recommendation system designed to simplify Sri Lankan trip planning.<br />
                    It provides personalized itineraries, comprehensive coverage, and a user-friendly platform
                </p>
            </section>
            <section id='contact' className='contact'>
                <h3>Contact Us</h3>
                <div className='contact-info'>
                    <p>
                        If you have any questions or would like to book a trip, please fill
                        out the form below or contact us using the information provided.
                    </p>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>Galle Road,Galle
                        </li>
                        <li>
                            <i className='fas fa-envelope'></i>
                            <a href='mailto:info@travelgenius.com'>info@travelgenius.com</a>
                        </li>
                        <li>
                            <i className='fas fa-phone-alt'></i>
                            <a href='tel:077 777 7777'>077 777 7777</a>
                        </li>
                    </ul>
                </div>
                <form action='#' className='form'>
                    <div className='form-group'>
                        <input type='name' name='name' id='name' placeholder='Enter Your Name'/>
                    </div>
                    <div className='form-group'>
                        <input type='email' name='email' id='email' placeholder='Enter Your Email'/>
                    </div>
                    <div className='form-group'>
                        <textarea name='textarea' id='textarea' cols='30' rows='10' placeholder='Message'></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Home