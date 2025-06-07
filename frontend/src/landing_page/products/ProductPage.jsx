import React from "react";
import Hero from "../products/Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  return (
    <>
      <Hero />
      <hr />
      <LeftSection
        imageURL="images/kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps?hl=en_IN"
        appStore="https://www.apple.com/in/app-store/"
      />
      <RightSection
      imageURL="images/console.png"
      productTitle="Console"
      productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       learnMore="/"
      />
        <LeftSection
        imageURL="images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps?hl=en_IN"
        appStore="https://www.apple.com/in/app-store/"
      />
  <RightSection
      imageURL="images/kiteconnect.png"
      productTitle="Kite Connect API"
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       learnMore="/"
      />
        <LeftSection
        imageURL="images/varsity.png"
        productTitle="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps?hl=en_IN"
        appStore="https://www.apple.com/in/app-store/"
      />
       <p className="fs-5 mt-5 mb-5 text-center">
        Want to know more about our technology stack? Check out the <a href="/" style={{textDecoration: "none"}}>E-Trade.tech</a> blog.
       </p>
      <Universe />
    </>
  );
}

export default ProductPage;
