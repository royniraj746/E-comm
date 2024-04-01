const express=require("express");
const app=express();
var cors = require('cors')

 
app.use(cors())

//dot middelere 
require('dotenv').config();

const PORT=process.env.PORT || 4000;

//json middelware
app.use(express.json());

 //fileUpload kre wala middelware use krenge
const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//router  mount
const route=require("./routes/userRoutes");
 app.use("/api/v1" ,route);

//dbCOnnection 
console.log("db before")
const DbConect=require("./config/dataBase")
DbConect();

//cloudinary connection
const cloudinary=require("./config/cloudinary");
 cloudinary.cloudinaryConnect();


app.listen(PORT,()=>{
    console.log(`Server is Runing at ${PORT}`);
})

app.get("/" ,(req ,res)=>{
    res.send(`<h1>Hello Bro i am runing </h1>`);

})