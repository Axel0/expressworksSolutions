const express=require("express");
const app=express();
const crypto=require("crypto");
app.put('/message/:id', function(req, res,next){
	res.send(crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));	
});

app.listen(process.argv[2]);
