// Your code here

class Polygon {
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length 
    }

    get perimeter(){
        return this.sides.reduce((e,a) => a+e )
    }


}

class Triangle extends Polygon {
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]

        return a+b > c && b+c > a && a+c >b
    
    }

}

class Square extends Polygon {
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        const d = this.sides[3]

        return a === b && c === a  && d === a
    
    }

    get area(){
        if (this.isValid)
        return this.sides[0] ** 2 
    }



}