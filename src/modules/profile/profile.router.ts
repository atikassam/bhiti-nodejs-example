import {ProfileInterface} from "./profile.interface";
import {ProfileRepo} from "./profile.repo";
import {HttpDelete, HttpGet, HttpPost, HttpPut, NsRouter} from "@bhiti/http";

@NsRouter('/profile')
export class ProfileRouter {
    constructor(private job_innterface: ProfileInterface){}

    @HttpPost('/add')
    async addJob(req, res) {
        res.json(await this.job_innterface.addJob(req.body))
    }

    @HttpGet('/details/:id')
    async getJob(req, res) {
        console.log('req')
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