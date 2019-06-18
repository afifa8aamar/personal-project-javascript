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
        
        ;
        return true;
        
    }
    remove(id)
    {
        if ( this.teachers.get(id) == void 0)
            throw new ReferenceError('Invalid Id');
        return this.teachers.delete(id) ;
    }


}


