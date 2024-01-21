const handler = (req, res) => {
  console.log(req.query.params);

  return res.json({
    message: "This Response is for slug in api folder root !!",
  });
};

export default handler;
