import { useState } from "react";
import Image from "next/image";

const PlayerList = () => {
  const [players, setPlayers] = useState([
    { name: "javi", card: "/assets/javi.png" },
  ]);

  return (
    <>
      {players.map(({ name, card }) => (
        <div key={name}>
          <Image src={card} alt={`${name}-card`} width={309} height={420} />
        </div>
      ))}
    </>
  );
};

export default PlayerList;
