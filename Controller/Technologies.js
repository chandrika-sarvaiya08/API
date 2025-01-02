const Technology = require('../model/technologies');


exports.TechnologyCreate = async function (req, res, next) {

    try {
        req.body.technolgyPicture = req.file.filename
  
        let TechnologyCreate = await Technology.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Technology Created Successfully!",
            data: TechnologyCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.FindTechnology = async function (req, res, next) {
    try {

        let FindTechnology = await Technology.find()

        res.status(200).json({
            status: "Success",
            message: "Technology Found SuccessFully!",
            data: FindTechnology

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.TechnologyFindId = async function (req, res, next) {
    try {

        let TechnologyFindId = await Technology.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Technology Find SuccessFully!",
            data: TechnologyFindId

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.TechnologyDelete = async function (req, res, next) {
    try {

        await Technology.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Technology Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.TechnologyUpdate = async function (req, res, next) {
    try {

        console.log(req.file); 
        req.body.technolgyPicture = req.file.filename
        
        console.log(req.body);

        let TechnologyUpdate = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Technology Update SuccessFully!",
            data: TechnologyUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
