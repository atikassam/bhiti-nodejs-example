import {NsConfiguration} from "@bhiti/core";
import * as bodyParser from "body-parser";
import * as express from "express";
import {NsfServerConfiguration} from "@bhiti/http";
import {GqlConfigurations} from "@bhiti/gql";

@NsConfiguration()
export class AppConfiguration implements NsfServerConfiguration, GqlConfigurations {
    async getPort(): Promise<any> {
        return 8082
    }

    getGraphQlConfiguration() {
        return {
            path: '/gql'
        }
    }

    async beforeRoutesInit(app: any): Promise<any> {
        app.use(express.static(__dirname+'/view'))
        app.use(bodyParser.json())
    }
}