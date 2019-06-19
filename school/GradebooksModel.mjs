import {validate} from './validate';

export class GradebooksModel {
    constructor(groups, teachers, lms){
        this.gradebook = new Map();
        this.data = {
            groups, teachers , lms 
        }
    }

    add (level = 1, id)
    {
        return new Promise((resolve, reject) => {
            if (typeof level !== 'number' || typeof id !== 'number')
                reject('Can\'t add');
            else 
            {
                const GenerateID =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
                let id = GenerateID();
                this.gradebook(id , {level, id , records: []})
                resolve(id);
            }
    });

        
    }
    clear()
    {
        return new Promise((resolve, reject) => {
                this.grades.clear();
                resolve("Clear!");
        });
    }

    addRecord(gradebookId, record)
    {
        return new Promise((resolve, reject) => {
            if (this.groups.get(gradebookId) == 'undefined')
                reject('Can\'t add');
            else 
            {
                this.gradebook.get(gradebookId).records.push(record);
                resolve("addRecord resolved");
            }
    });

    }

    read(gradebookId, pupilId)
    {
        return new Promise ((resolve, reject) =>
        {
            this.gradebook.get(gradebookId)
        });
    }

    readAll(gradebookId)
    {
        return [...this.grades];
    }

}