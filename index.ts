import { GetArticleByIdRequest } from "./app/contracts/Requests/article/get-article-by-id.request";
import { GetArticlesRequest } from "./app/contracts/Requests/article/get-articles.request";
import { GetArticleByIdResponse } from "./app/contracts/Responses/article/get-article-by-id.response";
import { GetArticlesResponse } from "./app/contracts/Responses/article/get-articles.response";
import { GetArticleByIdHandler } from "./app/handlers/article/get-article-by-id.handler";
import { GetArticlesHandler } from "./app/handlers/article/get-articles.handler";
import singletonContainer from "./app/handlers/handler-container";
import Koa from "koa";
import "reflect-metadata"
import { useKoaServer } from "routing-controllers";
import { ArticleController } from "././app/controllers/article.controller";
import { PutArticleHandler } from "./app/handlers/article/put-article.handler";
import { PutArticleRequest } from "./app/contracts/Requests/article/put-article.request";
import { PutArticleResponse } from "app/contracts/Responses/article/put-article.response";

const app = new Koa();

const getArticlesHandler = new GetArticlesHandler();
singletonContainer.RegisterHandler<GetArticlesRequest, GetArticlesResponse>(new GetArticlesRequest, getArticlesHandler);

const getArticleByIdHandler = new GetArticleByIdHandler();
singletonContainer.RegisterHandler<GetArticleByIdRequest, GetArticleByIdResponse>(new GetArticleByIdRequest(), getArticleByIdHandler);

const putArticleHandler = new PutArticleHandler();
singletonContainer.RegisterHandler<PutArticleRequest, PutArticleResponse>(new PutArticleRequest, putArticleHandler);

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