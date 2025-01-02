let express = require("express");
let router = express.Router();

let AdminController = require("../Controller/Admin");

router.post("/signup", AdminController.adminSignup);
router.post("/login", AdminController.adminLogin);

module.exports = router;
