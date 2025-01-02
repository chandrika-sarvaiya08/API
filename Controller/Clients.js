const Client = require('../model/clients');


exports.ClientCreate = async function (req, res, next) {

    try {
        req.body.clientProfile = req.file.filename
  
        let ClientCreate = await Client.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Client Created Successfully!",
            data: ClientCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.FindClient = async function (req, res, next) {
    try {

        let FindClient = await Client.find()

        res.status(200).json({
            status: "Success",
            message: "Client Found SuccessFully!",
            data: FindClient

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.ClientFindId = async function (req, res, next) {
    try {

        let ClientFindId = await Client.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Client Find SuccessFully!",
            data: ClientFindId

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ClientDelete = async function (req, res, next) {
    try {

        await Client.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Client Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ClientUpdate = async function (req, res, next) {
    try {

        console.log(req.file); 
        req.body.technolgyPicture = req.file.filename
        
        console.log(req.body);

        let ClientUpdate = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Client Update SuccessFully!",
            data: ClientUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
