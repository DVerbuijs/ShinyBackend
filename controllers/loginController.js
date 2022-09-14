
const login_login=(req,res)=>{
    res.send("Login");
}
const login_create=(req,res)=>{
    var id="blank";
    id=req.headers.user;
    console.log(id);
    res.send("create "+id);

}


module.exports={
    login_login,
    login_create
}