import styles from "../Stars/Stars.module.css";
import { v4 as uuidv4 } from "uuid";
import Star from "../Star/Star";

export default function Stars({ count = 0 }) {
  if (typeof count !== "number" || count > 5 || count <= 0) {
    return;
  }
  const components = Array(Math.round(count)).fill(null);

  return (
    <div className={styles.starsContainer}>
      <ul className={styles.cardBodyStars}>
        {components.map((_, index) => (
          <Star key={index} />
        ))}
      </ul>
    </div>
  );
}
