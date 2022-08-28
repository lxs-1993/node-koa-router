const koa = require("koa")
const Router = require("koa-router")
let app = new koa()
let router = Router()
// 拦截器
app.use(async(ctx,next)=>{
  console.log("====拦截开始=====")
  await next()
  console.log("====拦截结束=====")
})
// koa和express区别就是koa可以获取更好的异步支持
router.get("/api/test",(ctx,next)=>{
  var json = { name: 'jack'}
  ctx.body = JSON.stringify(json)
})
app.use(router.routes())
let port = 3500
app.listen(port,()=>{
  console.log(`端口: http://localhost:${port}`)
})