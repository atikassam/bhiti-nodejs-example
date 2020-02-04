import {NsConfiguration, NsfServerConfiguration} from "@bhiti/core";
import * as bodyParser from "body-parser";
import * as express from "express";

@NsConfiguration()
export class AppConfiguration implements NsfServerConfiguration {
    async getPort(): Promise<any> {
        return 8081
    }

    async routesBeforeInit(app: any): Promise<any> {
        app.use(express.static(__dirname+'/view'))
        app.use(bodyParser.json())
    }


    async routesAfterInit(app: any): Promise<any> {

    }
    async serverBeforeInit(app: any): Promise<any> {}

    async serverAfterInit(...args): Promise<any> {}
}