const mongoose = require('mongoose')
const Schema= mongoose.Schema
const feld={
    name: String,
    //人物标签
    major:String,
    renshu: Number,
    school : { type: Schema.Types.ObjectId, ref: 'School' }
}
//自动添加更新时间创建时间:
let schema = new Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('Academy',schema)
