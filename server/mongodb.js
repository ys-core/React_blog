const MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://127.0.0.1:27017/test";

// connect database
function connect_database(callback){
	MongoClient.connect(dburl,(err,db)=>{
		callback(err,db);
	});
};

//insert function
module.exports.insertOne = function(collection,json,callback){
	connect_database(function(err,db){
		if (err) {
			console.log("database connect failed");
			return;
		}
		db.collection(collection).insertOne(json,(err,result)=>{
			callback(err,result);
			db.close();
		})
	});
}

//delete function
module.exports.deleteMany = function(collection,json,callback){
	connect_database(function(err,db){
		if(err){
			console.log('database connect failed');
			return;
		}
		db.collection(collection).deleteMany(json,(err,result)=>{
			callback(err,result);
			db.close();
		})
	})
}

//update function
module.exports.updateMany = function(collection,json1,json2,callback){
	connect_database(function(err,db){
		if(err){
			console.log('database connect failed');
			return;
		}
		db.collection(collection).updateMany(json1,json2,(err,result)=>{
			callback(err,result);
			db.close();
		})
	})
}

//obtain the total items number
module.exports.getAllCount =function(collection,callback){
	connect_database(function(err,db){
		if(err){
			console.log('database connect failed');
			return;
		}
		db.collection(collection).count({}).then(function(count){
			callback(count);
			db.close();
		})
	})
}

//find function
module.exports.find = function(collection,json,A,B){
	if(arguments.length == 3){
		var callback = A;
		var skipnumber = 0;
		var limit = 0;
		var sort = {};
	}else if(arguments.length == 4){
		var callback = B;
	    var args = A;
        var skipnumber = args.pageamount * args.page;
        var limit = args.pageamount;
        var sort = args.sort;
	}else{
		throw new Error('find function parameters\' amount is not correct');
		return;
	}

	var result = [];
	connect_database(function(err,db){
		if(err){
			console.log('database connect failed');
			return;
		}
		var cursor = db.collection(collection).find(json).sort(sort).limit(limit).skip(skipnumber);
		cursor.each((err,doc)=>{
			if(err){
				callback(err,null);
				db.close();
				return;
			}
			if(doc != null){
				result.push(doc);
			}else{
				callback(null,result);
				db.close();
			}
		})
	})
 
}

