import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
} from "reactstrap";
const image1 = require("../assets/download.jpg");
const image2 = require("../assets/download.jpg");
const image3 = require("../assets/download.jpg");

const items = [
  {
    src: image1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: image1,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: image1,
    altText: "Slide 3",
    caption: "Slide 3",
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
      height: "100%",
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
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
  
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col">
              <h1>Agro Connect</h1>
              <p>
                The main aim of this website is to educate farmers and solve all
                their problems by using technology. Even though technology has
                gone too far beyond, technology is failing to reach
                everyone,especially farmers.So to provide an alternative avenue
                to sell their produce .So here is an platform which provides
                farmers platform to directly contact the buyer, so that there is
                no middle man making the profit. So in this websitee we are
                providing various buyers details whih includes their contact
                number so that farmers will be benefited.
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="container">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
    </div>
  );
};

export default Home;
