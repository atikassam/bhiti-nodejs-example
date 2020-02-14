import * as path from "path";
import { GqlResolver, GqlQuery} from "@bhiti/gql";
import {HttpMiddleware} from "@bhiti/http";
import {CommonMiddleware, CommonMiddleware1} from "../../common/common.middleware";

@GqlResolver({
    schemaUrl: path.resolve(__dirname, './schema.graphql')
})
@HttpMiddleware(CommonMiddleware, CommonMiddleware1)
export class JobGql {

    @GqlQuery('user')
    getUser() {
        return {
            name: 'Hello world'
        }
    }
}