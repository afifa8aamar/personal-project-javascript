import {validate} from './validate';
export class LMSModel {
    constructor(){
        this.lms = new Set();
        this.schema = {
            "title": "string",
            "lessons": "number",
            "description": "string"
          }
    }

    add(subject)
    {
        return new Promise((resolve, reject) => {
            if (validate (this.schema , subject.subject))
            {
                this.lms.add(subject.subject);
                resolve('Resolved');
            }
            else reject('Can\'t add');
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