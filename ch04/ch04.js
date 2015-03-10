function range(start,stop,step)
{
    if (step == undefined) step=1
    var toReturn = []
    function check_stop(n)
    {
        return (stop>start?n<=stop:n>=stop)
    }
    for(var i=start; check_stop(i); i+=step)
    {
        toReturn.push(i)
    }
    return toReturn
}

console.log(range(1,10,2))
console.log(range(10,1,-2))
console.log(range(5,2,-1))

function sum(arr) 
{
    tot = 0
    for(var i=0;i<arr.length;i++){ tot+=arr[i] }
    return tot
}
console.log(sum(range(1,10)))

function reverseArray(arr)
{
    var toReturn = []
    for(var i=arr.length-1;i>=0;i--)
    {
        toReturn.push(arr[i])
    }
    return toReturn
}
function reverseArrayInPlace(arr)
{
   r = reverseArray(arr)
    for(var i=arr.length-1;i>=0;i--)
    {
        arr[i]=r[i]
    }
}

var a = range(1,10)
console.log(reverseArray(a))
console.log(a)
reverseArrayInPlace(a)
console.log(a)

