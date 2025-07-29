// class Product{
    
//     constructor(name, price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount;

        
//     }

//      getDiscountPrice(){
       
//         let value=0;
//        return value = this.price - this.price * this.discount/100;
//     }
// }

// let Obj = new Product("Notes", 100, 10);
// let discountPrice = Obj.getDiscountPrice();
// console.log(discountPrice);


// class Employee{
//     constructor(name, salary){
//        this.name = name; 
//        this.salary = salary;  
//     }
// }

// class Manager extends Employee{
//     constructor(department, name, salary){
//         super(name,salary);

//         this.department = department;
        
//     }

//     getDetails(){
//         console.log(`Name : ${this.name}, Salary : ${this.salary}, Department: ${this.department}`);
//     }
// }

// let obj = new Manager("Sale", "Ramesh", 1000);
// obj.getDetails();


//private // set or get in private and protected  # or private, _ for protected

// class BankAccount{

//     #balance = 0;
//     constructor(balance){
//         this.#balance = balance;
//     }

//     deposit(depositAmount)
//     {
//         this.#balance += depositAmount;
//     }

//     withdrow(withdrowAmount){
//         if( this.#balance >= withdrowAmount){
//             this.#balance -= withdrowAmount;
//          }
        
//         }
//     getBalance(){
//         console.log(`Balance : ${this.#balance}`);
//     }
       
// }
// let obj = new BankAccount(5000);
// obj.deposit(6000);
// obj.withdrow(1000);
// obj.getBalance();

// private using get and set

// class BankAccount{

//     #balance = 0;
//     constructor(balance){
//         this.#balance = balance;
//     }

//     set deposit(depositAmount)
//     {
//         this.#balance += depositAmount;
//     }

//     withdrow(withdrowAmount){
//         if( this.#balance >= withdrowAmount){
//             this.#balance -= withdrowAmount;
//          }
        
//         }
//     get Balance(){
//         console.log(`Balance : ${this.#balance}`);
//     }
       
// }
// let obj = new BankAccount(5000);
// obj.deposit=6000;
// obj.withdrow(1000);
// obj.Balance;

//----------- polymorphism-----

class Shape{

    area(){}
}

class Rectangle extends Shape{

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;

    }

    area(){
        let area =  this.width * this.height;
        console.log(`Area of rectangle : ${area}`);
    }
}

class Circle extends Shape{

    constructor(radius){
        super();
        this.radius = radius;
        
    }

    area(){
        let area = 2 * Math.PI * this.radius;
        console.log(`Area of circle : ${area}`);
    }
}

let c1 = new Circle(4);
let R1 = new Rectangle(4, 8);
c1.area();
R1.area();

