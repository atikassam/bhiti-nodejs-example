import {NsModule} from "@bhiti/core";
import {CommonMiddleware, CommonMiddleware1, CommonMiddleware1Overwrite} from "./common.middleware";
import {UserContextCreator} from "./user.context";
import {TestModule} from "./test.module";

@NsModule({
    declare: [
        CommonMiddleware,
        CommonMiddleware1,
        UserContextCreator
    ],
    import: [ TestModule ],
    export: [  CommonMiddleware, CommonMiddleware1, UserContextCreator ],
    overwrite: []
})
export class CommonModule {}

console.log(TestModule)