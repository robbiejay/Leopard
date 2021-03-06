const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const router = express.Router();



router.post('/signup', (req, res, next) => {
bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user.save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  })
});

router.post('/signin', (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Authorization failure"
        })
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Authorization failure"
        });
      }
      console.log('This is the result :' + result);
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id},
        'my_very_sneaky_passphrase',
       { expiresIn: "1h" }
     );
     console.log('This is the token :' + token)
     res.status(200).json({
       token: token,
       expiresIn: 3600
     });
    })
    .catch( err => {
      return res.status(401).json({
        message: "Authorization failure"
      })
    });
});

router.get('', (req, res, next) => {
  User.find().then(profiles => {
    res.status(200).json({
      message: 'Users fetched successfully',
      users: profiles
    });
  });
});

module.exports = router;
