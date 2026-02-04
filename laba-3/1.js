function getName1(name) {
    return `Имя равно ${name}`;
}

const getName2 = function(name) {
    return `Имя равно ${name}`;
};

const getName3 = (name) => {
    return `Имя равно ${name}`;

};

console.log(getName1("Акакий"));
console.log(getName2("Мухамед"));
console.log(getName3("Скебоб"));