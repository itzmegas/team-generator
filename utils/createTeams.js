import { reduce } from "lodash";

export const createTeams = (players) =>
  reduce(
    players,
    (acc, player, index) => {
      index < players.length / 2 ? acc[0].push(player) : acc[1].push(player);

      return acc;
    },
    [[], []]
  );
