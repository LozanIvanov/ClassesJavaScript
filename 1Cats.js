class Cat{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
        meow(){
            console.log(`${this.name}, ${this.age} years, say meow`);
        }

    
}
function solve(input){

    const cats=[]
    for (const line of input) {
        
    
    const[name,age]=line.split(' ');
    const ageNumber=Number(age);
     cats.push(new Cat(name,ageNumber));

    }

    for (const c of cats) {
    c.meow()
    }
        
        
    
}
solve(['Meone 3', 'Tom 4'])