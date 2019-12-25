const router = require('koa-router')()
//建立模块，require(“../db/models/文件名”)
let Model = require("../db/models/school");
router.prefix('/school')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

//数据库增删改查
router.post('/add', async function (ctx, next) {
    console.log(ctx.request.body)
    let model = new Model(ctx.request.body);
    model = await model.save();
    console.log('user',model)
    ctx.body = model
})

router.post('/find', async function (ctx, next) {
    let models = await Model.
    find({})
    ctx.body = models
})

router.post('/get', async function (ctx, next) {
    // let users = await User.
    // find({})
    console.log(ctx.request.body)
    let model = await Model.find(ctx.request.body)
    console.log(model)
    ctx.body = model
})

router.post('/update', async function (ctx, next) {
    console.log(ctx.request.body)
    let pbj = await Model.update({ _id: ctx.request.body._id }, ctx.request.body);
    ctx.body = pbj
})
router.post('/delete', async function (ctx, next) {
    console.log(ctx.request.body)
    await Model.remove({ _id: ctx.request.body._id });
    ctx.body = 'shibai '
})
module.exports = router