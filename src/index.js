import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/homepage";
import SearchComponent from "./pages/searchcomponent";
import BaristasChoice from "./pages/baristaschoice";
import CoffeeLowdown from "./pages/coffeelowdown";
import OurRoasters from "./pages/ourroasters";
import OurStory from "./pages/ourstory";
import NotFound from "./pages/notfound";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "./components/topnav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TopNav />
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/search/:search" element={<SearchComponent />}></Route>
      <Route exact path="/search" element={<SearchComponent />}></Route>
      <Route exact path="/shopcoffee" element={<SearchComponent />} />
      <Route exact path="/baristaschoice" element={<BaristasChoice />} />
      <Route exact path="/coffeelowdown" element={<CoffeeLowdown />} />
      <Route exact path="/ourroasters" element={<OurRoasters />} />
      <Route exact path="/ourstory" element={<OurStory />} />
      <Route exact path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
