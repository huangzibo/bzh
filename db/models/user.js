const mongoose = require('mongoose')
const feld={
    name: String,
    age: Number,
    //人物标签
    labels:Number
}
//自动添加更新时间创建时间:
let personSchema = new mongoose.Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('User',personSchema)
