const db = require('./mongodb');

db.insertOne('student',{'name':'yongsongLee'},(err,result)=>{
	if(err){
		console.log('data inserted failed');
		db.close();
		return;
	}
	console.log(result);
})

db.deleteMany('student',{'age':11},(err,result)=>{
	if(err){
		console.log('data deleted failed');
		db.close();
		return;
	}
	console.log(result);
})

db.updateMany('student',{'age':18},{$set:{'age':25}},(err,result)=>{
	if(err){
		console.log('data updated failed');
		db.close();
		return;
	}
	console.log(result);
})

db.find('student',{},{'pageamount':2,'page':4,'sort':{}},(err,result)=>{
	if(err){
		console.log('find data failed');
		db.close();
		return;
	}
	console.log(result);
})

db.getAllCount('student',function(count){
	console.log(count);
})