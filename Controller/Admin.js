const Admin = require('../model/admins');
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')

exports.secure = async function (req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) throw new Error('Please enter a token');

        const verify = jwt.verify(token, 'admin');
        const adminVerify = await Admin.findById(verify.id);
        if (!adminVerify) throw new Error('Admin not found');

        next();
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// Admin Signup
exports.adminSignup = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10); // Hash the password

        const adminSignup = await Admin.create(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'Admin Signup successfully!',
            data: adminSignup
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Admin Login
exports.adminLogin = async function (req, res, next) {
    try {
        const adminFind = await Admin.findOne({ email: req.body.email });
        if (!adminFind) throw new Error('Admin not found!');

        const passwordCompare = await bcrypt.compare(req.body.password, adminFind.password);
        if (!passwordCompare) throw new Error('Password invalid!');

        const token = jwt.sign({ id: adminFind._id }, 'admin');

        res.status(200).json({
            status: 'Success',
            message: 'Admin logged in successfully!',
            data: adminFind,
            token
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

