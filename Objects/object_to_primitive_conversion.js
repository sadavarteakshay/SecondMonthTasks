
let user = {
    name: "Ajay",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(user); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500


  console.log('\n----------------------------toString/valueOf---------------------------');

  let user1 = {
    name: "Akshay",
    money: 5000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log("user1  :- ",user1); // toString -> {name: "Akshay"}
  console.log("+user1 :-",+user1); // valueOf -> 5000
  console.log("user1 + 500 :-",user1 + 500); // valueOf -> 5500
  console.log("user1 + 500 :-","aaa"+user1); 