import {NsModule} from "@bhiti/core";
import {JobService} from "./job.service";
import {JobInterface} from "./job.interface";
import {JobRepo} from "./job.repo";
import {JobRouter} from "./job.router";

@NsModule({
    declare: [
        JobRepo,
        JobService,
        JobInterface,
        JobRouter
    ],
    import: [  ]
})
export class JobModule {}