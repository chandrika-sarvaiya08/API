let Portfolio = require('../model/portfolios');



exports.PortfolioCreate = async function (req, res, next) {

    try {
        console.log(req.file); 
        req.body.picture = req.file.filename

        let PortfolioCreate = await Portfolio.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Portfolio Created Successfully!",
            data: PortfolioCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.FindPortfolio = async function (req, res, next) {
    try {

        let FindPortfolio = await Portfolio.find()

        res.status(200).json({
            status: "Success",
            message: "Portfolio Found SuccessFully!",
            data: FindPortfolio

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.PortfolioFindId = async function (req, res, next) {
    try {

        let PortfolioFindId = await Portfolio.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Portfolio Find SuccessFully!",
            data: PortfolioFindId

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.PortfolioDelete = async function (req, res, next) {
    try {

        await Portfolio.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Potfolio Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.PortfolioUpdate = async function (req, res, next) {
    try {

        console.log(req.file); 
        req.body.picture = req.file.filename
        
        console.log(req.body);

        let PortfolioUpdate = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Portfolio Update SuccessFully!",
            data: PortfolioUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}


