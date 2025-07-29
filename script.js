



//------------ array and object destructuring


        // const language = ["py", "java", 'javas',"math"];
        // let[,,js, ma] = language;

        // console.log(ma);

        // const vegies = {
        //     name : "Carrot",
        //     color : "Orange",
        //     quantity : 4,
        // }

        // const {name, color, quantity} = vegies;
        // console.log(name);

//------------------------------------------------------
 
// special note 1 :for destructuring
        // let [e, f, g] = "abc";
        // console.log(e);
// special note 2:
        //   let user = {};
        //   [user.name, user.surname] = "John Smith".split(' ');
        //   console.log(user);
        //   console.log(user.name);
//----- swapping--------------
        // let guest = "Jane";
        // let admin = "Pete";

        // // Let's swap the values: make guest=Pete, admin=Jane
        // [guest, admin] = [admin, guest];

        // alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
//------------ rest ------------------
        // let [name, age, address] = ["Delna", "32", "Thodannur", "vatakara", "20223533524"];
        //  here 3 values are assigned rest are ignored
// --------- default values using prompt
                // let [name = prompt('name?'), surname = prompt('surname?')] = ["Delna"];
                // console.log(name);
//-------object destructuring---------

// let person = {
//         name: "Delna",
//         age: 32,
//         isEmployee: true,
// }

// {name : n, age : a, isEmployee} = person;
// console.log(n);
//-----------spread Operator // object can also do this way

            // const frontEnd = ["html", "css"];
            // const backEnd =["node", "php"];
            // const fullStack = [...frontEnd,...backEnd];

            // console.log(fullStack);

//------------- asynchronous flow

        // function function1(){
        //     return "function 1";

        // }
        // function function2(){
        //     return new Promise(function(resolve, reject){
        //        setTimeout(function () {
        //         resolve("this func 2")},4000);
        //        }
        //     )
        // }

        // function function3(){
        //     return "function 3";

        // }

        // console.log(function1());
        // function2().then((value) => console.log(value));
        // console.log(function3());

//------------- Asynchronous Promise
        // const promise = new Promise((resolve, reject) => {
        
        //   let success = false;
        //   if (success) {
        //     resolve("Operation successful");
        //   } else {
        //     reject("Operation failed");
        //   }
        // });

        // promise
        //   .then((result) => console.log(result))
        //   .catch((error) => console.log(error));
//---------------------------------------------------------------

//--------async and await---------------

// function function1(){
//             return "function 1";

//         }
//         function function2(){
//             return new Promise(function(resolve, reject){
//                setTimeout(function () {
//                 resolve("this func 2")},4000);
//                }
//             )
//         }

//         function function3(){
//             return "function 3";

//         }
        
//         async function printData()
//         {
//                console.log(function1()); 
//                console.log(await function2()); 
//                console.log(function3());
//         }

//         printData();

// --------- foreach-----
        // const numbers = [11, 21, 43, 46, 25];
        // numbers.forEach(process);
        // function process(value, index, arr)
        // {
        //         console.log(value);
        //         console.log(index);
        //         console.log(arr);
        // }
// ----------foreach

//  const numbers = [11, 21, 43, 46, 25];
//         numbers.forEach((value, index, arr)=>console.log(value));
       
//-------- map/filter

                // let numbers = [11, 21, 43, 46, 25];
                // newArr = numbers.map((value, index, arr)=> value ** 2);
                // console.log(newArr);

                // let numbers = [11, 21, 43, 46, 25];
                // let newArr = numbers.filter((value, index, arr)=> value >25);
                // console.log(newArr);

//----------------------------

// const cart = [
//   { item: "Book", price: 100 },
//   { item: "Pen", price: 20 },
//   { item: "Bag", price: 500 }
// ];
// let total = 0;
//   cart.forEach((value, index, arr)=> { total += price.value });
//  console.log(total);

//  const users = [
//   { name: "Ali", age: 25 },
//   { name: "Ammu", age: 20 }
//  ];
  
// let newArr = users.map((value, index, arr)=> value.name);
// console.log(newArr);


// const words = ["apple", "", "banana", "", "mango"]; //use filter method
// let newArr = words.filter((value, index, arr)=> value !== "");
//  console.log(newArr);

let options = {
  height: 15
};

let {width = 100, height, title} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200