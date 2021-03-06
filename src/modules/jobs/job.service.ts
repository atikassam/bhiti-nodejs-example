import {NsService} from "@bhiti/core";
import {JobRepo} from "./job.repo";

@NsService()
export class JobService {
    constructor(private job_repo: JobRepo) {}

    addJob(job) {
        return this.job_repo.addJob(job)
    }

    async getJob(id) {
        return (await this.job_repo.getJobs()).find(j => j.id == id)
    }

    getJobs() {
        return this.job_repo.getJobs()
    }

    updateJob(id, update) {
        return this.job_repo.updateJob(id, update)
    }

    deleteJob(id) {
        return this.job_repo.deleteJob(id)
    }
}
