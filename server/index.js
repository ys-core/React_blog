
const api = require('./api');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = new express();
         
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);

app.use(express.static(path.resolve(__dirname,'../dist')));

app.use((req,res,next)=>{
	next();
})
app.get('*',function(rep,res){
/*
	const html =  fs.readFileSync(path.resolve(__dirname,'../dist/index.html','utf-8'));
	res.send(html);
*/
});

app.listen(8088,function(){
	console.log('server listening at port 8088');
});
