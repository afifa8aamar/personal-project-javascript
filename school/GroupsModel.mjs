
export class GroupsModel {
    constructor(){
        this.groups = new Map();
    }
    add (room, level =1)
    {
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var privateID = id();
        
        let group = {
            privateID,
            room ,
            level ,
        }
        if (typeof room !== 'number')
            throw new TypeError('Use number for group.room');    
        if (typeof level !== 'number')
            throw new TypeError('Use number for group.level');

        this.groups.set(privateID, group );
        return privateID;
    }
    /*remove(id)
    {
        if (typeof this.groups.get(id) == 'undevined')
            throw new TypeError('Invalid Id');
        return this.groups.delete(id) ;
    }
    read (id)
    {
        if (typeof id !== 'string')
            throw new TypeError('id is not a string');
        if (typeof this.groups.get(id) == 'undefined')
            return null;
        var group = this.groups.get(id);
        var obj = { id , ...group };
        return obj;
    }
    update (id,obj)
    {

        if (typeof id !== 'string')
            throw new TypeError('id is not a string');
        if (typeof this.groups.get(id) == 'undefined')
            throw new TypeError('There is no such id');
        if (typeof group !== 'object')
            throw new TypeError('Use object for group');
        if (typeof group.room !== 'number')
            throw new TypeError('Use number for group.room');    
        if (typeof group.level !== 'number')
            throw new TypeError('Use number for group.level');
        this.groups.set(id, group );
    }
    readAll()
    {
        return [...this.groups]
    }*/
}