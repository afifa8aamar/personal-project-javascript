var schema = {
  "name": {
    "first": "string",
    "last": "string"
  },
  "image": "number",
  "dateOfBirth": "string", // format date
  "phones": [
    {
      "phone": "string",
      "primary": "boolean"
    }
  ],
  "sex": "string", // male OR female
  "description": "string"
}


var data = {
  "name": {
    "first": "string",
    "last": "string"
  },
  "image": 5,
  "dateOfBirth": "string", // format date
  "phones": [
    {
      "phone": "string",
      "primary": false
    } 
  ],
  "sex": "string", 
  "description": "string"
}
console.log (Object.values(schema)[0] !== '[object Object]' || Object.values(schema)[0] == typeof data[Object.keys(data)[0]] )
var obj = Object.keys(schema)[0]
function validate(schema,data) 
{
  for (var i = 0; i < Object.keys(schema).length ; i++)
  {
    if(Array.isArray(data[Object.keys(data)[i]]))
    {
        for (let i = 0 ; i < data[Object.keys(data)[i]].length ; i++)
            validate (schema[Object.keys(schema)[0]] , data[Object.keys(data)[i]])
    }
    if (typeof data[Object.keys(data)[i]] == 'object')
    {
      validate(schema[Object.keys(schema)[i]] , data[Object.keys(data)[i]])
    }
    if(data.hasOwnProperty(Object.keys(schema)[i]) == 'false' )  
    {
      throw new TypeError('Key is not provided')
    }
    if (typeof Object.values(schema)[i] !== 'object' && Object.values(schema)[i] !== typeof data[Object.keys(data)[i]] )
    {
      throw new TypeError(`Type of ${Object.keys(schema)[i]} should be ${schema[Object.keys(schema)[i]]} `)
    }
  }
    return true
}

var isValid = validate(schema,data)
console.log(isValid)
