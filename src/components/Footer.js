import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>ZOMATO</h6>
              <p class="text-justify">
                Zomato <i>Find Best Restaurants </i>
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Coded Skills</h6>
              <ul class="footer-links">
                <li>
                  <a>ReactJS</a>
                </li>
                <li>
                  <a>Node Js</a>
                </li>
                <li>
                  <a>Express</a>
                </li>
                <li>
                  <a>MongoDB</a>
                </li>
                <li>
                  <a>JavaScript</a>
                </li>
                <li>
                  <a>Html</a>
                </li>
                <li>
                  <a>Css</a>
                </li>
                <li>
                  <a>Bootstrap</a>
                </li>
                <li>
                  <a>Material UI</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Info</h6>
              <ul class="footer-links">
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Add restaurant</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#">sumanth</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
