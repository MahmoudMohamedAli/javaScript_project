console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World"); 

let Usr = {
    Name: "Abdul",
    Age: 20,
    Gender: "Male",
    print(){
        console.log(this.Name);
        console.log(this.Age);
        console.log(this.Gender);
    },
    getAge: function(){
        return this.Age;
    },
};

console.log(Usr);
console.log(Usr.Gender);
console.log(Usr["Gender"]);

Usr.print();
console.log(Usr.getAge());