const express=require("express");
const app=express();
const fs=require("fs");

app.get("/books", function(req,res){
	fs.readFile(process.argv[3], function(err,file){
			
			if(err){res.send(500);}
		
		var object=JSON.parse(file.toString());
		res.json(object);
		
	});

});

app.listen(process.argv[2]);
