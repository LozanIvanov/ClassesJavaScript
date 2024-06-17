class List{
    constructor(){
        this.elements=[];
    }

    add(element){
        this.elements.push(element);
        this.elements.sort((a,b)=>a-b);
    }
    remove(index){
        if(index >= 0 && index< this.elements.length){
            this.elements.splice(index,1)
        }else{
            throw new Error('Index out of range');
        }
    }
    get(index){
        if(index >= 0 && index< this.elements.length){
          return  this.elements[index]
        }else{
            throw new Error('Index out of range');
        }
    }
    size(){
        return this.elements.length;
    }
}
let list=new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1))
list.remove(1);
console.log(list.get(1))