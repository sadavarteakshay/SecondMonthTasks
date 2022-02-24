
let person = {

    firstName: 'Akshay',
    lastName: 'Sadavarte',

    get fullName() {

        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");

    }
}


console.log("person.fullName :-",person.fullName);
console.log("person.fullName = 'Ajay Jadhav' :-\n",person.fullName = 'Ajay Jadhav');