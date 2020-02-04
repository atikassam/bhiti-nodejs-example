import {NsRepository} from "@bhiti/core";
import * as fs from 'fs'

@NsRepository()
export class JobRepo {
    constructor() {}

    addData(data = {}) {
        return new Promise((resolve, reject) => {
            fs.writeFile('./data.json', JSON.stringify(data), (err => err ? reject(err) : resolve(err)))
        })
    }

    getData(): any {
        return new Promise((resolve, reject) => {
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err)
                    return resolve({});
                }

                resolve(JSON.parse(data))
            });
        })
    }

    async addJob(job) {
        let data = await this.getData();

        if (!data.jobs) data.jobs = [];

        data.jobs.push({ id: data.jobs.length + 1, ...job });
        await this.addData(data);

        return job;
    }

    async getJobs() {
        let data = await this.getData();

        return data.jobs
    }

    async updateJob(id, update) {
        let data = await this.getData();

        if (!data.jobs) data.jobs = [];
        let job = data.jobs.find(job => job === id);

        data.jobs[data.jobs.indexOf(job)] = { ...job, ...update };
        await this.addData(data);

        return job;
    }

    async deleteJob(id) {
        let data = await this.getData();

        if (!data.jobs) data.jobs = [];
        let job = data.jobs.find(job => job === id);

        data.jobs.splice(data.jobs.indexOf(job), 1);
        await this.addData(data);

        return job;
    }


}