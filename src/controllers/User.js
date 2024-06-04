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

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error on server' });
  }
}
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error on server' });
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findOneAndUpdate({ _id: id }, req.body)
    res.status(200).send({ ok: 'Successful' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error on server' });
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    res.status(200).send({ ok: 'Successful' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error on server' });
  }
}
module.exports = {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
