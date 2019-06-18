import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel
} from './school';

// new SubjectsModel();
// new LMSModel();
// new PupilsModel();
// new GroupsModel();
// new GradebooksModel();


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
      "first": 'Oliver',
      "last": "White"
    },
    "image": "image",
    "dateOfBirth": "20-8-1996", 
    "emails": [
      {
        "email": "Oliver.white@gmail.com",
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
    "sex": "male", 
    "subjects": [
      {
        "subject": "Biology"
      },
      {
        "subject": "Geology"
      }
    ],
    "description": "A good teacher",
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

// Create a new group
const groupId = groups.add(room);

// Remove this pupil from this group
groups.removePupil(groupId, pupilId);

// Add this pupil to this group
groups.addPupil(groupId, pupilId);

// Update room for this group
groups.update(groupId, {
  room: 237
});

// Read information about group
groups.read(groupId);
// {
//   id: 'JEF5H43H'
//   room: 237
// }

// It will return array of groups
groups.readAll()

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



