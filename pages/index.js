import { useState } from "react";
import { shuffle } from "lodash";
import Head from "next/head";
import Teams from "../components/Teams";
import { createTeams } from "../utils/createTeams";
import styles from "../styles/Home.module.css";
import { Button } from "reactstrap";

const Home = () => {
  const players = [
    { id: 1, name: "javi", card: "/assets/javi.png" },
    { id: 2, name: "manu", card: "/assets/manu.png" },
    { id: 3, name: "alan", card: "/assets/alan.png" },
    { id: 4, name: "megas", card: "/assets/megas.png" },
    { id: 5, name: "truco", card: "/assets/truco.png" },
    { id: 6, name: "nicog", card: "/assets/nico.png" },
    { id: 7, name: "erik", card: "/assets/erik.png" },
    { id: 8, name: "nahuel", card: "/assets/nahuel.png" },
    { id: 9, name: "maxito", card: "/assets/maxito.png" },
    { id: 10, name: "alexis", card: "/assets/alexis.png" },
  ];
  const [shufflePlayers, setShufflePlayers] = useState(createTeams(players));
  const [showTeams, setShowTeams] = useState(false);

  const sortTeams = () => {
    setTimeout(() => {
      setShufflePlayers(createTeams(shuffle(players)));
    }, 700);
    setShowTeams(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Generador de equipos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Teams players={shufflePlayers} showTeams={showTeams} />
        <Button
          color="danger"
          className={styles.button}
          onClick={() => sortTeams()}
        >
          Sortear Equipos
        </Button>
      </main>
    </div>
  );
};

export default Home;
