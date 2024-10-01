"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_models_1 = require("../models/auth.models");
const router = (0, express_1.Router)();
// router.get('/', (req, res) => {
// })
// router.post('/login', (req, res) => {
//   res.json({ user: 'lo que sea' })
// })
router.post('/register', (req, res) => {
    const { username } = req.body;
    try {
        const userExist = auth_models_1.authModel.findUserByUsername(username);
        res.json({ user: userExist });
    }
    catch (err) {
        res.json({ error: err });
    }
});
// router.post('/logout', (req, res) => {
//   res.json({ user: 'lo que sea' })
// })
// router.get('/protected', (req, res) => {
//   res.json({ user: 'lo que sea' })
// })
exports.default = router;
