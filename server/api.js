const models = require('./db');
const express = require('express');
const router = express.Router();
const crypto = require('crypto');   //crypto the password
const email = require('./163email');

/*
	save administrator in /React/admins collection
*/
router.post('/add_admin',(req,res)=>{
	let md5 = crypto.createHash("md5");
	let newCryptoedPassword = md5.update(req.body.password).digest("hex");
	let newAccount = new models.Admin({
		username: req.body.username,
		password: newCryptoedPassword,
        gender: req.body.gender,
		email: req.body.email,
		tag: req.body.tag
	});

	newAccount.save((err,data)=>{
		if(err){
			console.log(err);
			res.send({status:'false'});
		}
		else{
            console.log('save user in Mongodb Database successfully')
			res.send({status:'true'});
		}
	});
});
/*
	save common user in /React/users collection
*/
router.post('/add_user',(req,res)=>{
	let md5 = crypto.createHash("md5");
	let newCryptoedPassword = md5.update(req.body.password).digest("hex");
	let newAccount = new models.User({
		username: req.body.username,
		password: newCryptoedPassword,
		gender: req.body.gender,
		email: req.body.email,
		tag: req.body.tag
	});

	newAccount.save((err,data)=>{
		if(err){
			console.log(err);
			res.send({status:'false'});
		}
		else{
			console.log('save user in Mongodb Database successfully')
			res.send({status:'true'});
		}
	});
});
/*
	validate admin is in /React/admins collection or not, via username or email to verify
*/
router.post('/verify_admin',(req,res)=>{

	models.Admin.find((err,data)=>{
		if(err){
            console.log('query admin in database failed');
			res.send(err);
		}
		else{
	
			let md5 = crypto.createHash("md5");
			let newCryptoedPassword = md5.update(req.body.password).digest("hex");
			console.log(data.length);

			if(req.body.username != ''){                 // validate via username
				for(var i = 0; i < data.length; i ++){
					if((req.body.username == data[i].username) && (newCryptoedPassword == data[i].password)){
						console.log('admin exists in mongodb database via username query.');
						break;   // when i=data.length-1 and then break,i would not execute ++
					}
				}

				if(i < data.length){
					res.send({status:'true',tag:data[i].tag,username:data[i].username})        //administrator's username and password matched
				}else{
					console.log('can not find this admin in database !');
					res.send({status:'false',tag:0,username:''});
				}
			}else{                                        //validate via email
				for(var i = 0; i < data.length; i ++){
					if((req.body.email == data[i].email) && (newCryptoedPassword == data[i].password)){
						console.log('admin exists in mongodb database via email query.')
						break;   //when i=data.length-1 and then break,i would not execute ++
					}
				}
	
				if(i < data.length){
					res.send({status:'true',tag:data[i].tag,username:data[i].username});       //administrator's username and password matched
				}else{
					console.log('can not find this admin in database !');
					res.send({status:'false',tag:0,username:''});
				}
			}
		}
	})
});
/*
	validate user is in /React/users collection or not, via username or email to verify
*/
router.post('/verify_user',(req,res)=>{

	models.User.find((err,data)=>{
		if(err){
            console.log('query user in database failed');
			res.send(err);
		}
		else{
	
			let md5 = crypto.createHash("md5");
			let newCryptoedPassword = md5.update(req.body.password).digest("hex");
			console.log(data.length);

			if(req.body.username != ''){                 // validate via username
				for(var i = 0; i < data.length; i ++){
					if((req.body.username == data[i].username) && (newCryptoedPassword == data[i].password)){
						console.log('user exists in mongodb database via username query.');
						break;   // when i=data.length-1 and then break,i would not execute ++
					}
				}

				if(i < data.length){
					res.send({status:'true',tag:data[i].tag,username:data[i].username})        //common user's username and password matched
				}else{
					console.log('can not find this user in database !');
					res.send({status:'false',tag:0,username:''});
				}
			}else{                                        //validate via email
				for(var i = 0; i < data.length; i ++){
					if((req.body.email == data[i].email) && (newCryptoedPassword == data[i].password)){
						console.log('user exists in mongodb database via email query.')
						break;   //when i=data.length-1 and then break,i would not execute ++
					}
				}
	
				if(i < data.length){
					res.send({status:'true',tag:data[i].tag,username:data[i].username});     //common user's username and password matched
				}else{
					console.log('can not find this user in database !');
					res.send({status:'false',tag:0,username:''});
				}
			}
		}
	})
});



