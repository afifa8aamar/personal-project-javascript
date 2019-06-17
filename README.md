# personal-project-javascript


// main.mjs 

import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel
} from './school/index.mjs';

new SubjectsModel();
new LMSModel();
new TeachersModel();
new PupilsModel();
new GroupsModel();
new GradebooksModel();


// index.mjs


export {SubjectsModel } from './SubjectsModel.mjs'
export {LMSModel } from './LMSModel.mjs'
export {TeachersModel } from './TeachersModel.mjs'
export {PupilsModel } from './PupilsModel.mjs'
export {GroupsModel } from './GroupsModel.mjs'
export {GradebooksModel } from './GradebooksModel.mjs'



// export class GradebooksModel {
    constructor(){
        console.log('test GradebooksModel');
    }

}

//export class GroupsModel {
    constructor(){
        console.log('test GroupsModel');
    }

}

//export class LMSModel {
    constructor(){
        console.log('test LMSModel');
    }

}


//export class PupilsModel {
    constructor(){
        console.log('test PupilsModel');
    }

}


//export class SubjectsModel {
    constructor(){
        console.log('test SubjectsModel');
    }

}


//export class TeachersModel {
    constructor(){
        console.log('test TeachersModel');
    }

}
