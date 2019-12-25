const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')


const mongoose = require('mongoose')
const dbconfig = require('./db/config')
mongoose.connect(dbconfig.dbs,{useNewUrlParser: true,useUnifiedTopology: true})
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function () {
  console.log('mongoose 连接成功')
});
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


const teacher= require('./routes/teacher')
app.use(teacher.routes(), teacher.allowedMethods())

const student= require('./routes/student')
app.use(student.routes(), student.allowedMethods())

const classs= require('./routes/classs')
app.use(classs.routes(), classs.allowedMethods())

const index = require('./routes/index')
app.use(index.routes(), index.allowedMethods())
const users = require('./routes/users')
app.use(users.routes(), users.allowedMethods())
const school = require('./routes/school')
app.use(school.routes(), school.allowedMethods())
// error-handling
const academy = require('./routes/academy')
app.use(academy.routes(), academy.allowedMethods())
// routes


app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
