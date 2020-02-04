import {NsInterface} from "@bhiti/core";
import {JobService} from "./job.service";

@NsInterface()
export class JobInterface {
    constructor(private job_service: JobService) {}

    addJob(job) {
        return this.job_service.addJob(job)
    }

    getJob(id) {
        return  this.job_service.getJob(id)
    }

    getJobs() {
        return this.job_service.getJobs()
    }

    updateJob(id, update) {
        return this.job_service.updateJob(id, update)
    }

    deleteJob(id) {
        return this.job_service.deleteJob(id)
    }
}