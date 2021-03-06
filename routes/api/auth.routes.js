// Route for autht
// routes/auth.routes.js
//import express from 'express'
const express=require('express')
//import jwt from 'jsonwebtoken'
const jwt=require('jsonwebtoken')
//import bcrypt from 'bcrypt'
const bcrypt = require('bcrypt')
const router = express.Router();
//import userSchema from '../../models/users.js'
const userSchema= require('../../models/users.js')
//import authorize from '../../middlewares/auth.js'
const authorize = require('../../middlewares/auth.js')
//import { check, validationResult } from 'express-validator'
const { check, validationResult } = require('express-validator') ;



// User Signin
router.post('/login', (req, res, next) => {
  let getUser;
  userSchema
    .findOne({
      email: req.body.email,
    })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed',
        });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: 'Authentication failed',
        });
      }
      let jwtToken = jwt.sign(
        {
          email: getUser.email,
          userId: getUser._id,
        },
        'longer-secret-is-better',
        {
          expiresIn: '1h',
        }
      );
      res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        msg: getUser,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    });
});

// Signup User
router.post(
  '/register',
  [
    check('name')
      .not()
      .isEmpty()
      .isLength({ min: 4 })
      .withMessage('Name must be atleast  characters long'),
    check('email', 'Email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password should be between 5 to 8 characters long')
      .not()
      .isEmpty()
      .isLength({ min: 5, max: 8 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    } else {
      bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new userSchema({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        user
          .save()
          .then((response) => {
            res.status(201).json({
              message: 'User successfully created!',
              result: response,
            });
          })
          .catch((error) => {
            res.status(500).json({
              error: error,
            });
          });
      });
    }
  }
);

// Get All Users
router.route('/all-user').get(authorize, (req, res) => {
    userSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

// Get A Single User
router.route('/profile-user/:id').get(authorize, (req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Delete A User
router.route('/delete-user/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
//export default router;