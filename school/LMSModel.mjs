import {validate} from './validate';
export class LMSModel {
    constructor(){
        this.lms = new Set();
    }

    add(subject)
    {
        return new Promise((resolve, reject) => {
                this.lms.add(subject.subject);
                resolve('Resolved');
        });

    }
    verify (subject)
    {
        return new Promise((resolve, reject) => {
            resolve(this.lms.has(subject.subject));
        });
    }
    remove (subject)
    {
        return new Promise((resolve, reject) => {
        if (this.lms.has(subject.subject))
            {
                let l = this.lms.delete(subject.subject);
                resolve('Removed');
            }
            else reject('Can\'t Remove');
        });
    }
    readAll()
    {
        return new Promise((resolve, reject) => {
                resolve([...this.lms]);
        });
    }
}