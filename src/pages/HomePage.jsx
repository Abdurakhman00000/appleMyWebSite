import React from 'react';
import AppleMac from '../components/image/apple mac.png'
import ApplePhone from '../components/image/apple phone.png'
import ApplePhone2 from '../components/image/apple phone2.png'
import imageBlock1 from '../components/image/block1.png'
import imageBlock2 from '../components/image/block2.png'
import imageBlock3 from '../components/image/block3.png'
import imageBlock4 from '../components/image/block4.png'
import imageBlock5 from '../components/image/block5.png'
import imageBlock6 from '../components/image/block6.png'
import imageVision from '../components/image/vision pro.png'
import imageAppleTV from '../components/image/apple tv.png'
import appleFriday from '../components/image/apple friday.png'
import airPods from '../components/image/AirPods Pro.png'
import adaptiveAudio from '../components/image/Adaptive Audio. Now playing..png'
import appleCart from '../components/image/card.png'
import appleTradeIn from '../components/image/trade in.png'
import imageSlides from '../components/image/slides.png'
import imageSlides2 from '../components/image/slides2.png'
import imageSlides3 from '../components/image/slides3.png'
import slider2 from '../components/image/slider2.png'

const HomePage = () => {
    return (
        <>
        {/* SECTION */}

         <section id="section">
      <div class="sontainer">
        <div class="section">
          <div class="text-block">
            <h1>MacBook Air</h1>
            <h2>Lean. Mean. M3 machine.</h2>

            <div class="active-block">
              <button class="btn1">Learn more</button>
              <button class="btn2">Buy</button>
            </div>
          </div>

          <img src={AppleMac} alt="" />
        </div>
      </div>
    </section>


    <section id="section2">
      <div class="sontainer">
        <div class="section2">
          <div class="text-block2">
            <h1>iPhone 15 Pro</h1>
            <h2>Titanium. So strong. So light. So Pro.</h2>

            <div class="active-block2">
              <button class="btn-section1">Learn more</button>
              <button class="btn-section2">Buy</button>
            </div>
          </div>

          <img src={ApplePhone} alt="" />
        </div>
      </div>
    </section>


    <section id="section3">
      <div class="sontainer">
        <div class="section3">
          <div class="text-block3">
            <h1>iPhone 15</h1>
            <h2>New camera. New design. Newphoria.</h2>

            <div class="active-block3">
              <button class="btn-section3">Learn more</button>
              <button class="btn-section4">Buy</button>
            </div>
          </div>

          <img src={ApplePhone2} alt="" />
        </div>
      </div>
    </section>



    {/* MAIN-BLOCK */}

                    <section id="main-block">
      <div class="sontainer">
        <div class="main-block">
          <div class="block1">
            <div class="block-text">
              <p>
                Apple Worldwide Developers Conference. <br />
                Join us online June 10–14.
              </p>
              <button>Learn more</button>
            </div>

            <img src={imageBlock1} alt="" />
          </div>

          <div class="block2">
            <div class="block-text2">
              <img src={imageVision} alt="" />
              <p>Welcome to the era of spatial computing.</p>

              <div class="block-active">
                <button class="btn-learn">Learn more</button>
                <button class="btn-buy">Buy</button>
              </div>
            </div>

            <img class="block2-img" src={imageBlock2} alt="" />
          </div>
        </div>

        <div class="main-block2">
          <div class="block3">
            <div class="block-text3">
              <img src={imageAppleTV} alt="" />
              <img class="text-img" src={appleFriday} alt="" />

              <p>Baseball is back. Catch live games every Friday.</p>

              <button>Learn more</button>
            </div>

            <img class="block3-img" src={imageBlock3} alt="" />
          </div>

          <div class="block4">
            <div class="block-text4">
              <div class="block-images">
                <img class="airpods" src={airPods} alt="" />
                <img
                  class="audio"
                  src={adaptiveAudio}
                  alt=""
                />
              </div>

              <div class="block-active4">
                <button class="btn-learn">Learn more</button>
                <button class="btn-buy">Buy</button>
              </div>
            </div>

            <img class="block4-img" src={imageBlock4} alt="" />
          </div>
        </div>

        <div class="main-block3">
          <div class="block5">
            <div class="block-text5">
              <img src={appleCart} alt="" />

              <p>
                Get up to 3% Daily Cash back <br />
                with every purchase.
              </p>

              <div class="block-active5">
                <button class="btn-learn">Learn more</button>
                <button class="btn-apply">Apply now</button>
              </div>
            </div>

            <img class="block5-img" src={imageBlock5} alt="" />
          </div>

          <div class="block6">
            <div class="block-text6">
              <img src={appleTradeIn} alt="" />

              <p>
                Get $180-$630 in credit when you <br />
                trade in iPhone 11 or higher.1
              </p>

              <button>Get your estimate</button>
            </div>

            <img class="block6-img" src={imageBlock6} alt="" />
          </div>
        </div>
      </div>
    </section>



    {/* SLIDES-BLOCK */}

    <section id="slides">
      <div class="slides">
        <div class="slides-track">
          <div class="slides1">
            <img src={imageSlides} alt="" />
          </div>

          <div class="slides2">
            <img src={imageSlides2} alt="" />
          </div>

          <div class="slides3">
            <img src={imageSlides3} alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="slider">
      <div class="slider">
        <div class="slider-track">
          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/cc/4e/d8/cc4ed85a-7ef3-054e-ebef-10af337eac38/8326179d-1059-40b6-af56-aa2a6b0789e9_NBA2k24_ARCADE-ASO-SCREENSHOTS-1A-EN-SDW-2880X1800.jpg/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/64/c8/e3/64c8e3e1-4961-3731-ce82-dc2c28905d0d/92094f64-1819-4b32-bd68-5a67d0efd8b5_HKIA_2880x1800_BeachScene.png/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img class="slider2" src={slider2} alt="" />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c9/76/2b/c9762bab-ad8e-3c9a-d52e-4ea6b3ac78a1/e396a03f-6343-440e-bfa2-cb7f30c73615_NBA2k24_ARCADE-ASO-SCREENSHOTS-1B-EN-SDW-2880X1800.jpg/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/62/cb/e3/62cbe36d-ebd8-ee02-04b2-0161d1b3f424/3d7257ab-8542-490c-8225-12f402067c61_HKIA_2880x1800_MinecartRide.png/313x0w.webp"
              alt=""
            />
          </div>


          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/cc/4e/d8/cc4ed85a-7ef3-054e-ebef-10af337eac38/8326179d-1059-40b6-af56-aa2a6b0789e9_NBA2k24_ARCADE-ASO-SCREENSHOTS-1A-EN-SDW-2880X1800.jpg/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/64/c8/e3/64c8e3e1-4961-3731-ce82-dc2c28905d0d/92094f64-1819-4b32-bd68-5a67d0efd8b5_HKIA_2880x1800_BeachScene.png/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img class="slider2" src={slider2} alt="" />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c9/76/2b/c9762bab-ad8e-3c9a-d52e-4ea6b3ac78a1/e396a03f-6343-440e-bfa2-cb7f30c73615_NBA2k24_ARCADE-ASO-SCREENSHOTS-1B-EN-SDW-2880X1800.jpg/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/62/cb/e3/62cbe36d-ebd8-ee02-04b2-0161d1b3f424/3d7257ab-8542-490c-8225-12f402067c61_HKIA_2880x1800_MinecartRide.png/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/cc/4e/d8/cc4ed85a-7ef3-054e-ebef-10af337eac38/8326179d-1059-40b6-af56-aa2a6b0789e9_NBA2k24_ARCADE-ASO-SCREENSHOTS-1A-EN-SDW-2880X1800.jpg/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/64/c8/e3/64c8e3e1-4961-3731-ce82-dc2c28905d0d/92094f64-1819-4b32-bd68-5a67d0efd8b5_HKIA_2880x1800_BeachScene.png/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img class="slider2" src={slider2} alt="" />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c9/76/2b/c9762bab-ad8e-3c9a-d52e-4ea6b3ac78a1/e396a03f-6343-440e-bfa2-cb7f30c73615_NBA2k24_ARCADE-ASO-SCREENSHOTS-1B-EN-SDW-2880X1800.jpg/313x0w.webp"
              alt=""
            />
          </div>

          <div class="slide">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/62/cb/e3/62cbe36d-ebd8-ee02-04b2-0161d1b3f424/3d7257ab-8542-490c-8225-12f402067c61_HKIA_2880x1800_MinecartRide.png/313x0w.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="slider-btn">
        <button><ion-icon name="stop-circle-outline"></ion-icon></button>
      </div>

      
    </section>





    {/* FOOTER */}
    
    <footer id="footer">
      <div class="container">
        <div class="footer">

          <div class="footer-text">
            <p>
              1. Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old <br />
              to be eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied toward qualifying new device
              purchase, or added to an Apple Gift Card. Actual value <br />
              awarded is based on receipt of a qualifying device matching the
              description provided when estimate was made. Sales tax may be
              assessed on full value of a new device <br />
              purchase. In-store trade-in requires presentation of a valid photo
              ID (local law may require saving this information). Offer may not
              be available in all stores, and may vary between <br />
              in-store and online trade-in. Some stores may have additional
              requirements. Apple or its trade-in partners reserve the right to
              refuse or limit quantity of any trade-in transaction <br />
              for any reason. More details are available from Apple’s trade-in
              partner for trade-in and recycling of eligible devices.
              Restrictions and limitations may apply.
            </p>

            <p>
              Available in the U.S. on apple.com, in the Apple Store app, and at
              Apple Stores.
            </p>

            <p>
              To access and use all Apple Card features and products available
              only to Apple Card users, you must add Apple Card to Wallet on an
              iPhone or iPad that supports and has the <br/> latest version of iOS or
              iPadOS. Apple Card is subject to credit approval, available only
              for qualifying applicants in the United States, and issued by
              Goldman Sachs Bank USA, <br/> Salt Lake City Branch.
            </p>


            <p>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</p>

            <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>

            <p>A subscription is required for Apple TV+.</p>

            <p>A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.</p>
          </div>


        </div>
      </div>
    </footer>



    <footer class="apple-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Discover</h3>
                <ul>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">HomePod</a></li>
                    <li><a href="#">iPod touch</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Gift Cards</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Apple Music</a></li>
                    <li><a href="#">Apple TV+</a></li>
                    <li><a href="#">Apple Fitness+</a></li>
                    <li><a href="#">Apple News+</a></li>
                    <li><a href="#">Apple Arcade</a></li>
                    <li><a href="#">iCloud</a></li>
                    <li><a href="#">Apple One</a></li>
                    <li><a href="#">Apple Card</a></li>
                    <li><a href="#">Apple Books</a></li>
                    <li><a href="#">Apple Podcasts</a></li>
                    <li><a href="#">App Store</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Account</h3>
                <ul>
                    <li><a href="#">Manage Your Apple ID</a></li>
                    <li><a href="#">Apple Store Account</a></li>
                    <li><a href="#">iCloud.com</a></li>
                    <li><a href="#">Apple Store</a></li>
                    <li><a href="#">Corporate Sales</a></li>
                    <li><a href="#">Education Store</a></li>
                    <li><a href="#">Find a Store</a></li>
                    <li><a href="#">Shop Online</a></li>
                    <li><a href="#">Genius Bar</a></li>
                    <li><a href="#">Today at Apple</a></li>
                    <li><a href="#">Apple Camp</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Apple Store</h3>
                <ul>
                    <li><a href="#">Find a Store</a></li>
                    <li><a href="#">Shop Online</a></li>
                    <li><a href="#">Genius Bar</a></li>
                    <li><a href="#">Today at Apple</a></li>
                    <li><a href="#">Apple Camp</a></li>
                    <li><a href="#">Apple Store App</a></li>
                    <li><a href="#">Refurbished and Clearance</a></li>
                    <li><a href="#">Financing</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Shopping Help</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>For Business</h3>
                <ul>
                    <li><a href="#">Apple and Business</a></li>
                    <li><a href="#">Shop for Business</a></li>
                </ul>
                <h3>For Education</h3>
                <ul>
                    <li><a href="#">Apple and Education</a></li>
                    <li><a href="#">Shop for K-12</a></li>
                    <li><a href="#">Shop for College</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Apple Values</h3>
                <ul>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Environment</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Supplier Responsibility</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>About Apple</h3>
                <ul>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Apple Leadership</a></li>
                    <li><a href="#">Career Opportunities</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Ethics & Compliance</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contact Apple</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-legal">
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Sales and Refunds</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
            <p>&copy; 2024 Apple Inc. All rights reserved.</p>
        </div>
    </footer>
        </>
    );
};

export default HomePage;