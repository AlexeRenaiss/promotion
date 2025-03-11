import Footer from "../../components/Footer";
import MoreWayToEarn from "../../components/MoreWayToEarn";
import Navbar from "../../components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
        <MoreWayToEarn title={"Take a Quiz"} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
