const Unity = require('../model/unity');

async function getAllUnits(req, res) {
    try {
        const response = await Unity.getAllUnits();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

exports.getAllUnits = getAllUnits;