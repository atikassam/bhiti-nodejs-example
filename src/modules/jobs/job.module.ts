import {NsModule} from "@bhiti/core";
import {JobService} from "./job.service";
import {JobInterface} from "./job.interface";
import {JobRepo} from "./job.repo";
import {JobRouter} from "./job.router";
import {JobGql} from "./gql/job.gql";
import {CommonModule} from "../common/common.module";

@NsModule({
    declare: [
        JobRepo,
        JobService,
        JobInterface,
        JobRouter,
        JobGql
    ],
    import: [ CommonModule ],
    export: [ JobGql ],
    overwrite: [
        { class: JobInterface, use: JobService }
    ]
})
export class JobModule {}
