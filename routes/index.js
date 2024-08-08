let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let User = require('../model/user');

router.get('/login', async function (req, res, next) {
  res.render("index", { title: "First Api Create" });
});

router.post('/login', async function (req, res, next) {
  
  try {

    let { email, password } = req.body;

    if (email && password) {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

      const newUser = new User({ email, password: hashedPassword });

      return res.status(201).json({
        status: "success",
        message: "User created successfully!",
        data: newUser
      });
    } 

  } catch (err) {

    return res.status(400).json({

      status: "fail",
      message: err.message

    });

  }

});

module.exports = router;
