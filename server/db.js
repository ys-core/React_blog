const mongoose =  require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/React');

const db = mongoose.connection;
db.once('error',()=>console.log('mongo connection error'));
db.once('open',()=>console.log('mongo connection successed'));


/*
   the schema for all admins, the tag always be 1  , in /React/admins collection
*/
const adminSchema = mongoose.Schema({
	username: String,
	password: String,
	gender: String,
	email: String,
	tag: Number       // 1--->administrator.
},{
   collection:'admins'
});
/*
   the schema for all common users, the tag always be 0 ,   in /React/users collection
*/
const userSchema = mongoose.Schema({
	username: String,
	password: String,
	gender: String,
	email: String,
	tag: Number       // 0--->ordinary usre
},{
   collection:'users'
});
/*
   the schema for all comments on article or comment board,  in /React/comments collection
*/
const commentSchema = mongoose.Schema({
	     comment: String,
         username: String,
         commentTime: Date
},{
	collection:'comments'
});
/*
   the schema for all articles or logs ,  in /React/articles collection
*/
const articleSchema = mongoose.Schema({                  
	content: String,
	author: String,
	category: String,
	createDate: Date,
	starstNum: Number,

},{
    collection:'articles'
});


const Models = {
	    Admin: mongoose.model('admins',adminSchema),   //NAME,SCHEMA,[COLLECTION_NAME]
	    User: mongoose.model('users',userSchema),   //NAME,SCHEMA,[COLLECTION_NAME]
		Comments: mongoose.model('board_comments',commentSchema),
		Articles: mongoose.model('articles',articleSchema)
}

module.exports = Models;
