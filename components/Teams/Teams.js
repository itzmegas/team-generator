import Image from "next/image";
import styles from "./Teams.module.css";

const Teams = ({ teams: { team1, team2 } }) => (
  <div className={styles.teams}>
    <div className={styles.team}>
      {team1.map(({ name, card }) => (
        <div key={name} className={styles.player}>
          <Image src={card} alt={`${name}-card`} width={309} height={420} />
        </div>
      ))}
    </div>

    <div className={styles.team}>
      {team2.map(({ name, card }) => (
        <div key={name} className={styles.player}>
          <Image src={card} alt={`${name}-card`} width={309} height={420} />
        </div>
      ))}
    </div>
  </div>
);

export default Teams;
