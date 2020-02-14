import {Intercept, NsInterceptor} from "@bhiti/core";

@NsInterceptor()
export class UserContextCreator {
    intercept(req, res, method) {
        console.log('intercept', arguments.length)
        method();
    }
}

export function UserContext(options) {
    return Intercept({
        interceptors: [UserContextCreator],
        options
    })
}