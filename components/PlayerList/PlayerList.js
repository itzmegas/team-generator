import Image from "next/image";

const PlayerList = ({ players }) => (
  <>
    {players.map(({ name, card }) => (
      <div key={name}>
        <Image src={card} alt={`${name}-card`} width={309} height={420} />
      </div>
    ))}
  </>
);

export default PlayerList;
