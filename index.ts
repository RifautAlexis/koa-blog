import * as Koa from "koa";

const app = new Koa();

app.listen(3000, () => {
    console.log("Koa server is running");
});