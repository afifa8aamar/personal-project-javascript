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
    add (room, level =1)
    {
        return new Promise((resolve, reject) => {
            if (typeof room !== 'number' || typeof level !== 'number' )
            reject('Can\'t add')   
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
            resolve(privateID);
        }
        });
    }

    addPupil(groupID , pupilID)
    {
        return new Promise((resolve, reject) => {
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

            resolve(`Added ${pupilID} to ${groupID}`);
        });
    }
    removePupil(groupID , pupilID)
    {
        return new Promise((resolve, reject) => {
            if (typeof this.groups.get(groupID) == 'undefined' )
                reject(`Invalid group id ${groupID}`)
            else 
                resolve(this.groups.delete(id));
        });
    }
    read (groupID)
    {

        return new Promise((resolve, reject) => {
            if (typeof this.groups.get(groupID) !== 'undefined')
            {
                var room =  this.groups.get(groupID).room;
                var group = {
                    groupID, room
                }
                resolve(group);

            }
            else reject('Invalid ID');

        });
    }

    update (id,obj)
    {
        if ( this.groups.get(id) == 'undefined')
            throw new TypeError('This id does not exist!')
        return new Promise((resolve, reject) => {

            if (validate (this.schema , obj, true))
            {
                this.groups.set(id, obj);
                resolve('Resolved');
            }
            else reject('Can\'t Update');
        });


        this.groups.set(id, group );
    }
    readAll()
    {
        return [...this.groups]
    }

}