module.exports = async (req, res) => {
  await res.status(200).json("add product route called successfully");
};
