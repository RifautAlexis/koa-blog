import { GetArticlesRequest } from "../contracts/Requests/article/get-articles.request";
import { GetArticleByIdResponse } from "../contracts/Responses/article/get-article-by-id.response";
import executor from "../handlers/executor";
import { Get, JsonController, Put } from "routing-controllers";
import { GetArticlesResponse } from "../contracts/Responses/article/get-articles.response";
import { GetArticleByIdRequest } from "../contracts/Requests/article/get-article-by-id.request";
import { createParamDecorator } from 'routing-controllers';
import { PutArticleRequest } from "../contracts/Requests/article/put-article.request";
import { PutArticleResponse } from "../contracts/Responses/article/put-article.response";

@JsonController('/articles')
export class ArticleController {
    @Get('')
    async getOverview(@BuildRequest<GetArticlesRequest>(GetArticlesRequest) request: GetArticlesRequest): Promise<GetArticlesResponse> {
        return await executor.Execute<GetArticlesRequest, GetArticlesResponse>(request);
    }

    @Get('/:id')
    async get(@BuildRequest<GetArticleByIdRequest>(GetArticleByIdRequest) request: GetArticleByIdRequest): Promise<GetArticleByIdResponse> {
        return await executor.Execute<GetArticleByIdRequest, GetArticleByIdResponse>(request);
    }

    // more complex example
    @Put('/:id/:otherParam')
    async updateTestFunction(@BuildRequest<PutArticleRequest>(PutArticleRequest) request: PutArticleRequest): Promise<PutArticleResponse> {
        return await executor.Execute<PutArticleRequest, PutArticleResponse>(request);
    }
}

export function BuildRequest<T>(type: { new ({}): T }) {
    return createParamDecorator({
        required: false,
        value: action => {
            return new type({...action.context.params, ...action.request.body});
        },
    });
}