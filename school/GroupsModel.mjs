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

    update (currentID,obj)
    {
        return new Promise((resolve, reject) => {
            if ( this.groups.get(currentID) == void 0)
            {
              reject('Can\'t Update');
            }
            else
            {
                let current = this.groups.get(currentID);
                this.groups.set(currentID,{...current, ...obj});
                resolve (currentID)
            }
          });
        }

    
    readAll()
    {
        return new Promise((resolve, reject) => {   
                var groups = [...this.groups]
                resolve(groups);
        });
    }

}