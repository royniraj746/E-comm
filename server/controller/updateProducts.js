// const userModel = require("../Models/userModel");
// const cloudinary = require("cloudinary").v2;

// //create Product Heere 


// function isFileTypeSupported(type, supportedType) {
//     return supportedType.includes(type);
// }

// async function uploadFileToCloudinary(file, folder, quality) {
//     const options = { folder };
//     if (quality) { //agr qaulity aayega to add ho jayega options mai
//         options.quality = quality;
//     }
//     console.log("options=>", options);
//     options.resource_type = 'auto'; // yeh apne ap detect krega file ka type ka kya 

//     console.log("temp file Path", file.tempFilePath);
//     console.log("temp2 check is here");
//     return await cloudinary.uploader.upload(file.tempFilePath, options);
// }



// exports.updateProducts = async (req, res) => {
//     try {
//         //data fatech from req.body
//         const{id}=req.params;
//         console.log("id" ,id);
//         const { title, description, price } = req.body;
//         console.log(title, description, price);
    
// console.log("1")
//          const file = req.files.file;
//         console.log("2")
//         // console.log(file);
//         // console.log("3")
        

//         //validation 
       
//             const supportedType = ["jpg", "png", "jpeg"];
//             const type = file.name.split('.')[1].toLowerCase();
//             console.log("file type", type);
    
    
//             //h/w => To add upper limit of 5mb 
//             if (!isFileTypeSupported(type, supportedType)) {
//                 return res.statues(400).json({
//                     success: false,
//                     message: 'file formate not supported'
//                 })
//             }
    
//             //file formate supported hai
//             console.log("response side check what is goining on")
//             //H/w => reduce the size height and widths
//             const response = await uploadFileToCloudinary(file, "CodePartner", 30);
//             console.log("response2  for check here ")
//             console.log(response);
    

        
       
//         //db me entry create krna hai
//         const fileData = await userModel.findByIdAndUpdate({_id:id},{
//             title,
//             description,
//             price,
//             image: response.secure_url,
//         },{new:true});
//         res.json({
//             success: true,
//             data: fileData,
//             image: response.secure_url,
//             message: ' sueccessfully updateed Products'
//         })




//     }
//     catch (error) {
//         res.json({
//             success: false,
//             message: ' Not upload updateed Products',
//             message: error.message
//         })

//     }
// }