import {NsConfiguration, NsfServerConfiguration} from "@bhiti/core";

@NsConfiguration()
export class AppConfiguration implements NsfServerConfiguration {
    async getPort(): Promise<any> {
        return 8081
    }

    async routesAfterInit(app: any): Promise<any> {}

    async routesBeforeInit(app: any): Promise<any> {}

    async serverBeforeInit(app: any): Promise<any> {}

    async serverAfterInit(...args): Promise<any> {}
}