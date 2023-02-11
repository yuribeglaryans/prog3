var obj = {
    "first_name": "Karo",
    "last_name": "Hovsepyan",
    "age": 13,
    "tumo_student": false,

    sayHello() {
        console.log(this.last_name);
    }
}

obj.sayHello();
//  console.log(obj.first_name);
//  obj.sayHello();