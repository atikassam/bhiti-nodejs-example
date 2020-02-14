import {NsModule} from "@bhiti/core";
import {ProfileService} from "./profile.service";
import {ProfileInterface} from "./profile.interface";
import {ProfileRepo} from "./profile.repo";
import {ProfileRouter} from "./profile.router";
import {ProfileGql} from "./gql/profile.gql";
import {JobModule} from "../jobs/job.module";

@NsModule({
    declare: [
        ProfileRepo,
        ProfileService,
        ProfileInterface,
        ProfileRouter,
        ProfileGql
    ],
    import: [  JobModule ]
})
export class ProfileModule {}
