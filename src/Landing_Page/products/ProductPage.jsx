import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import "./productPage.css";

function ProductPage() {
  return (
    <>
      <Hero />

      <div className="space"></div>
      <LeftSection
        imgUrl="\images\kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more"
      />
      <RightSection
        imgUrl="\images\console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn More"
      />

      <LeftSection
        imgUrl="\images\coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
      />
      <RightSection
        imgUrl="\images\console.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect"
      />

      <LeftSection
        imgUrl="\images\varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <Universe />
    </>
  );
}

export default ProductPage;
