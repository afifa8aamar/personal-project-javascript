export class SubjectsModel {
    constructor(subject){
        const f =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        this.id = f();
        var title = subject.title;
        var lessons = subject.lessons;
        var description = subject.description
        this.subject = {
            title, lessons, description
        }
    }

}