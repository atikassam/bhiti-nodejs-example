import {NsModule} from "@bhiti/core";
import {AppConfiguration} from "./app.configuration";
import {JobModule} from "./modules/jobs/job.module";
import {ProfileModule} from "./modules/profile/profile.module";

@NsModule({
    declare: [

    ],
    import: [
        JobModule,
        ProfileModule
    ],
    bootstrap: AppConfiguration
})
export class AppModule {}