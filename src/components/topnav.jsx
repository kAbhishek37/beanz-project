import React, { useState } from "react";
import "../cssofcomponents/topnav.css";
import { Link, useNavigate } from "react-router-dom";

function TopNav() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitFormData = (e) => {
    e.preventDefault();
    navigate("/search?search=" + keyword);
    // window.location.reload();
    document.getElementById("myOverlay").style.display = "none";
  };
  const onSearchSubmit = (e) => {
    setKeyword(e.target.value);
  };

  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <nav className="navbar navmaincon navbar-expand-lg navbar-dark bg-dark navbar-custom">
      <Link className="navbar-brand" to="/">
        <img
          src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
          width="90px"
          height="45px"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/shopcoffee">
              Shop Coffee
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ourroasters">
              Our Roasters
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/baristaschoice">
              Barista's Choice
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/coffeelowdown">
              Coffee Lowdown
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/ourstory">
              Our Story
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="form-control searchfield mr-sm-2"
        placeholder="Search"
        onClick={openSearch}
      >
        <img
          src="data:image/svg+xml, %3Csvg version='1.1' id='Search-Icon' x='0' y='0' viewBox='0 0 50 50' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle/%3E%3Cg id='Search-Icon-symbol' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1299.000000, -25.000000)'%3E%3Cg id='icon30/Search-Icon1' transform='translate(1299.000000, 25.000000)'%3E%3Cg fill='%23FFFFFF' id='Oval-Copy-Search-Icon'%3E%3Ccircle cx='25' cy='25' r='25'%3E%3C/circle%3E%3C/g%3E%3Cg fill='%23008384'%3E%3Cpath d='M23.5,10.85 C17.0660725,10.85 11.85,16.0660725 11.85,22.5 C11.85,28.9339275 17.0660725,34.15 23.5,34.15 C29.9339275,34.15 35.15,28.9339275 35.15,22.5 C35.15,16.0660725 29.9339275,10.85 23.5,10.85 Z M23.5,13.15 C28.6636725,13.15 32.85,17.3363275 32.85,22.5 C32.85,27.6636725 28.6636725,31.85 23.5,31.85 C18.3363275,31.85 14.15,27.6636725 14.15,22.5 C14.15,17.3363275 18.3363275,13.15 23.5,13.15 Z' id='Stroke-11' fill='%23007584' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M30.1868272,29.1868272 C30.6038514,28.769803 31.2614736,28.7400156 31.7128689,29.0974649 L31.8131728,29.1868272 L38.8131728,36.1868272 C39.2622757,36.6359301 39.2622757,37.3640699 38.8131728,37.8131728 C38.3961486,38.230197 37.7385264,38.2599844 37.2871311,37.9025351 L37.1868272,37.8131728 L30.1868272,30.8131728 C29.7377243,30.3640699 29.7377243,29.6359301 30.1868272,29.1868272 Z' id='Stroke-33' fill='%23007584' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          height="35"
          width="35"
        />
        Search
      </button>
      <a href="#" target="blank">
        <img
          className="ricon"
          src="data:image/svg+xml, %3Csvg version='1.1' id='user-icon' x='0' y='0' viewBox='0 0 50 50' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle/%3E%3Cg id='user-icon-symbol' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1299.000000, -25.000000)'%3E%3Cg id='icon30/user-icon' transform='translate(1299.000000, 25.000000)'%3E%3Cg fill='%23FFFFFF' id='Oval-Copy-user-icon-one'%3E%3Ccircle cx='25' cy='25' r='25'%3E%3C/circle%3E%3C/g%3E%3Cg id='user-icon-one-Group-6' transform='translate(11.000000, 9.000000)' fill='%23008384'%3E%3Cpath d='M13.4867361,0 C8.93336368,0 5.36724992,3.84337602 5.36724992,8.74994751 C5.36724992,10.8196515 6.03801273,12.7948772 7.22715147,14.3556582 C4.08303218,16.3699349 1.8897029,20.0747428 0.102738661,26.2271678 C-0.0874193409,26.8847365 0.0324062493,27.4226328 0.0975288527,27.7098467 C0.0910165924,27.6733151 0.0884116882,27.5788369 0.0871092362,27.4969557 C0.0962264006,28.882637 1.2593161,30 2.69201337,30 L24.3947722,30 C25.091584,30 25.7584395,29.7316817 26.2481615,29.2517321 C26.7378834,28.7730422 27.007491,28.1242914 26.9998416,27.4503464 C26.993164,26.9905522 26.9384611,26.5874449 26.83166,26.2208692 C25.2687175,20.8393869 23.4452846,16.699979 20.0263479,14.4110855 C21.2506529,12.838967 21.9422549,10.8423263 21.9422549,8.74994751 C21.9422549,3.92525719 18.1495145,0 13.4867361,0 M13.4867361,2.51942053 C16.6256456,2.51942053 19.3373508,5.25677094 19.3373508,8.74994751 C19.3373508,10.8775982 18.3839559,12.8515641 16.7858472,14.0331724 C16.5032151,14.2410246 16.3586429,14.5798866 16.4055312,14.9212681 C16.4524195,15.2613899 16.6842559,15.552383 17.0137763,15.6821331 C20.8117265,17.1837077 22.6833502,21.2538316 24.3244398,26.9048919 C24.385655,27.1165232 24.3934697,27.3672055 24.3947722,27.4805795 L2.69201337,27.4805795 C2.69071092,27.2916229 2.58130495,27.0056687 2.60865644,26.9074113 C4.51805117,20.3355028 6.80124964,16.9745958 10.2410256,15.6682763 C10.5744533,15.5423053 10.8101971,15.2525719 10.8596903,14.9111904 C10.9104859,14.5685492 10.7672162,14.2271678 10.4832816,14.0155364 C8.90080238,12.8339282 7.97215405,10.8637413 7.97215405,8.74994751 C7.97215405,5.25677094 10.3478266,2.51942053 13.4867361,2.51942053' id='user-icon-one-Fill-1'%3E%3C/path%3E%3Cpath d='M15.65,15.0599369 C13.6410112,14.9250789 11.65,15.0599369 11.65,15.0599369 C11.65,15.0599369 13.6410112,17.1750789 15.65,15.0599369' id='Fill-4'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          width="37px"
          height="37px"
        />
      </a>
      <a href="#" target="blank">
        <img
          className="ricon"
          src="data:image/svg+xml, %3Csvg version='1.1' id='cart-nav' x='0' y='0' viewBox='0 0 50 50' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='cart-nav-symbol' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1370.000000, -25.000000)'%3E%3Cg id='icon30/cart' transform='translate(1370.000000, 24.000000)'%3E%3Cg id='cart-nav-symbol-Group'%3E%3Cg transform='translate(0.000000, 0.212607)'%3E%3Ccircle id='Oval' fill='%23FFFFFF' cx='25' cy='25.7873933' r='25'%3E%3C/circle%3E%3Cpath d='M10.0053199,15.1207162 C9.45301993,15.1207162 9.00531993,15.5684333 9.00531993,16.1207162 C9.00531993,16.673 9.45301993,17.1207162 10.0053199,17.1207162 L13.19282,17.1207162 L16.63032,33.3394667 C16.76632,33.95 17.1664533,34.4581333 17.6719867,34.4541498 L34.3386533,34.4541498 C34.8669533,34.4614 35.352885,33.9824333 35.352885,33.4540667 C35.352885,32.9257 34.8669533,32.4466 34.3386533,32.4540667 L18.4844867,32.4540667 L18.0573867,30.4540333 L35.671985,30.4540333 C36.1197183,30.4507 36.5427517,30.1097 36.6407183,29.6728 L38.9740517,19.6728 C39.104085,19.0924433 38.6000517,18.4583133 38.0053199,18.45405 L15.5261533,18.45405 L14.9844867,15.9123833 C14.8898533,15.46835 14.45932,15.12025 14.0053199,15.1207162 L10.0053199,15.1207162 Z M15.94282,20.45405 L36.7449183,20.45405 L34.88032,28.4540333 L17.64072,28.4540333 L15.94282,20.45405 Z M21.00532,35.1207333 C19.17622,35.1207333 17.6719867,36.6249333 17.6719867,38.4540667 C17.6719867,40.2831667 19.17622,41.7874 21.00532,41.7874 C22.83442,41.7874 24.3386533,40.2831667 24.3386533,38.4540667 C24.3386533,36.6249667 22.83442,35.1207333 21.00532,35.1207333 Z M31.00532,35.1207333 C29.17622,35.1207333 27.6719867,36.6249333 27.6719867,38.4540667 C27.6719867,40.2831667 29.17622,41.7874 31.00532,41.7874 C32.83442,41.7874 34.3386533,40.2831667 34.3386533,38.4540667 C34.3386533,36.6249667 32.83442,35.1207333 31.00532,35.1207333 Z M21.00532,37.1207333 C21.7535533,37.1207333 22.3386533,37.7058333 22.3386533,38.4540667 C22.3386533,39.2023 21.7535533,39.7874 21.00532,39.7874 C20.2571533,39.7874 19.6719867,39.2022667 19.6719867,38.4540667 C19.6719867,37.7058667 20.2571533,37.1207333 21.00532,37.1207333 Z M31.00532,37.1207333 C31.7535533,37.1207333 32.3386533,37.7058333 32.3386533,38.4540667 C32.3386533,39.2023 31.7535533,39.7874 31.00532,39.7874 C30.2571533,39.7874 29.6719867,39.2022667 29.6719867,38.4540667 C29.6719867,37.7058667 30.2571533,37.1207333 31.00532,37.1207333 Z' id='Shape1' stroke='%2339BBBB' stroke-width='0.05' fill='%23008384' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          width="37px"
          height="37px"
        />
      </a>
      <Link
        to={{
          pathname: "/search/parameter-value",
        }}
        target="blank"
      >
        <img
          className="ricon"
          src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/container_1402549746/image.coreimg.svg/1650305163077/location-usa.svg"
          width="37px"
          height="37px"
        />
      </Link>
      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          ×
        </span>
        <div className="overlay-content">
          <div className="searchbarline">
            <form onSubmit={submitFormData}>
              <input
                type="text"
                placeholder="Search for beanz or roasters..."
                onChange={onSearchSubmit}
                name="search"
              />
              <span className="insidesearchimg">
                <img
                  src="data:image/svg+xml, %3Csvg version='1.1' id='Search-Icon' x='0' y='0' viewBox='0 0 50 50' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle/%3E%3Cg id='Search-Icon-symbol' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1299.000000, -25.000000)'%3E%3Cg id='icon30/Search-Icon1' transform='translate(1299.000000, 25.000000)'%3E%3Cg fill='%23FFFFFF' id='Oval-Copy-Search-Icon'%3E%3Ccircle cx='25' cy='25' r='25'%3E%3C/circle%3E%3C/g%3E%3Cg fill='%23008384'%3E%3Cpath d='M23.5,10.85 C17.0660725,10.85 11.85,16.0660725 11.85,22.5 C11.85,28.9339275 17.0660725,34.15 23.5,34.15 C29.9339275,34.15 35.15,28.9339275 35.15,22.5 C35.15,16.0660725 29.9339275,10.85 23.5,10.85 Z M23.5,13.15 C28.6636725,13.15 32.85,17.3363275 32.85,22.5 C32.85,27.6636725 28.6636725,31.85 23.5,31.85 C18.3363275,31.85 14.15,27.6636725 14.15,22.5 C14.15,17.3363275 18.3363275,13.15 23.5,13.15 Z' id='Stroke-11' fill='%23007584' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M30.1868272,29.1868272 C30.6038514,28.769803 31.2614736,28.7400156 31.7128689,29.0974649 L31.8131728,29.1868272 L38.8131728,36.1868272 C39.2622757,36.6359301 39.2622757,37.3640699 38.8131728,37.8131728 C38.3961486,38.230197 37.7385264,38.2599844 37.2871311,37.9025351 L37.1868272,37.8131728 L30.1868272,30.8131728 C29.7377243,30.3640699 29.7377243,29.6359301 30.1868272,29.1868272 Z' id='Stroke-33' fill='%23007584' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                  height="40"
                  width="40"
                  alt="loading failed"
                />
              </span>
            </form>
          </div>
          <hr className="line"></hr>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
