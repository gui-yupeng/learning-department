const mongo=require('../../MongoDB.js');
const dbmsg=require('../../db.json')

exports.route={
    //获得会议列表
    async get(){
        let meetingCol=await mongo(dbmsg.col_meetings)
        let meetingList=await meetingCol.find().toArray()
        //去除已删除会议
        meetingList=meetingList.filter(item=>{
            if (item.isDelete) {
                return false;
            } else {
                return true;
            }
        })
        //删除isDelete属性
        meetingList=meetingList.map(item=>{
            delete item.isDelete
            return item
        })
        return {meetingList}
    }
}