export class TeachersModel {
    constructor(){
        this.teachers = new Map();
    }

    add (teacher)
    {
        if (typeof teacher !== 'object')
            throw new TypeError('`${teacher}` is not an object');
        if (typeof teacher.name !== 'object')
            throw new TypeError('Provide object for name')
        if (typeof teacher.name.first !== 'string')
            throw new TypeError('Provide string for first name')
        if (typeof teacher.name.last !== 'string')
            throw new TypeError('Provide string for last name')
        if (typeof teacher.image !== 'string')
            throw new TypeError('Provide string for image')
        if (typeof teacher.dateOfBirth !== 'string')
            throw new TypeError('Provide string for dateOfBirth')
        if (typeof teacher.emails !== 'object')
            throw new TypeError('Provide object for emails')
        for (let i = 0 ; i < teacher.emails.length ; i++)
        {
            if (typeof teacher.emails[i].email!== 'string')
                throw new TypeError('Provide string for emails.email')
            if (typeof teacher.emails[i].primary !== 'boolean')
                throw new TypeError('Provide boolean for emails.primary')
        }
        if (typeof teacher.phones !== 'object')
            throw new TypeError('Provide object for phones')
        for (let i = 0 ; i < teacher.phones.length ; i++)
        {
            if (typeof teacher.phones[0].phone !== 'string')
                throw new TypeError('Provide string for phones.phone')
            if (typeof teacher.phones[0].primary !== 'boolean')
                throw new TypeError('Provide boolean for phones.primary')
        }
        if (typeof teacher.sex !== 'string')
            throw new TypeError('Provide string for sex')
        if (!Array.isArray(teacher.subjects))
            throw new TypeError('Provide Array for subjects')
        for (let i = 0 ; i < teacher.subjects ; i++)
        {
            if (typeof teacher.subjects.subject !== 'string')
                throw new TypeError('Provide string for subject')
        }
        if (teacher.description !== null && typeof teacher.description !== 'string')
            throw new TypeError('Provide string for description')
        
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var privateID = id();
        this.teachers.set(privateID, teacher);
        return privateID;
    }
    read (id)
    {
        if (typeof id !== 'string')
        {
            throw new TypeError('id is not a string');
        }
        if (this.teachers.get(id) == 'undefined')
            return null;
        var teacher = this.teachers.get(id);
        var obj = { id , ...teacher }
        return obj;
    }
    update(id, teacher)
    {
        let check = this.teachers.get(id)
        if (check == 'undefined')
            throw new TypeError('This id does not exist!')
        if (typeof teacher !== 'object')
            throw new TypeError('`${teacher}` is not an object');
        if (typeof teacher.name !== 'object')
            throw new TypeError('Provide object for name')
        if (typeof teacher.name.first !== 'string')
            throw new TypeError('Provide string for first name')
        if (typeof teacher.name.last !== 'string')
            throw new TypeError('Provide string for last name')
        if (typeof teacher.image !== 'string')
            throw new TypeError('Provide string for image')
        if (typeof teacher.dateOfBirth !== 'string')
            throw new TypeError('Provide string for dateOfBirth')
        if (typeof teacher.emails !== 'object')
            throw new TypeError('Provide object for emails')
        for (let i = 0 ; i < teacher.emails.length ; i++)
        {
            if (typeof teacher.emails[i].email!== 'string')
                throw new TypeError('Provide string for emails.email')
            if (typeof teacher.emails[i].primary !== 'boolean')
                throw new TypeError('Provide boolean for emails.primary')
        }
        if (typeof teacher.phones !== 'object')
            throw new TypeError('Provide object for phones')
        for (let i = 0 ; i < teacher.phones.length ; i++)
        {
            if (typeof teacher.phones[0].phone !== 'string')
                throw new TypeError('Provide string for phones.phone')
            if (typeof teacher.phones[0].primary !== 'boolean')
                throw new TypeError('Provide boolean for phones.primary')
        }
        if (typeof teacher.sex !== 'string')
            throw new TypeError('Provide string for sex')
        if (!Array.isArray(teacher.subjects))
            throw new TypeError('Provide Array for subjects')
        for (let i = 0 ; i < teacher.subjects ; i++)
        {
            if (typeof teacher.subjects.subject !== 'string')
                throw new TypeError('Provide string for subject')
        }
        if (teacher.description !== null && typeof teacher.description !== 'string')
            throw new TypeError('Provide string for description')
        this.teachers.set(id, teacher);
        return true;
        
    }
    remove(id)
    {
        if ( this.teachers.get(id) == void 0)
            throw new ReferenceError('Invalid Id');
        return this.teachers.delete(id) ;
    }


}


