const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(1)
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  // console.log(ms)
  console.log(5)
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(2)
  await next();
  const ms = Date.now() - start;
  // console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  console.log(4)
});

// response

app.use(async ctx => {
  console.log(3)
  // ctx.body = 'Hello World';
  // ctx

});

app.listen(3000);