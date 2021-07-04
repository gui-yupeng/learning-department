const MongoClient = require('mongodb').MongoClient;
const dbmsg=require('./db.json');

// Connection URL 开发测试用本地数据库URL
//db.createUser({user:"test",pwd:"123456789",roles:[{role:"readWrite",db:"RuiHua-learningDepartment"}]});
const url = dbmsg.dburl;

// Database Name  开发测试用本地数据库RuiHua-learningDepartment
const dbName = dbmsg.dbName;

let mongodb=null;

const getCollection = async(col) => {
    if (mongodb) {
        return mongodb.collection(col);
    } else {
        mongodb = await MongoClient.connect(url,{ useUnifiedTopology: true } );
        //开发测试用本地数据库koa,上线修改
        mongodb = mongodb.db(dbName);
        return mongodb.collection(col);
    }
}
module.exports=getCollection;
