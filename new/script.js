'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
console.log(`Пользователь ${this.name} ушел`);
};

const alex = new User('Alex', 28);
const ivan = new User('Ivan', 30);

ivan.exit();

ivan.hello();
alex.hello();

console.log(alex);
console.log(ivan);