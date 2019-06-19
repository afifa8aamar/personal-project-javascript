import {validate} from './validate';
export class PupilsModel {
    constructor(){
        this.pupils = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", 
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string",
            "description": "string"
          }
    }
    add (pupil)
    {
        return new Promise((resolve, reject) => {
            if (validate (this.schema , pupil))
            {
                const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
                var privateID = id();
                this.pupils.set(privateID, pupil);
                resolve(privateID);
            }
            else reject('Can\'t add');
        });

    }
    read (id)
    {
        if (typeof id !== 'string')
        {
            throw new TypeError('id is not a string');
        }
        if (this.pupils.get(id) == 'undefined')
            return null;
        return new Promise ((resolve, reject) => 
        {
            if (typeof id !== 'string' || this.pupils.get(id) == 'undefined')
                reject('Can\'t read')
            else {
                var pupils = this.pupils.get(id);
                var obj = { id , ...pupils }
                resolve(obj);
            }
        });
    }

    // update(id, pupil)
    // {
    //     if (this.pupils.get(id) == 'undefined')
    //         throw new TypeError('This id is not valid')
    //     return new Promise((resolve, reject) => {
    //         if (validate (this.schema , pupil, true))
    //         {
    //             this.pupils.set(id, pupil);
    //             resolve('Resolved');
    //         }
    //         else reject('Can\'t Update');
    //     });
    // }


    update (currentID , obj )
    {
      return new Promise((resolve, reject) => {
        if ( this.pupils.get(currentID) == void 0)
        {
          reject('Can\'t Update');
        }
        else
        {
          let current = this.pupils.get(currentID);
          for ( var i  = 0 ; i < Object.keys(obj).length; i++)
          {
            if(Array.isArray(obj[Object.keys(obj)[i]]))
            {
              for (let i = 0 ; i < obj[Object.keys(obj)[i]].length ; i++)
              {
                this.update(currentID , obj[Object.keys(obj)[i]])
              }
            }
            if (typeof obj[Object.keys(obj)[i]] == 'object')
            {
              this.update(currentID , obj[Object.keys(obj)[i]])
            }
            if (Object.keys(obj)[i] == Object.keys(current)[i])
            {
              this.pupils.set(currentID,{...current, ...obj});
            }
          }
          resolve ('Updated')
        }
      });
    }



    remove(id)
    {
        return new Promise((resolve, reject) => {
            if ( this.pupils.get(id) == void 0)
            {
              reject('Invalid Id');
            }
            else
            {
                this.pupils.delete(id) ;
              resolve (this.pupils.delete(id) )
            }
          });
    }
}