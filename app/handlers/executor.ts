import container from "./handler-container";

class Executor {

    async Execute<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        let handler = container.ResolveHandler<TRequest, TResponse>(request);
        
        return await handler.Handle(request);
    }

}

let executor = new Executor();
export default executor;