import {HttpDelete, HttpGet, HttpPost, HttpPut, NsRouter} from "@bhiti/core";
import {JobInterface} from "./job.interface";
import {JobRepo} from "./job.repo";

@NsRouter('/')
export class JobRouter {
    constructor(private job_innterface: JobInterface){}

    @HttpPost('/add')
    async addJob(req, res) {
        res.json(await this.job_innterface.addJob(req.body))
    }

    @HttpGet('/details/:id')
    async getJob(req, res) {
        res.json(await this.job_innterface.getJob(req.params.id))
    }

    @HttpGet('/list')
    async getJobs(req, res) {
        res.json(await this.job_innterface.getJobs())
    }


    @HttpPut('/:id')
    async updateJob(req, res) {
        res.json(await this.job_innterface.updateJob(req.params.id, req.body))
    }

    @HttpDelete('/:id')
    async deleteJob(req, res) {
        res.json(await this.job_innterface.deleteJob(req.params.id))
    }
}