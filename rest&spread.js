//rest
restData = (a, ...args) => {
    console.log("a is " + a);
    args.forEach(element => {
        console.log(element);
    });
}

restData("chamod", 10, 40, 35);

//spread
spread = (a,b,c,d,e) => {
    
        console.log(a,b,c,d,e);
    
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
spread(...myArray);

const person = {
    Myname:"chamod",age:20,address:"matara",country:"sri lanka",
}

let { name, age,...rest } = person;
console.log(name, age,rest);
