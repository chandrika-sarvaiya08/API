let express = require('express');
let router = express.Router();

let clientController = require('../Controller/Clients')
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


router.post('/create', upload.single('clientProfile'),AdminController.secure, clientController.ClientCreate);

router.get('/find', AdminController.secure, clientController.FindClient);


//FIND ONE
router.get('/findid/:id', AdminController.secure, clientController.ClientFindId);


//DELETE DATA
router.delete('/delete/:id', AdminController.secure, clientController.ClientDelete);


//UPDATE DATA
router.patch('/update/:id', upload.single('clientProfile'), AdminController.secure, clientController.ClientUpdate);

module.exports = router;

