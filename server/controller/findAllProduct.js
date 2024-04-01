const userModel = require("../Models/userModel");


//find all Products 

exports.findAllProducts = async (req, res) => {
    try {

        const productsData = await userModel.find({});
        res.status(201).json({
            success: true,
            data: productsData
        })

    }
    catch (error) {
        res.status(501).json({
            success: false,
            message: error.message
        })

    }
}



//find by id



exports.findByIdProduct = async (req, res) => {
    try {
         const {id}=req.params;
         console.log("bId" ,id)
        const productsData = await userModel.findById({_id:id});
        res.status(201).json({
            success: true,
            data: productsData
        })

    }
    catch (error) {
        res.status(501).json({
            success: false,
            message: error.message
        })

    }
}