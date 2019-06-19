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
    async add (pupil)
    {
      if (validate (this.schema , pupil))
      {
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var privateID = id();
        this.pupils.set(privateID, pupil);
        return privateID;
      }
      else throw new TypeError('Can\'t add');

    }
    async read (id)
    {
      if (typeof id !== 'string' || this.pupils.get(id) == 'undefined')
          throw new TypeError('Can\'t read')
      else {
          var pupils = this.pupils.get(id);
          var obj = { id , ...pupils }
          return (obj);
      }
    }

    async update (currentID , obj )
    {
      if ( this.pupils.get(currentID) == void 0)
        throw new TypeError('Can\'t Update');
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
        return currentID
      }
    }



    async remove(id)
    {
      if ( this.pupils.get(id) == void 0)
        throw new TypeError('Invalid Id');
      else
      {
          this.pupils.delete(id) ;
        return (this.pupils.delete(id) )
      }
    }
}