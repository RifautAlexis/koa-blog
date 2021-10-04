import { Handler } from "../handler";
import { PutArticleRequest } from "../../contracts/Requests/article/put-article.request";
import { PutArticleResponse } from "../../contracts/Responses/article/put-article.response";
import singletonContainer from "../handler-container";

export class PutArticleHandler implements Handler<PutArticleRequest, PutArticleResponse> {

    async Handle(_request: PutArticleRequest): Promise<PutArticleResponse> {
        
        const result: PutArticleResponse = {}
        await new Promise(resolve => setTimeout(resolve, 5000));
        return result;
    }

}

const putArticleHandler = new PutArticleHandler();
singletonContainer.RegisterHandler<PutArticleRequest, PutArticleResponse>(new PutArticleRequest, putArticleHandler);