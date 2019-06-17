export class GradebooksModel {
    constructor(){
        this.grades = new Map();
    }

    add (groupID)
    {

    }
    clear()
    {
        this.grades.clear();
    }
    add(gradebookId, record)
    {

    }
    readAll()
    {
        return [...this.grades];
    }

}