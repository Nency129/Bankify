import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Front from "../component/Front";
import Menu from "../component/Menu";
import Third from "../component/Third";
import Fourth from "../component/Fourth";
import Fivth from "../component/Fivth";
import Sixth from "../component/Sixth";

function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <Front/>
      <Menu/>
      <Third/>
      <Fourth/>
      <Fivth/>
      <Sixth/>
      <Footer />
    </div>
  );
}

export default Home;
