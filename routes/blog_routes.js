const express=require("express");
const {getAllBlogs,addBlogs,updateBlogs}=require('../controllers/blog_controller');


const blogRouter=express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post('/add',addBlogs);
blogRouter.put("/update/:id",updateBlogs)

module.exports=blogRouter
