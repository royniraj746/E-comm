const userModel = require("../Models/userModel");


//find all Products 

exports.deleteProducts = async (req, res) => {
    try {

        const {id}=req.params;
        const productsData = await userModel.findByIdAndDelete({_id:id});
        res.status(201).json({
            success: true,
            data: productsData,
            message:"This product Deleted sueccessfully"
        })

    }
    catch (error) {
        res.status(501).json({
            success: false,
            message:"This product Not Deleted ",
            message: error.message
        })

    }
}