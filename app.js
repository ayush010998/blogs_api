const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/user-routes');
const blogRouter = require('./routes/blog_routes');


const app=express();

app.use(express.json());
app.use(router)
app.use("/blog",blogRouter)





mongoose.connect("mongodb://localhost:27017/blogs",{

})
.then(()=>{
    console.log("NoSql connected")
})
.catch((error)=>{
    console.log("error not connected to database")
})







app.listen(3000,()=>{
    console.log("server started")
})

