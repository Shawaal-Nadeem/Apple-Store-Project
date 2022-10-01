import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Generations from "./generation";
import Navbar from "./navbar";
import GenOne from "./iPhoneGen/iPhone1Gen";
import Iphone3g from "./iPhoneGen/iphone3g";
import Iphone3gs from "./iPhoneGen/iphone3gs";
import Iphone4 from "./iPhoneGen/iphone4";
import Iphone4s from "./iPhoneGen/iphone4s";
import Iphone5 from "./iPhoneGen/iphone5";
import Iphone5s from "./iPhoneGen/iphone5s";
import Iphone5c from "./iPhoneGen/iphone5c";
import Iphone6 from "./iPhoneGen/iphone6";
import Iphone6plus from "./iPhoneGen/iphone6plus";
import Iphone6splus from "./iPhoneGen/iphone6splus";
import Iphone6s from "./iPhoneGen/iphone6s";
import Iphonese from "./iPhoneGen/iphonese";
import Iphone7 from "./iPhoneGen/iphone7";
import Iphone7plus from "./iPhoneGen/iphone7plus";
import Iphone8 from "./iPhoneGen/iphone8";
import Iphone8plus from "./iPhoneGen/iphone8plus";
import Iphonex from "./iPhoneGen/iphonex";
import Iphonexs from "./iPhoneGen/iphonexs";
import Iphonexsmax from "./iPhoneGen/iphonexsmax";
import Iphonexr from "./iPhoneGen/iphonexr";
import Iphone11 from "./iPhoneGen/iphone11";
import Iphone11pro from "./iPhoneGen/iphone11pro";
import Iphone11promax from "./iPhoneGen/iphone11promax";
import Iphonese2ndgen from "./iPhoneGen/iphonese2ndgen";
import Iphone12mini from "./iPhoneGen/iphone12mini";
import Iphone12 from "./iPhoneGen/iphone12";
import Iphone12pro from "./iPhoneGen/iphone12pro";
import Iphone12promax from "./iPhoneGen/iphone12promax";
import Iphone13 from "./iPhoneGen/iphone13";
import Iphone13mini from "./iPhoneGen/iphone13mini";
import Iphone13pro from "./iPhoneGen/iphone13pro";
import Iphone13promax from "./iPhoneGen/iphone13promax";
import Iphonese3rdgen from "./iPhoneGen/iphonese3rdgen";
import Iphone14 from "./iPhoneGen/iphone14";
import Iphone14pro from "./iPhoneGen/iphone14pro";
import Iphone14promax from "./iPhoneGen/iphone14promax";
function RouterConfig() {
    return (
        <div>
      <Router>
<Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route  path="/about" element={<About/>}></Route>
            <Route exact path="/all-generations" element={<Generations/>}></Route>
            <Route  path="/Iphone-1st-Generation" element={<GenOne/>}></Route>
            <Route  path="/Iphone-3G" element={<Iphone3g/>}></Route>
            <Route  path="/Iphone-3Gs" element={<Iphone3gs/>}></Route>
            <Route  path="/Iphone-4" element={<Iphone4/>}></Route>
            <Route  path="/Iphone-4s" element={<Iphone4s/>}></Route>
            <Route  path="/Iphone-5" element={<Iphone5/>}></Route>
            <Route  path="/Iphone-5s" element={<Iphone5s/>}></Route>
            <Route  path="/Iphone-5c" element={<Iphone5c/>}></Route>
            <Route  path="/Iphone-6" element={<Iphone6/>}></Route>
            <Route  path="/Iphone-6-Plus" element={<Iphone6plus/>}></Route>
            <Route  path="/Iphone-6s" element={<Iphone6s/>}></Route>
            <Route  path="/Iphone-6s-Plus" element={<Iphone6splus/>}></Route>
            <Route  path="/Iphone-SE" element={<Iphonese/>}></Route>
            <Route  path="/Iphone-7" element={<Iphone7/>}></Route>
            <Route  path="/Iphone-7-Plus" element={<Iphone7plus/>}></Route>
            <Route  path="/Iphone-8" element={<Iphone8/>}></Route>
            <Route  path="/Iphone-8-Plus" element={<Iphone8plus/>}></Route>
            <Route  path="/Iphone-X" element={<Iphonex/>}></Route>
            <Route  path="/Iphone-XS" element={<Iphonexs/>}></Route>
            <Route  path="/Iphone-XS-Max" element={<Iphonexsmax/>}></Route>
            <Route  path="/Iphone-XR" element={<Iphonexr/>}></Route>
            <Route  path="/Iphone-11" element={<Iphone11/>}></Route>
            <Route  path="/Iphone-11-Pro" element={<Iphone11pro/>}></Route>
            <Route  path="/Iphone-11-Pro-Max" element={<Iphone11promax/>}></Route>
            <Route  path="/Iphone-SE-2nd-Generation" element={<Iphonese2ndgen/>}></Route>
            <Route  path="/Iphone-12-Mini" element={<Iphone12mini/>}></Route>
            <Route  path="/Iphone-12" element={<Iphone12/>}></Route>
            <Route  path="/Iphone-12-Pro" element={<Iphone12pro/>}></Route>
            <Route  path="/Iphone-12-Pro-Max" element={<Iphone12promax/>}></Route>
            <Route  path="/Iphone-13" element={<Iphone13/>}></Route>
            <Route  path="/Iphone-13-Mini" element={<Iphone13mini/>}></Route>
            <Route  path="/Iphone-13-Pro" element={<Iphone13pro/>}></Route>
            <Route  path="/Iphone-13-Pro-Max" element={<Iphone13promax/>}></Route>
            <Route  path="/Iphone-SE-3rd-Generation" element={<Iphonese3rdgen/>}></Route>
            <Route  path="/Iphone-14" element={<Iphone14/>}></Route>
            <Route  path="/Iphone-14-Pro" element={<Iphone14pro/>}></Route>
            <Route  path="/Iphone-14-Pro-Max" element={<Iphone14promax/>}></Route>
        </Routes>
      </Router>
      </div>
    );
  }
  
  export default RouterConfig;
