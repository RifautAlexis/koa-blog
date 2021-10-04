import { GetArticlesResponse } from "../../contracts/Responses/article/get-articles.response";
import { GetArticlesRequest } from "../../contracts/Requests/article/get-articles.request";
import { Handler } from "../handler";
import singletonContainer from "../handler-container";

export class GetArticlesHandler implements Handler<GetArticlesRequest, GetArticlesResponse> {

    async Handle(_request: GetArticlesRequest): Promise<GetArticlesResponse> {
        
        const result: GetArticlesResponse = {
            id: '9999999',
            title: 'Title01',
            description: 'Description01',
            authorName: 'authorName01',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
        return result;
    }

}

const getArticlesHandler = new GetArticlesHandler();
singletonContainer.RegisterHandler<GetArticlesRequest, GetArticlesResponse>(new GetArticlesRequest, getArticlesHandler);