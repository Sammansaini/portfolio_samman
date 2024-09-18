import React from "react";
import styles from "./Recommendations.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import recommendations from "../../data/recommendation.json";
import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
  };
  return (
    <section className={styles.section4} >
      <div className={styles.container} >
        <div className={styles.heading} id="recommendations">
          <h2 className={styles.title}>Recommendations</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Lorem ipsum</p>
        </div>
        <div className={styles.carousel}>
          <Slider {...settings}>
            {recommendations.map((recommendation, id) => (
              <RecommendationCard key={id} recommendation={recommendation} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;