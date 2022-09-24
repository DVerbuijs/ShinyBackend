const pokemon_byDex=(req,res)=>{
    var dex=0;
    dex= parseInt(req.headers.dexNum);
    res.send("Looking for pokemon "+dex);
}
const pokemon_betweenDex=(req,res)=>{
    var startDex,endDex=0;
    
    startDex=parseInt(req.headers.start);
    endDex=parseInt(req.headers.end);
   
    res.send("Look for pokemon form "+startDex+ " till "+ endDex);

}


module.exports={
    pokemon_byDex,
    pokemon_betweenDex
}