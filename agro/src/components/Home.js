import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
} from "reactstrap";
const image1 = require("../assets/s4.jpeg");
const image2 = require("../assets/s2.jpeg");
const image3 = require("../assets/s3.jpeg");
const image4 = require("../assets/download.jpg");

const items = [
  {
    src: image1,
    caption: "Local Farm Produce",
  },
  {
    src: image2,

    caption: "Green and Fresh",
  },
  {
    src: image3,

    caption: "Tech Revolutionizing",
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const styles = {
    stretch: {
      width: "100%",
      height: "450px",
      margin: 5,
    },
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={styles.stretch} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Jumbotron>
        <div className="container">
        <h1 className="text-center"><strong>Agricultureify</strong></h1>
        </div>
        <div className="container">
          <div className="row row-header">
            <div className="col-9">
              <h4><strong>
              The main aim of this website is to educate farmers and solve all their problems by using technology. Even though technology has gone too far beyond, technology is failing to reach everyone, especially farmers. So to provide an alternative avenue to sell their produce. So here is a platform that provides farmers a platform to directly contact the buyer, so that no middle man is making the profit. So on this website, we are
                providing various buyers' and farmers' details which include their contact numbers so that both farmers and buyers will be benefited mutually.
                </strong></h4>
            </div>
            <div className="col">
          <img
            src={image4}
            alt="Logoo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
          </div>
        </div>
      </Jumbotron>
      <div className="container">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="col-8 offset-2"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <div className="container">
        <div className="row row-content">
          <div className="col">
          <strong>
            <p>
            Over the years, the system has created several layers of intermediaries, lengthening the supply chain and increasing the opportunity for cartels to form, which in turn drive prices down for farmers. Farmers earn only 15 to 20% of the market price the consumer pays.The middle man be it the wholesalers or retailers gobble up the remaining profit margin
              The main reasons for this exploitation experienced by farmers are , lack of infrastructure for farmers to store their produce to bargain their prices, they cannot organise them selves as one force, The small holdings is another drawback for farmers to demand the right price.
              The best way is to give farmers the power to sell  or giving them an opportunity which connects them to consumers directly rather than middle man minting farmers money.
              If the consumer knows where to find the farm produce he may buy directly from the farmer himself.
            </p>
              </strong>
              <p>
              <strong>
              We connect farmers to end consumers direct and help each other trade the grains at much better rates. It ensure that farmers get the fair rate of their grains. More than market and also for consumers it ensure that they get best quality grains at best price as compared to what they buy from super markets.
              Also If you're a farmer and want to get your crops, food grains at better rates than local mandi/traders we are here to help you.
              </strong>
              </p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
