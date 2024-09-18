import React from "react";
import styles from "./RecommendationCard.module.css";
import { getImageUrl } from "../../utils";

const RecommendationCard = ({
  recommendation: { rating, review, description, name, title, imageSrc },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.rating}>{"★".repeat(rating)}</div>
      <h3 className={styles.review}>{review}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.userInfo}>
        <img
          src={getImageUrl(imageSrc)}
          alt={name}
          className={styles.userImage}
        />
        <div>
          <h4 className={styles.userName}>{name}</h4>
          <p className={styles.userTitle}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;