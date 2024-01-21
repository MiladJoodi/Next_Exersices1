const handler = (req, res) => {
  const { params } = req.query;

  console.log(params);

  res.status(200).json({ message: "This Response is for slug api !!" });
};

export default handler;
