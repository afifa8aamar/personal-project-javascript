import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel
} from './school/index.mjs';

/*new SubjectsModel();
new LMSModel();
new PupilsModel();
new GroupsModel();
new GradebooksModel();
*/



var teacherObj = 
{
    "name": {
      "first": 'Pitter',
      "last": "Black"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "emails": [
      {
        "email": "string",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": "male", // male or female
    "subjects": [
      {
        "subject": "Math"
      }
    ],
    "description": "string",
  };

  var teacherObj1 = 
{
    "name": {
      "first": 'Oliver',
      "last": "White"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "emails": [
      {
        "email": "string",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": "male", // male or female
    "subjects": [
      {
        "subject": "Math"
      }
    ],
    "description": "string",
  };


const teacher = new TeachersModel();
var teacherid = teacher.add(teacherObj);
var result = teacher.read(teacherid);
console.log(result);
var update = teacher.update(teacherid, teacherObj1);
result = teacher.read(teacherid);
console.log(update);
console.log(result);
var deletedteacher = teacher.remove(teacherid);
console.log(deletedteacher);



console.log('Pupil -----------------------------------------------------------------------------------------');


var pupil1 = {
    "name": {
      "first": "Pitter",
      "last": "Black"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": 'male', // male OR female
  }

const pupils = new PupilsModel();
var pupilid = pupils.add(pupil1);
console.log(pupilid);
var result = pupils.read(pupilid);
console.log(result);
var update = pupils.update(pupilid, teacherObj1);
result = pupils.read(pupilid);
console.log(update);
console.log(result);
var deletedpupils = pupils.remove(pupilid);
console.log(deletedpupils);


console.log('subject ------------------------------------------------------------------');
const history = new SubjectsModel({
    title: 'History',
    lessons: 24
  });
  
  // will return subjectId
console.log(history.id);

const lms = new LMSModel();
console.log(history.subject.lessons)
lms.add(history);
//lms.remove(history);

var verify = lms.verify(history);
console.log (verify);
var allLMS = lms.readAll();
console.log (allLMS);




console.log('groups--------------------------------------------------------------------------------------------')

const room = 236;
const groups = new GroupsModel();


const group = {
  room,
  level: 1
}
// Create a new group
const groupid = groups.add(group);
console.log (groupid);
// Remove this pupil from this group



// Add this pupil to this group
//groups.add(group);

// Update room and level for this group
groups.update(groupid, {
  room: 237,
  level: 1
});

// Read information about group
var groupinfo = groups.read(groupid);
console.log(groupinfo);
// {
//   id: 'JEF5H43H'
//   room: 237,
//   level: 1,
//   gradebooks: [
//   	{
//   		level: 1,
//       id: null
//     }
//   ],
// }

// It will return array of groups
var allgroups = groups.readAll()
console.log(allgroups);

var removedgroups = groups.remove(groupid);
console.log (removedgroups);


console.log('greades---------------------------------------------------------------------------------------------------')




const pupilId =  pupilid;
const teacherId = teacherid;
const gradebooks = new GradebooksModel();

// Create a new gradebook
const gradebook = gradebooks.add(group.id);

// Destroy all data inside this gradebook
gradebooks.clear();

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

gradebooks.add(gradebookId, record);

// Read information about oliver results
const oliver = gradebooks.read(gradebookId, pupilId);
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
