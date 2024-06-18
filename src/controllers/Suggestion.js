const Suggestion = require('../db/Schemas/Suggestion');
const User = require('../db/Schemas/User');

const createSuggestion = async (req, res) => {
    try {
        const { user } = req.body;
        const userFound = await User.findOne({ _id: user });
        if (!userFound) return res.status(400).send({ error: 'Usuario no encontrado' });
        const sugg = new Suggestion({ ...req.body, status: 0, name: userFound.name, lname: userFound.lname, dni: userFound.dni });
        await sugg.save();
        res.status(200).send({ ok: 'Successful' });
    } catch (error) {
        res.status(500).send({ error: 'Error on server' });
    }
}
const getSugg = async (req, res) => {
    try {
        const suggs = await Suggestion.find();
        res.status(200).send(suggs);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error on server' });
    }
}
const updateSugg = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await Suggestion.findOneAndUpdate({ _id: id }, { status });
        res.status(200).send({ ok: 'Successful' });
    } catch (error) {
        res.status(500).send({ error: 'Error on server' });
    }
}
const deleteSugg = async (req, res) => {
    try {
        const { id } = req.params;
        await Suggestion.deleteOne({ _id: id });
        res.status(200).send({ ok: 'Successful' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error on server' });
    }
}
module.exports = {
    createSuggestion,
    getSugg,
    updateSugg,
    deleteSugg
}