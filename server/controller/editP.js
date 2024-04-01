const userModel = require("../Models/userModel");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();


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


exports.editP = async (req, res) =>{



  try {
    const { title, description, price } = req.body;
    const { id } = req.params;
    const subSection = await userModel.findById({ _id: id }, { new: true });

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      })
    }

    if (title !== undefined) {
      subSection.title = title
    }

    if (price !== undefined) {
      subSection.price = price
    }
    // (file, "CodePartner", 30)
    if (description !== undefined) {
      subSection.description = description
    }
    if (req.files && req.files.file !== undefined) {
      const image = req.files.file
      const uploadDetails = await uploadFileToCloudinary(
        image,
        "CodePartner", 30
      )
      subSection.image = uploadDetails.secure_url

    }

    const updataData = await subSection.save();

    res.status(201).json({
      suceess: true,
      data: updataData,
      message:"product is updated sueccessfully"
    })

  }
  catch (error) {
    console.log(error);
  }
}