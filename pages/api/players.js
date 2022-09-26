// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req, res) => {
  res.status(200).json([
    { id: 1, name: "javi", card: "/assets/javi.png" },
    { id: 2, name: "manu", card: "/assets/manu.png" },
    { id: 3, name: "alan", card: "/assets/alan.png" },
    { id: 4, name: "megas", card: "/assets/megas.png" },
    { id: 5, name: "truco", card: "/assets/truco.png" },
    { id: 6, name: "nicog", card: "/assets/nico.png" },
    { id: 7, name: "erik", card: "/assets/erik.png" },
    { id: 8, name: "nahuel", card: "/assets/nahuel.png" },
    //{ id: 9, name: "cubito", card: "/assets/cubito.png" },
    { id: 10, name: "maxito", card: "/assets/maxito.png" },
    { id: 11, name: "alexis", card: "/assets/alexis.png" },
  ]);
};