/*
	get all articles info from /React/articles collection
*/
router.get('/getAllArticles',(req,res)=>{
	models.Articles.find((err,data)=>{
		if(err){
			console.log("query articles error");
			res.send({status:'true'});
		}else{
			res.send(data);
		}
	})
})
/*
	get all board comments from /React/comments collection
*/
router.get('/getAllBoardComments',(req,res)=>{
	models.Comments.find((err,data)=>{
		if(err){
			console.log("query board comments error");
			res.send({status:'true'});
		}else{
			res.send(data);
		}
	})
})
/*
	delete one article from /React/articles collection
*/
router.get('/deleteArticle',(req,res)=>{
	let articleID = req.query.articleID;
	models.Articles.deleteOne({createDate:articleID},(err)=>{
		if(err){
			console.log('delete article action failed');
			res.send({status:'false'});
		}else{
			res.send({status:'true'});
		}
	})
})
/*
	delete one comment from /React/comments collection
*/
router.get('/deleteBoardComment',(req,res)=>{
	let commentID = req.query.commentID;
	models.Comments.deleteOne({commentTime: commentID},(err)=>{
		if(err){
			console.log('delete one board comment failed');
			res.send({status:'false'});
		}else{
			res.send({status:'true'});
		}
	})
})






/*
	save all comments in comments collection
*/
router.get('/save_comments',(req,res)=>{
        /* console.log(req); */
	let newComments = new models.Comments({
		comment: req.query.newcomment,
		username: req.query.username,
		date: req.query.date
	});

	newComments.save((err,data)=>{
		if(err){
			res.send({status:'false'});
		}
		else{
			console.log('save comments in Mongodb Database successed!');
			res.send({status:'true'});
		}
	});
});
	/*
		update the comment in comments collection
	*/
router.get('/update_comments',(req,res)=>{

        let condition = {
			comment: req.query.oldcomment,
			username: req.query.username,
        };
        let update = {$set:{comment:req.query.newcomment,date:req.query.date}};

	models.Comments.update(condition,update,function(err){
		if(err){
                        console.log(err);
			res.send({status:'false'});
		}
		else{
			console.log('update successfully');
		//	res.send({staus:'true'});
                        res.send({status:'true'});
		}
	});
	
});
	/*
		query all comments from comments collection in Mongodb Database
	*/
router.post('/query_comments',(req,res)=>{
        // console.log(req);
	/*
	let newComments = new models.Comments({
		comment: req.body.newComment,
		username: req.body.username,
		date: req.body.date
	});
	*/
	models.Comments.find({}).sort({date:-1}).exec(function(err,data){
		if(err){
                        console.log(err);
			res.send(err);
		}
		else{
		//	console.log(data);
		//	res.send({staus:'true'});
                        res.send(data);
		}
	});
});
	/*
		delete one comment by date when clicking the delete icon
	*/
router.get('/delete_comment',(req,res)=>{
        console.log(req.query.date);
	models.Comments.remove({date:req.query.date},(err,data)=>{
		if(err){
			res.send({status:'false'});
		}
		else{
			console.log('delete one comment in Mongodb Database successed!');
			res.send({status:'true'});
		}
	});
});


router.get('/send_emails',(req,res)=>{
        console.log('get the email request ~~~~');

	email.send('yonnsongLee@163.com');

});


module.exports = router;
