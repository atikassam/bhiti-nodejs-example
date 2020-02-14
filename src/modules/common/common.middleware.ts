import {HttpMiddlewareInterface, NsMiddleware} from "@bhiti/http";

@NsMiddleware()
export class CommonMiddleware implements HttpMiddlewareInterface {
    apply(req, res, next: any): any {
        console.log('middleware is working 0');

        // next(new Error('Hello'))
        next()
    }
}

@NsMiddleware()
export class CommonMiddleware1 implements HttpMiddlewareInterface {
    apply(req, res, next: () => any): any {
        console.log('middleware is working 1');

        next()
    }
}

@NsMiddleware()
export class CommonMiddleware1Overwrite implements HttpMiddlewareInterface {
    apply(req, res, next: () => any): any {
        console.log('middleware is working 1 CommonMiddleware1Overwrite');

        next()
    }
}
