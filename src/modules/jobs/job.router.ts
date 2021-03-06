import {JobInterface} from "./job.interface";
import {HttpDelete, HttpGet, HttpMiddleware, HttpPost, HttpPut, NsRouter} from "@bhiti/http";
import {CommonMiddleware, CommonMiddleware1} from "../common/common.middleware";
import {UserContext} from "../common/user.context";

@NsRouter('/')
@HttpMiddleware(CommonMiddleware, CommonMiddleware1)
export class JobRouter {
    constructor(private job_innterface: JobInterface){}

    @HttpPost('/add')
    async addJob(req, res) {
        console.log(arguments.length)
        res.json(await this.job_innterface.addJob(req.body))
    }

    @HttpGet('/details/:id')
    async getJob(req, res) {
        res.json(await this.job_innterface.getJob(req.params.id))
    }

    @HttpGet('/list')
    @UserContext({
        resource: 'user',
        action: 'read'
    })
    async getJobs(req, res) {
        console.log('after intercept function')
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