const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    title:{
        type:String ,
      
    },
    description:{
        type:String ,
       
    },
    price:{
        type:Number,
        
    },
    image:{
        type:String 
       
    }

})

module.exports=mongoose.model("USER" ,userSchema);
