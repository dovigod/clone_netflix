'use strict';
class ObjectUtilities {

  

   static mergeObjects = (a,b) => {
     return {...a,...b};

   }


   static removePassword = (user) => {
     const {password} = user;
     //delete password ==> error

     const tmp = {...user};

     delete tmp['password'];
     return  tmp;
   }


   static freezeObj = (user) => {
   
     const frozen = user;
     
     return Object.freeze(frozen);
   }

   static getOnlyValues = (frozenUser) => Object.values(frozenUser);
   

   static getOnlyProperties = (frozenUser) => Object.keys(frozenUser);
   
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi"
};

const objB = {
  password: "12345"
};


/// calls static Methods

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);
/////calll by value error caution!!!!!!!!!!!!!!!!!!!!
const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
