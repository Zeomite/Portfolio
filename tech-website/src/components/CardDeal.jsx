import wall from "../assets/wall.jpg";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Career
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Internship for freshers and students for career development (1 Month) or (3 Months).
      </p>

      <Button styles={`mt-10`}>Apply Now</Button>
    </div>

    <div className={layout.sectionImg}>
      <img src={wall} alt="wall" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
