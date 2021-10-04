import Koa from "koa";
import "reflect-metadata"
import { useKoaServer } from "routing-controllers";
import { ArticleController } from "./app/controllers/article.controller";
import "./app/handlers/index";

const app = new Koa();

useKoaServer(app, {
    classTransformer: true,
    controllers: [ArticleController],
});

app
    .listen(3000, async () => {
        console.log("Koa server is running");
    })
    .on("error", (err: Error) => {
        console.error(err);
    });