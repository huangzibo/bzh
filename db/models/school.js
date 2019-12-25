const mongoose = require('mongoose')
const feld={
    name: String,
    //人物标签
    where:String,
    leixing: String
}
//自动添加更新时间创建时间:
let personSchema = new mongoose.Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('School',personSchema)