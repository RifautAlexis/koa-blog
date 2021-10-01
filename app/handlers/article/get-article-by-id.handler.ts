import { GetArticleByIdRequest } from "../../contracts/Requests/article/get-article-by-id.request";
import { GetArticleByIdResponse } from "../../contracts/Responses/article/get-article-by-id.response";
import { Handler } from "../handler";
// import singletonContainer from "../handler-container";

export class GetArticleByIdHandler implements Handler<GetArticleByIdRequest, GetArticleByIdResponse> {

    async Handle(request: GetArticleByIdRequest): Promise<GetArticleByIdResponse> {
        
        const result: GetArticleByIdResponse = {
            id: request.id,
            title: 'Title01',
            description: 'Description01',
            authorName: 'authorName01',
            createdAt: new Date(),
            updatedAt: new Date(),
            content: "I'm a content and really happy cause why I could not ?"
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
        return result;
    }

}

// const handler = new GetArticleByIdHandler();
// singletonContainer.RegisterHandler<GetArticleByIdRequest, GetArticleByIdResponse>(new GetArticleByIdRequest, handler);