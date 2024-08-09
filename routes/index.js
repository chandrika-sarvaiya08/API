let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let User = require('../model/user');

router.get('/', function (req, res) {
  res.render('index', { title: "FIRST API CREATE" })
})

router.post('/signup', async function (req, res, next) {
  try {

    req.body.password = await bcrypt.hash(req.body.password, 10)

    const userCreate = await User.create(req.body);
    console.log(userCreate);

    res.status(201).json({
      status: "success",
      message: "User create successfully!",
      data: userCreate

    })
  } catch (error) {

    res.status(404).json({
      status: "fail",
      message: error.message

    });

  }

});

router.post('/login', async function (req, res, next) {

  try {

    const userFind = await User.findOne({ email: req.body.email });            //email find for login
    if (!userFind) throw new Error("User not found!")

    let passwordCompare = await bcrypt.compare(req.body.password, userFind.password)
    if (!passwordCompare) throw new Error("password invalid")

    res.status(200).json({                             //OK
      status: "success",
      message: "User login successfully!",
      data: userFind

    })
  } catch (error) {

    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }

});

module.exports = router;
