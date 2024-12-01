import Image from "next/image";
import styles from "./page.module.scss";
import omletteImage from "@/public/assets/images/image-omelette.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <Image
            src={omletteImage}
            alt={"omlette Image"}
            width={1312}
            height={600}
            priority={true}
            className={styles.image}
          />
          <div className={styles.contentContainer}>
            <h1 className={styles.heading}>Simple Omelette Recipe</h1>
            <p className={styles.introSection}>
              An easy and quick dish, perfect for any meal. This classic omlette
              combines beaten eggs cooked to perfection, optionally filled with
              your choice of cheese, vegetables,or meats.
            </p>

            <div className={styles.preparationContent}>
              <h3 className={styles.preparationContentHeading}>
                Preparation time
              </h3>
              <div className={styles.preparationTime}>
                <ul>
                  <li>
                    <strong className={styles.strongColor}>Total:</strong>{" "}
                    Approximately 10 minutes
                  </li>
                  <li>
                    <strong className={styles.strongColor}>
                      {" "}
                      Preparation:
                    </strong>{" "}
                    5 minutes
                  </li>
                  <li>
                    <strong className={styles.strongColor}>Cooking:</strong> 5
                    minutes
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.ingredientsParentContainer}>
              <h3 className={styles.heading}>Ingredients</h3>{" "}
              <div className={styles.ingredientsList}>
                <ul>
                  <li>2-3 large eggs</li>
                  <li>Salt, to taste</li>
                  <li>Pepper, to taste</li>
                  <li>1 tablespoon of butter or oil</li>
                  <li>
                    Optional fillings: cheese, diced vegetables, cooked meats,
                    herbs
                  </li>
                </ul>
              </div>
            </div>
            <hr className={styles.lineBreak} />

            <div className={styles.instructionsContainer}>
              <h3 className={styles.mainTitle}>Instructions</h3>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
