// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req, res) => {
  res.status(200).json([{ id: 1, name: "javi", card: "/assets/javi.png" }]);
};
