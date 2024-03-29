import {validate} from './validate';
export class GroupsModel {
    constructor(){
        this.groups = new Map();
        this.pupils = new Map();
        this.schema = {
            "id": "string",
            "room": "number"
        }
    }
    async add (room, level =1)
    {
        if (typeof room !== 'number' || typeof level !== 'number' )
            throw new TypeError('Can\'t add')   
        else
        {
            const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
            var privateID = id();
            var pupils = this.pupils;
            let group = 
            {
                privateID,
                room ,
                level ,
                pupils
            }
            this.groups.set(privateID, group );
            return privateID;
        }
    }

    async addPupil(groupID , pupilID)
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
        let oldData = this.groups.get(groupID);
        this.groups.set(groupID,{...oldData, ...group});
        return (`Added ${pupilID} to ${groupID}`)
    }
    async removePupil(groupID , pupilID)
    {
        if (typeof this.groups.get(groupID) == 'undefined' )
            return `Invalid group id ${groupID}`
        else throw new TypeError(this.groups.delete(id));
    }
    async read (groupID)
    {
        if (typeof this.groups.get(groupID) !== 'undefined')
        {
            var room =  this.groups.get(groupID).room;
            var group = {
                groupID, room
            }
            return(group);

        }
        else throw new TypeError('Invalid ID');
    }

    async update (currentID,obj)
    {
        if ( this.groups.get(currentID) == void 0)
        {
            throw new TypeError('Can\'t Update');
        }
        else
        {
            let current = this.groups.get(currentID);
            this.groups.set(currentID,{...current, ...obj});
            return (currentID)
        }
    }

    
    readAll()
    {
 
        var groups = [...this.groups]
        return (groups);
    }

}