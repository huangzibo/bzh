const router = require('koa-router')()
const User = require('../db/models/user')
router.prefix('/users')

router.get('/add', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router