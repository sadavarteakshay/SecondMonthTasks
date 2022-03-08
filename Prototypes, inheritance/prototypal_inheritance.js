
let user = {
    name: "Abhay",
    surname: "Roy",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  // setter 
  admin.fullName = "Akshay Sadavarte";  
  
  console.log("admin.fullName :-",admin.fullName);  
  console.log("user.fullName :-",user.fullName);  




const User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

User.prototype.getFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
};


User.prototype.sayHi = function() {
    console.log(`Hello, ${this.firstName} ${this.lastName} `);
};



let normalUser = new User('Akshay', 'Sadavarte');
normalUser.getFullName();  
normalUser.sayHi();  

console.log("\n-------------Prototype methods------------------")
let Car = {
    Wheels: 4
  };
  
  // create a new object with Car as a prototype
  let BMW = Object.create(Car);
  
  console.log("BMW.Wheels :-",BMW.Wheels); // 4
  
  console.log("Object.getPrototypeOf(BMW) === Car :-",Object.getPrototypeOf(BMW) === Car); // true
  
  Object.setPrototypeOf(BMW, {}); // change the prototype of BMW to {}


  