import { TeachersModel } from "./TeachersModel.mjs";

import { TeachersModel } from "./TeachersModel.mjs";

export class GradebooksModel {
    constructor(groups, teachers, lms){
        const GenerateID =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var id = GenerateID();
        this.grades = new Map();
        this.grades.set(id, {groups , teachers , lms})
    }

    add (level = 1, id)
    {
        return new Promise((resolve, reject) => {
            if (typeof level !== 'number' || typeof id !== 'number')
                reject('Can\t add');
            else 
            {
                this.grades.groups.push({level , id})
                resolve({level, id});
            }
    });

        
    }
    clear()
    {
        this.grades.clear();
    }
    addRecord(gradebookId, record)
    {

    }

    read(gradebookId, pupilId);
    {
        return new Promise ((resolve, reject) =>
        {


        });
    }

    readAll(gradebookId)
    {
        return [...this.grades];
    }

}