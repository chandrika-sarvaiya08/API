let express = require('express');
let router = express.Router();

let portfolioController = require('../Controller/Portfolios')
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


router.post('/create', upload.single('picture'),AdminController.secure, portfolioController.PortfolioCreate);


router.get('/find', AdminController.secure, portfolioController.FindPortfolio);


//FIND ONE
router.get('/findid/:id', AdminController.secure, portfolioController.PortfolioFindId);


//DELETE DATA
router.delete('/delete/:id', AdminController.secure, portfolioController.PortfolioDelete);


//UPDATE DATA
router.patch('/update/:id', upload.single('picture'), AdminController.secure, portfolioController.PortfolioUpdate);

module.exports = router;

