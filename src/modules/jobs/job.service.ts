import {NsService} from "@bhiti/core";
import {JobRepo} from "./job.repo";

@NsService()
export class JobService {
    constructor(private job_repo: JobRepo) {}

    addJob(job) {}
    getJob(id) {}
    getsJob() {}
    updateJob(id) {}
    deleteJob(id) {}
}
