import {NsModule} from "@bhiti/core";
import {AppConfiguration} from "./app.configuration";
import {JobModule} from "./modules/jobs/job.module";

@NsModule({
    declare: [

    ],
    import: [
        JobModule
    ],
    bootstrap: AppConfiguration
})
export class AppModule {}