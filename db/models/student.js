const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feld={
    name: String,
    age: Number,
    student_number:Number,
    gender:String,
    school : { type: Schema.Types.ObjectId, ref: 'School' },
    academy : { type: Schema.Types.ObjectId, ref: 'Academy' },
    classs : { type: Schema.Types.ObjectId, ref: 'Classs' }

}
//自动添加更新时间创建时间:
let personSchema = new mongoose.Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('Student',personSchema)
