class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(point1,point2){
        const xD=Math.abs(point1.x - point2.x);
        const yD= Math.abs(point1.y- point2.y);

        const result= Math.sqrt(xD ** 2 + yD ** 2);

        return result;
    }
}
const p1=new Point(5,5)
const p2=new Point(9,8)

console.log(Point.distance(p1,p2));