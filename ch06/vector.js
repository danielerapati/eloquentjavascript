function Vector(x, y) 
{
    this.x = x
    this.y = y

    Vector.prototype.plus = function(v2)
    {
        return new Vector(this.x + v2.x, this.y + v2.y)
    }
    Vector.prototype.minus = function(v2)
    {
        return new Vector(this.x - v2.x, this.y - v2.y)
    }

    Vector.prototype.length = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))

    Vector.prototype.toString = function()
    {
        return "Vector{x: "+this.x+", y: "+this.y+"}"
    }
}


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
