import React from 'react';
import AppleLogo from '../image/apple.png'
import AppleSearch from '../image/apple search.png'
import AppleBasket from '../image/apple basket.png'
import AdminPanel from '../admin/AdminPanel';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
               <div id="header">
      <div class="container">
        <div class="header">
            <AdminPanel />
          <Link to='/home'>
          <img src={AppleLogo} alt="" />
          </Link>
          <p>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>Watch</p>
          <p>Vision</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>Entertaiment</p>
          <p>Accessories</p>
          <p>Support</p>

          <img src={AppleSearch} alt="" />
          <img src={AppleBasket} alt="" />
        </div>
      </div>
    </div>
        </>
    );
};

export default Header;