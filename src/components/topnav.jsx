import React, { Component } from "react";
import "../cssofcomponents/topnav.css";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navmain bg-dark navbar-dark row">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
            width="90px"
            height="45px"
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item nbitem">
            <a className="nav-link mbmenutext" href="#">
              Shop Coffee
            </a>
          </li>
          <li className="nav-item nbitem">
            <a className="nav-link mbmenutext" href="#">
              Our Roasters
            </a>
          </li>
          <li className="nav-item nbitem">
            <a className="nav-link mbmenutext" href="#">
              Barista's Choice
            </a>
          </li>
          <li className="nav-item nbitem">
            <a className="nav-link mbmenutext" href="#">
              Coffee Lowdown
            </a>
          </li>
          <li className="nav-item nbitem">
            <a className="nav-link mbmenutext" href="#">
              Our Story
            </a>
          </li>
        </ul>

        <div class="iconcon bg-right">
          <div class="navsearch">
            <input type="text" placeholder=" Search" class="searchfield" />
          </div>
          <a href="#" target="blank">
            <img
              class="ricon"
              src="/content/dam/secondprojectdemo/download1.svg"
              width="37px"
              height="37px"
            />
          </a>
          <a href="#" target="blank">
            <img
              class="ricon"
              src="/content/dam/secondprojectdemo/download.svg"
              width="37px"
              height="37px"
            />
          </a>
          <a href="#" target="blank">
            <img
              class="ricon"
              src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/container_1402549746/image.coreimg.svg/1650305163077/location-usa.svg"
              width="37px"
              height="37px"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default TopNav;
