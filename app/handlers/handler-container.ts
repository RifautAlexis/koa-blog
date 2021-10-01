import { Handler } from "./handler"

class HandlerContainer {
    private kernel: Record<string, any> = [];

    RegisterHandler<TRequest, TResponse>(request: TRequest, handler: Handler<TRequest, TResponse>) {
        const requestName: string = this.GetTypeName(request);
        this.kernel[`${requestName}`] = handler;    
    }

    ResolveHandler<TRequest, TResponse>(request: TRequest): // Product
    Handler<TRequest, TResponse> {
        const requestName: string = this.GetTypeName(request);
        return <Handler<TRequest, TResponse>>this.kernel[`${requestName}`];
    }

    private GetTypeName(request: any): string {
        return request.constructor.name.toLowerCase();
    }
}

let singletonContainer = new HandlerContainer();
export default singletonContainer;