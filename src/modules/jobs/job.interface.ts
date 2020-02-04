import {NsInterface} from "@bhiti/core";
import {JobService} from "./job.service";

@NsInterface()
export class JobInterface {
    constructor(private job_service: JobService) {}

    addJob(job) {
        return job
    }

    getJob(id) {
        return id
    }

    getJobs() {
        return []
    }

    updateJob(id) {
        return id
    }

    deleteJob(id) {
        return id
    }
}