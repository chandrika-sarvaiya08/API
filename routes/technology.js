let express = require('express');
let router = express.Router();

let technologiesController = require('../Controller/Technologies')
let AdminController = require("../Controller/Admin");


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post('/create', upload.single('technolgyPicture'),AdminController.secure, technologiesController.TechnologyCreate);

router.get('/find', AdminController.secure, technologiesController.FindTechnology);


//FIND ONE
router.get('/findid/:id', AdminController.secure, technologiesController.TechnologyFindId);


//DELETE DATA
router.delete('/delete/:id', AdminController.secure, technologiesController.TechnologyDelete);


//UPDATE DATA
router.patch('/update/:id', upload.single('technolgyPicture'), AdminController.secure, technologiesController.TechnologyUpdate);

module.exports = router;

