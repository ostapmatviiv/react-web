import React from 'react'
import "../style.css"
import Worldmap from "../Images/worldmap.png" 

const Footer1=()=>(
  <div class="wrapper row4 card">
    <footer id="footer" class="clear">
      <div class="one_third first">
        <figure class="center"><img class="btmspace-15" src={Worldmap} alt="" />
          <figcaption><a href="#">Find Us With Google Maps &raquo;</a></figcaption></figure>
      </div>
      <div class="one_third">
        <address>Pharmacy 123<br />
        Naukova 4B<br />
        Lviv<br />
        79053<br />
          <br />
          <i className="fa fa-phone pright-10"></i> xxxx xxxx xxxxxx<br />
          <i className="fa fa-envelope-o pright-10"></i> <a href="#">contact@domain.com</a>
        </address>
      </div>
      <div class="one_third">
        <p className="nospace btmspace-10">Stay Up to Date With What's Happening</p>
        <ul className="faico clear">
          <li><a class="faicon-twitter" href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a class="faicon-facebook" href="#"><i class="fab fa-facebook-square"></i></a></li>
          <li><a class="faicon-insta" href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  </div>
)

export default Footer1;