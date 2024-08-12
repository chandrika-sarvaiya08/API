let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let User = require('../model/user');

router.get('/', function (req, res) {
  res.render('index', { title: "FIRST API CREATE" })
})


//SIGN UP
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


//LOGIN
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


//FOUND DATA
router.get('/data', async function (req, res, next) {

  try {

    const userFind = await User.find();

    res.status(200).json({                             //OK
      status: "success",
      message: "User found successfully!",
      data: userFind

    })

  } catch (error) {

    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }

});


//FIND DATA BY ID
router.get('/:id', async function (req, res, next) {

  try {

    const userFind = await User.findById(req.params.id);

    res.status(200).json({                             //OK
      status: "success",
      message: "User find successfully!",
      data: userFind

    })

  } catch (error) {

    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }

});


//UPDATE DATA
router.patch('/:id', async function (req, res, next) {

  try {

    req.body.password = await bcrypt.hash(req.body.password, 10)
    const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({                             //OK
      status: "success",
      message: "User Update Successfully!",
      data: userUpdate

    })

  } catch (error) {

    res.status(404).json({
      status: "fail",
      message: error.message

    });
  }

});


//DELETE DATA
router.delete('/:id', async function (req, res, next) {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({                             //OK
      status: "success",
      message: "User Delete Successfully!",

    })

  } catch (error) {

    res.status(404).json({
      status: "fail",
      message: error.message

    });
  }

});


module.exports = router;