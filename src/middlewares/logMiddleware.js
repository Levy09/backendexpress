const logMiddleware = (req, res , next) =>{
     console.log(`${req.method} ${res.url} ${new Date().toTimeString()}`);
     next();
}
 export  default logMiddleware;