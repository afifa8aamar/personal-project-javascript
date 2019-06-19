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
            "dateOfBirth": "string",
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

    async add (teacher)
    {
      if (validate (this.schema , teacher))
      {
          var privateID = '_' + Math.random().toString(36).substr(2, 9);
          this.teachers.set(privateID, teacher);
          return privateID;
      }
      else throw new TypeError('Invalid object')
    }
    async read (id)
    {
      if (typeof id !== 'string' || this.teachers.get(id) == 'undefined')
          throw new TypeError("Invalid ID")
      else {
          var teacher = this.teachers.get(id);
          var obj = { id , ...teacher }
          return obj ; 
      }
    }
    async remove(id)
    {
        if ( this.teachers.get(id) == void 0)
          throw new TypeError('Can\'t Update');
        else
          return this.teachers.delete(id) ;

    }

    async update (currentID , obj )
    {
        if ( this.teachers.get(currentID) == void 0)
          throw new TypeError('Can\'t Update');
        else
        {
          let current = this.teachers.get(currentID);
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
              this.teachers.set(currentID,{...current, ...obj});
            }
          }
          return currentID;
        }
    }


}


