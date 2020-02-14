import {NsModule} from "@bhiti/core";
import {CommonMiddleware, CommonMiddleware1, CommonMiddleware1Overwrite} from "./common.middleware";
import {UserContextCreator} from "./user.context";

@NsModule({
    declare:[ ],
    export: [   ],
    overwrite: [
        { class: CommonMiddleware1, use: CommonMiddleware1Overwrite }
    ]
})
export class TestModule {}

