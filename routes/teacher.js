const router = require('koa-router')()
let Model = require("../db/models/teacher");
router.prefix('/teacher')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.post('/add', async function (ctx, next) {
    console.log(ctx.request.body)
    let model = new Model(ctx.request.body);
    model = await model.save();
    console.log('user',model)
    ctx.body = model
})

router.post('/find', async function (ctx, next) {
    let models = await Model.
    find({}).populate('academy').populate('school')
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

