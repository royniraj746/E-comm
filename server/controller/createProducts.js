const userModel = require("../Models/userModel");
const cloudinary = require("cloudinary").v2;

//create Product Heere 


function isFileTypeSupported(type, supportedType) {
    return supportedType.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };
    if (quality) { //agr qaulity aayega to add ho jayega options mai
        options.quality = quality;
    }
    console.log("options=>", options);
    options.resource_type = 'auto'; // yeh apne ap detect krega file ka type ka kya 

    console.log("temp file Path", file.tempFilePath);
    console.log("temp2 check is here");
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}



exports.createProducts = async (req, res) => {
    try {
        //data fatech from req.body
        const { title, description, price } = req.body;
        console.log(title, description, price);
        if(!title || !description || !price){
            res.json({
                success:false ,
                message:"field is missing"
            })
        }
//yeha  file ke jgh image krna hau 
        const file = req.files.image;
        console.log("file " ,file);
        if(!file ){
            res.json({
                success:false ,
                message:"file is missing"
            })
        }

        //validation 
        // const supportedType = ["jpg", "png", "jpeg"];
        // const type = file.name.split('.')[1].toLowerCase();
        // console.log("file type", type);


        //h/w => To add upper limit of 5mb 
        // if (!isFileTypeSupported(type, supportedType)) {
        //     return res.json({
        //         success: false,
        //         message: 'file formate not supported'
        //     })
        // }

        //file formate supported hai
       // console.log("response side check what is goining on")
        //H/w => reduce the size height and widths
        const response = await uploadFileToCloudinary(file, "CodePartner", 30);
        console.log("response2  for check here ")
        console.log(response);
console.log("respones1")
        //db me entry create krna hai
        const fileData = await userModel.create({
            title,
            description,
            price,
            image: response.secure_url,
        });
        console.log("products upload" ,fileData)
        console.log("respones2")
        res.json({
            success: true,
            data: fileData,
            image: response.secure_url,
            message: 'image upload sueccessfully upload'
        })




    }
    catch (error) {
        res.json({
            success: false,
            message: 'image Not upload ',
            message: error.message
        })

    }
}