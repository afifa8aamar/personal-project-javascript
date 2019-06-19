import {validate} from './validate';
export class TeachersModel {
    constructor(){
        this.teachers = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
              {
                "email": "string",
                "primary": "boolean"
              }
            ],
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male or female
            "subjects": [
              {
                "subject": "string"
              }
            ],
            "description": "string",
          }
    }

    add (teacher)
    {
        return new Promise((resolve, reject) => {
            if (validate (this.schema , teacher))
            {
                const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
                var privateID = id();
                this.teachers.set(privateID, teacher);
                resolve(privateID);
            }
            else reject('Can\'t add');
        });
        
    }
    read (id)
    {
        return new Promise ((resolve, reject) => 
        {
            if (typeof id !== 'string' || this.teachers.get(id) == 'undefined')
                reject('Some error')
            else {
                var teacher = this.teachers.get(id);
                var obj = { id , ...teacher }
                resolve(obj);
            }
        });
    }
    update(id, teacher)
    {
        if ( this.teachers.get(id) == 'undefined')
            throw new TypeError('This id does not exist!')
        return new Promise((resolve, reject) => {
            if (validate (this.schema , teacher, true))
            {
                this.teachers.set(id, teacher);
                resolve('Resolved');
            }
            else reject('Can\'t Update');
        });
    }
    remove(id)
    {
      return new Promise((resolve, reject) => {
        if ( this.teachers.get(id) == void 0)
        {
          reject('Can\'t Update');
        }
        else
        {
          resolve (this.teachers.delete(id) )
        }
      });
    }

    merge (currentID , obj )
    {
      let current = this.teachers.get(currentID);
      for ( var i  = 0 ; i < Object.keys(obj).length; i++)
      {
        if(Array.isArray(obj[Object.keys(obj)[i]]))
        {
          for (let i = 0 ; i < obj[Object.keys(obj)[i]].length ; i++)
          {
            this.merge(currentID , obj[Object.keys(obj)[i]])
          }
        }
        if (typeof obj[Object.keys(obj)[i]] == 'object')
        {
          this.merge(currentID , obj[Object.keys(obj)[i]])
        }
        if (Object.keys(obj)[i] == Object.keys(current)[i])
        {
          this.teachers.set(currentID,{...current, ...obj});
        }
      }
    }


}


