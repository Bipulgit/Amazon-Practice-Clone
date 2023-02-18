import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbar/Newnav";
import Maincomponents from "./components/home/Maincomponents";
import Footer from "./components/footer/Footer";
/*eslint-disable */
import Sign_in from "./components/Signup_Signin/Sign_in";
import Sign_up from "./components/Signup_Signin/Sign_up";
import Cart from "./components/Cart/Cart";
import Buynow from "./components/buynow/Buynow";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
// import Typography from "@mui/material/Typography";
// import { Navlink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Navbar />
          <Newnav />

          <Routes>
            <Route path="/" element={<Maincomponents />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/logout" element={<Sign_up />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>

          {/* <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography> */}

          {/* <Maincomponents /> */}
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading....</h2>
        </div>
      )}
    </>
  );
}

export default App;
