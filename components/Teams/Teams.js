import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Teams.module.css";
import { map, reduce, shuffle } from "lodash";

const Teams = ({ players, showTeams }) => {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  return (
    <motion.div className={styles.teams}>
      {map(players, (team) => (
        <div className={!showTeams ? styles.noTeams : styles.shuffleTeams}>
          {map(team, ({ name, card, position }, index) => {
            return (
              <motion.li
                key={name}
                layout
                transition={spring}
                className={index !== 0 ? styles.player : styles.headItem}
                style={position}
              >
                <Image
                  src={card}
                  alt={`${name}-card`}
                  width={170}
                  height={232}
                />
              </motion.li>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
};

export default Teams;
