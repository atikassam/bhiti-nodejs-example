import * as path from "path";
import {GqlResolver, GqlQuery} from "@bhiti/gql";

@GqlResolver({
    schemaUrl: path.resolve(__dirname, './schema.graphql')
})
export class ProfileGql {

    @GqlQuery('details')
    @GqlQuery('profile')
    getUser() {
        return {
            name: 'Hello world',
            email: 'Hello world',
            number: 'Hello world'
        }
    }
}