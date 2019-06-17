export class SubjectsModel {
    constructor(subject){
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        this.id = id();
        var title = subject.title;
        var lessons = subject.lessons;
        this.subject = {
            title, lessons
        }
    }

}