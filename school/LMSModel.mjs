export class LMSModel {
    constructor(){
        this.lms = new Set();
    }

    add(subject)
    {
        if (typeof subject.subject.title !== 'string')
            throw new TypeError('title should be string');
        if (typeof subject.subject.lessons !== 'number')
            throw new TypeError('lessons should be number');
        if (typeof subject.subject.description !== 'undefined' && typeof subject.subject.description !== 'string')
            throw new TypeError('description should be string');
        this.lms.add(subject.subject);
    }
    verify (subject)
    {
        return this.lms.has(subject.subject);
    }
    remove (subject)
    {
        if (this.lms.has(subject.subject))
            return this.lms.delete(subject.subject);
    }
    readAll()
    {
        return [...this.lms];
    }
}