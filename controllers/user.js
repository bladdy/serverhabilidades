const User = require('../models/users');
const { response } = require('express');
const getUsers = async (req, res) => {
    try {

        const user = await User.find();
        res.json({
            ok: true,
            user
        });
    } catch (err) {
        console.log(err);
        return;
    }
}
const postUsers = async (req, res = response) => {
    try {
        const { email } = req.body;
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya esta registrado!!!'
            });
        }
        const user = new User(req.body);
        await user.save();

        res.json({
            ok: true,
            user
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error!'
        });
    }
}
const putUsers = async (req, res = response) => {
    try {
        const uid = req.params.id;
        const userdb = await User.findById(uid);
        if (!userdb) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe!!!'
            });
        }
        const update = req.body;
        delete uid.email;
        delete uid.role;
        const user = User.findByIdAndUpdate(uid, update );
        res.json({
            ok: true,
            user
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error!'
        });
    }
}
module.exports = {
    getUsers, postUsers, putUsers
}