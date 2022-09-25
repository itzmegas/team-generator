import Image from "next/image";
import styles from "./PlayerList.module.css";

const PlayerList = ({ players }) => (
  <div className={styles.containerList}>
    {players.map(({ name, card }) => (
      <div key={name} className={styles.player}>
        <Image src={card} alt={`${name}-card`} width={309} height={420} />
      </div>
    ))}
  </div>
);

export default PlayerList;
