

let user = {
    name: "Akshay"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log("descriptor :-", descriptor);



console.log("\n-----------------------------------writable: false :---------------------------------------" );

Object.defineProperty(user, "dob", {
    value: "25-10-1995",
    writable: false,
    enumerable: true,
    configurable: true
  });


let descriptorAge = Object.getOwnPropertyDescriptor(user, 'dob');

console.log("user :-", user);
console.log("descriptorAge :-", descriptorAge);
console.log("user.dob='30-12-1995' :-", user.dob="30-12-1995");

console.log("user :-", user); //can’t be reassigned because writable: false




console.log("\n------------------------------enumerable: false :-----------------------------------------------------" );
console.log("user :-", user);
Object.defineProperty(user, "dob", {
    
    writable: true,
    enumerable: false,
    configurable: true
  });
descriptorAge = Object.getOwnPropertyDescriptor(user, 'dob');
console.log("descriptorAge :-", descriptorAge);
console.log("user :-", user);

for (let key in user) console.log(key);




console.log("\n----------------------------configurable: false :-----------------------------------------------------" );

Object.defineProperty(user, "dob", {
    
    writable: true,
    enumerable: true,
    configurable: false
  });
  descriptorAge = Object.getOwnPropertyDescriptor(user, 'dob');
  console.log("descriptorAge :-", descriptorAge);
  console.log("user :-", user);

  console.log("delete user.dob :-", delete user.dob);
  console.log("user :-", user);


  console.log("\n----------------------------Object.defineProperties :-----------------------------------------------------" );

  Object.defineProperties(user, {
    name: { value: "Akshay", writable: true, enumerable: true, configurable: true },
     age: { value: "25", writable: true, enumerable: true, configurable: true },
     
  });
  let clone =  Object.getOwnPropertyDescriptors(user);
  console.log("\nObject.getOwnPropertyDescriptors(user); :-", clone);



  console.log("\n\n---------------------------- Sealing an object globally:-----------------------------------------------------" );

  //Forbids the addition of new properties to the object.
  console.log("Object.preventExtensions(user); \n",Object.preventExtensions(user))
 
  console.log("user.address ='Aurangabad'; ",user.address ='Aurangabad')
  console.log("user :-",user)
  
//Returns false if adding properties is forbidden, otherwise true.
console.log("Object.isExtensible(user) :-",Object.isExtensible(user))


 //Forbids adding/removing of properties. Sets configurable: false for all existing properties.
  console.log("\nObject.seal(user); \n", Object.seal(user))
   
  console.log("  Adding : user.address ='Aurangabad'; ",user.address ='Aurangabad') //adding
  console.log("Changing : user.name ='Abhay'; ",user.name ='Abhay') //changing
  console.log("removing : delete user.dob;   ",delete user.dob)  //deleting
  console.log("user :-",user)
  console.log("Object.isSealed(user) :-",Object.isSealed(user))


  console.log("\nObject.freeze(user); \n", Object.freeze(user))
   
  console.log("  Adding : user.address ='Aurangabad'; ",user.address ='Aurangabad') //adding
  console.log("Changing : user.name ='Akshay'; ",user.name ='Akshay') //changing
  console.log("removing : delete user.dob;   ",delete user.dob)  //deleting
  console.log("user :-",user)
  console.log("Object.isFrozen(user) :-",Object.isFrozen(user))
