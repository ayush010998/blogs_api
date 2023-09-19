const Blog=require('../models/Blog');


const getAllBlogs=async(req,res,next)=>{
    let blogs;
    try{
        blogs=await Blog.find();
    }catch(e){
        return console.log(e);
    }
    if(!blogs){
        return res.status(404).json({message:"no blogs out there"})
    }
    return res.status(200).json({blogs})
}


const addBlogs=async(req,res,next)=>{
    const {title,description,image,user}=req.body
    const blog=new Blog({
        title,
        description,
        image,
        user,
    });
    try{
        await blog.save()
    }
    catch(e){
        return console.log(e)
    }
    return res.status(200).json({blog})

}

const updateBlogs=async(req,res,next)=>{
    const {title,description}=req.body
    const blogId=req.params.id
    let blog;
    try{
        blog=await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        })

    }catch(e){
        return console.log(e);
    }
    if(!blog){
        return res.status(500).json({message:"unable to update the blogs"})
    }
    return res.status(200).json({blog})
   


}

module.exports={getAllBlogs,addBlogs,updateBlogs}
