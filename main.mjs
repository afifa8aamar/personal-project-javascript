import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel,
} from './school';


(async() =>{

var teacherObj = 
{
    "name": {
      "first": 'Pitter',
      "last": "Black"
    },
    "image": "image",
    "dateOfBirth": "19-12-1965",
    "emails": [
      {
        "email": "Pitter.black@gmail.com",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "+65489563254",
        "primary": true
      }
    ],
    "sex": "male", 
    "subjects": [
      {
        "subject": "Math"
      }
    ],
    "description": "A Good teacher",
  };

  var teacherObj1 = 
{
    "name": {
      "first": 'Lisa',
      "last": "White"
    },
    "image": "image",
    "dateOfBirth": "20-8-1996", 
    "emails": [
      {
        "email": "Lisa.white@gmail.com",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "+6785163254",
        "primary": true
      },
      {
        "phone": "+6785167854",
        "primary": false
      }
    ],
    "sex": "female"
  };

var obj = {
  "name": {
    "first": 'Changed',
    "last": "To this"
  },
  "phones": [
    {
      "phone": "+6785163254",
      "primary": true
    },
    {
      "phone": "+6785167854",
      "primary": false
    }
  ],
}


const teacher = new TeachersModel();
var teacherid = await teacher.add(teacherObj);
console.log (await teacher.update(teacherid,obj))
console.log( await teacher.read(teacherid))
var teacherid = await teacher.add(teacherObj);
console.log (teacherid);
var result = await teacher.read(teacherid);
console.log(result);
var update = await teacher.update(teacherid, teacherObj1);
result = await teacher.read(teacherid);
console.log(update);
console.log(result);
var deletedteacher = await teacher.remove(teacherid);
console.log(deletedteacher);



console.log('Pupil -----------------------------------------------------------------------------------------');


var pupil1 = {
    "name": {
      "first": "Pitter",
      "last": "Black"
    },
    "image": "string",
    "dateOfBirth": "string",
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": 'male', 
    "description": "A Good pupil",
  }

  var pupil2 = {
    "name": {
      "first": "Changed",
      "last": "To this"
    },
    "image": "string",
    "dateOfBirth": "string",
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": 'male', 
    "description": "A Good pupil",
  }

const pupils = new PupilsModel();
var pupilid = await pupils.add(pupil1);
console.log(pupilid);
var result = await pupils.read(pupilid);
console.log(result);
var update =await pupils.update(pupilid, pupil2);
result =await pupils.read(pupilid);
console.log(update);
console.log(result);
var deletedpupils =await pupils.remove(pupilid);
console.log(deletedpupils);



console.log(' LMS + subject ------------------------------------------------------------------');

const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: 'Some text'
});

var historyid = history.id
console.log(historyid);

const lms = new LMSModel();
//lms.remove(history);
console.log(await lms.add(history));
console.log(await lms.verify(history));
console.log(await lms.readAll());




console.log('groups------------------------------------------------------------------------------------')

const room = 236;
const groups = new GroupsModel();
const groupid = await groups.add(room);
console.log(groupid)
var groupInfo = await groups.read(groupid);
console.log(groupInfo)
await groups.addPupil(groupid, pupilid);
await groups.addPupil(groupid, pupilid);
var groupInfo = await groups.read(groupid);
console.log(groupInfo)
console.log(await groups.update(groupid, {room: 237}))
console.log(await groups.read(groupid))
console.log(await groups.readAll())


console.log('grades------------------------------------------------------------------------------------')



const pupilId = pupil1.id;
const teacherId = teacherid;
const gradebooks = new GradebooksModel(groups, teacher, lms);
//console.log(gradebooks)

// Create a new gradebook
const level = 1;
const gradebook = await gradebooks.add(level, groupid);
console.log(gradebook)

// Destroy all data inside this gradebook
await gradebooks.clear();
console.log(gradebooks)

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

await gradebooks.addRecord(gradebookId, record);

// Read information about oliver results
const oliver = await gradebooks.read(gradebookId, pupilId);
console.log(oliver);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }

// Read information about all students in this gradebook
const students = gradebooks.readAll(gradebookId); // It will return the array of objects


})();