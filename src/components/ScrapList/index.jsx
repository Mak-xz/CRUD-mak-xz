import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrapContext } from "../../providers";
import { ScrapCard } from "./ScrapCard";
import styles from "./style.module.scss";

export const ScrapList = () => {
  const { scrapList } = useContext(ScrapContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className="title">Lista Scraps</h1>
        <Link className="btn solid" to="/scraps">
          Deixar Scrap
        </Link>
      </div>
      <ul>
        {scrapList.map((scrap) => (
          <ScrapCard key={scrap.id} scrap={scrap} />
        ))}
      </ul>
    </div>
  );
};
