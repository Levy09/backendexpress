
const AUTHORIZATION = "123456";
const authMiddleware = (req,res,next)=>{
    if(req.headers.authorization !== AUTHORIZATION){
        return res.status(401).json({message:"Unauthorized"});
    }
    next();
 }

 export default authMiddleware;