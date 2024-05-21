const User = require("../db/Schemas/User");

const register = async (req, res) => {
  try {
    const { cellphone, dni, password, name, lname, type } = req.body;
    const userFound = await User.findOne({ $or: [{ cellphone }, { dni }] });
    if (userFound)
      return res.status(400).send({ error: "Telefono o DNI ya registrado" });
    const user = new User({ cellphone, dni, password, name, lname, type });
    await user.save();
    return res.status(200).json({ ok: "Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { cellphone, password } = req.body;
    const user = await User.findOne({ cellphone });
    if (!user) return res.status(400).send({ error: "Usuario no encontrado" });
    if (user.password != password)
      return res.status(400).send({ error: "Contraseña incorrecta" });
    return res.status(200).send({ token: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error on server" });
  }

};

module.exports = {
  register,
  login,
};
