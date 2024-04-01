const mongoose=require("mongoose");

require("dotenv").config();
const DbConect=()=>{
    mongoose.connect(process.env.DB_CONNECT_URL ,{

    })
    .then(()=>{
        console.log("DB_Connect_Succesfully");
    })
    .catch((error)=>{
        console.log("DB Not Connected")
        console.log(error);
    })
}

module.exports=DbConect;