class Circle{
    constructor(radious){
        this.radious=radious;
    }
    get diameter(){
        return this.radious * 2;
    }
    set diameter(value){
       this.radious=value/2;
    }
    get area(){
        const result=Math.PI * this.radious ** 2;
        return result
    }
}
let c=new Circle(2);
console.log(`Radius: ${c.radious}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter= 1.6;
console.log(`Radius: ${c.radious}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
