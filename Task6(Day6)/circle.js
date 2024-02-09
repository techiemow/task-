class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
     circle(){
        return this.radius
     }
     getradius(){
        return this.radius
     }
     setradius(radius){
        this.radius = radius;
     }
     getcolor(){
        return this.radius
     }
     setColor(color){
        this.color = color
     }
     tostring(){
        return `Cricle [Radius = ${this.radius} & Color = ${this.color}]`
    }
    getArea(){
        return `the area of the circle : ${(Math.PI)*this.radius*this.radius}`
    }
    getCircumference(){
        return `the Circumference of the circle : ${2*(Math.PI)*this.radius}`  
    }


}
let OneRound = new circle(5,'red');
console.log(OneRound.circle());