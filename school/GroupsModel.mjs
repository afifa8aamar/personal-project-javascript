
export class GroupsModel {
    constructor(){
        this.groups = new Map();
        this.pupils = new Map();
    }
    add (room, level =1)
    {
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var privateID = id();
        var pupils = this.pupils;
        let group = {
            privateID,
            room ,
            level ,
            pupils
        }
        if (typeof room !== 'number')
            throw new TypeError('Use number for group.room');    
        if (typeof level !== 'number')
            throw new TypeError('Use number for group.level');

        this.groups.set(privateID, group );
        return privateID;
    }
    addPupil(groupID , pupilID)
    {
        this.pupils.set(groupID,pupilID);
        var pupils = [...this.pupils];
        var room = this.groups.get(groupID).room;
        var level = this.groups.get(groupID).level;
        let group = {
            groupID,
            room ,
            level ,
            pupils
        };
        this.groups.set(groupID,group);
    }
    removePupil(id)
    {
        if (typeof this.groups.get(id) == 'undevined')
            throw new TypeError('Invalid Id');
        return this.groups.delete(id) ;
    }
    read (groupID)
    {
        if (typeof this.groups.get(groupID) == 'undefined')
            throw new TypeError('id is invalid');
        var group = this.groups.get(groupID);
        var obj = {...group }
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
    }
}