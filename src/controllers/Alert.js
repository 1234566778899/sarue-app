
const Alert = require('../db/Schemas/Alert');
const User = require('../db/Schemas/User');

const sendAlert = async (req, res) => {
    try {
        const { address, latitude, user, longitude, incidence } = req.body;
        const userFound = await User.findOne({ _id: user });
        if (!userFound) return res.status(400).send({ error: 'Usuario no encontrado' });

        const alert = new Alert({ dni: userFound.dni, name: userFound.name, incidence, lname: userFound.lname, address, latitude, longitude, user })
        await alert.save();
        res.status(200).send({ ok: 'Enviado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error on server' });
    }
}

const getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.status(200).send(alerts);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error on server' });
    }
}

const deleteAlert = async (req, res) => {
    try {
        const { id } = req.params;
        await Alert.deleteOne({ _id: id });
        res.status(200).send({ ok: 'Successful' });
    } catch (error) {
        res.status(500).send({ error: 'Error on server' });
    }
}

const updateState = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await Alert.findOneAndUpdate({ _id: id }, { status });
        res.status(200).send({ ok: 'Successful' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error on server' });
    }
}

module.exports = {
    sendAlert,
    getAlerts,
    deleteAlert,
    updateState
}