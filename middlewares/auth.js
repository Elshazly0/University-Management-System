// Middleware for auth
const express=require('express')
const router = express.Router();


//import jwt from "jsonwebtoken"
const jwt = require('jsonwebtoken')
module.export= (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        jwt.verify(token, "longer-secret-is-better");
        next();
    } catch (error) {
        res.status(401).json({ message: "No token cannot authorize" });
    }
};

module.exports = router;



