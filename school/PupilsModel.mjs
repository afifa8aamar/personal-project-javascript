export class PupilsModel {
    constructor(){
        this.pupils = new Map();
    }
    add (pupil)
    {
        if (typeof pupil !== 'object')
            throw new TypeError('pupil is not an object');
        if (typeof pupil.name !== 'object')
            throw new TypeError('Provide object for name')
        if (typeof pupil.name.first !== 'string')
            throw new TypeError('Provide string for first name')
        if (typeof pupil.name.last !== 'string')
            throw new TypeError('Provide string for last name')
        if (typeof pupil.image !== 'string')
            throw new TypeError('Provide string for image')
        var date = new Date(pupil.dateOfBirth);
        date = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        if (typeof date !== 'string')
            throw new TypeError('Provide string for dateOfBirth in format \'dd-mm-yyy\'');
        if (typeof pupil.phones !== 'object')
            throw new TypeError('Provide object for phones')
        for (let i = 0 ; i < pupil.phones.length ; i++)
        {
            if (typeof pupil.phones[0].phone !== 'string')
                throw new TypeError('Provide string for phones.phone')
            if (typeof pupil.phones[0].primary !== 'boolean')
                throw new TypeError('Provide boolean for phones.primary')
        }
        if (typeof pupil.sex !== 'string')
            throw new TypeError('Provide string for sex')
        if (typeof pupil.description !== 'undefined' && typeof pupil.description !== 'string')
            throw new TypeError('Provide string for description')
        
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var privateID = id();
        this.pupils.set(privateID, pupil);
        return privateID;
    }
    read (id)
    {
        if (typeof id !== 'string')
        {
            throw new TypeError('id is not a string');
        }
        if (this.pupils.get(id) == 'undefined')
            return null;
        var pupils = this.pupils.get(id);
        var obj = { id , ...pupils }
        return obj;
    }
    update(id, pupil)
    {
        let check = this.pupils.get(id)
        if (typeof pupil !== 'object')
            throw new TypeError('pupil is not an object');
        if (typeof pupil.name !== 'object')
            throw new TypeError('Provide object for name')
        if (typeof pupil.name.first !== 'string')
            throw new TypeError('Provide string for first name')
        if (typeof pupil.name.last !== 'string')
            throw new TypeError('Provide string for last name')
        if (typeof pupil.image !== 'string')
            throw new TypeError('Provide string for image')
        if (typeof pupil.dateOfBirth !== 'string')
            throw new TypeError('Provide string for dateOfBirth')
        if (typeof pupil.phones !== 'object')
            throw new TypeError('Provide object for phones')
        for (let i = 0 ; i < pupil.phones.length ; i++)
        {
            if (typeof pupil.phones[0].phone !== 'string')
                throw new TypeError('Provide string for phones.phone')
            if (typeof pupil.phones[0].primary !== 'boolean')
                throw new TypeError('Provide boolean for phones.primary')
        }
        if (typeof pupil.sex !== 'string')
            throw new TypeError('Provide string for sex')
        if (typeof pupil.description !== 'undefined' && typeof pupil.description !== 'string')
            throw new TypeError('Provide string for description')
        
        this.pupils.set(id, pupil);
        return true;
    }


    remove(id)
    {
        if ( this.pupils.get(id) == void 0)
            throw new ReferenceError('Invalid Id');
        return this.pupils.delete(id) ;
    }
}