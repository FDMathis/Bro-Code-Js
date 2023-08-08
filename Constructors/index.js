// constructors = a special method of class,
//                accepts arguments and assigns properties


class student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying.`)
    }
}

const student1 = new student("Spongebob", 30, 3.2);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

console.log(`${student1.name} is ${student1.age} years old and has a ${student1.gpa} gpa.`)

student1.study();