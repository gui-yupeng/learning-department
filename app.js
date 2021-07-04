const Koa = require('koa')
const app = new Koa()
const kf = require('kf-router');
const paramStandard=require('./middleware/params.js');
const returnStandard=require('./middleware/return.js');
const cors = require('./middleware/cors.js');
const check=require('./middleware/check.js');

//const onerror = require('koa-onerror')
const logger = require('koa-logger')

// error handler
//onerror(app)

// middlewares

app.use(logger())
app.use(cors);
app.use(paramStandard);
app.use(returnStandard);
app.use(check);

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes

app.use(kf());
// error-handling
//app.on('error', (err, ctx) => {
//  console.error('server error', err, ctx)
//});

//module.exports = app
app.listen(3000)
