function every(arr, cond)
{
    for(var i=0;i<arr.length;i++)
    {
        if(!cond(arr[i])) return false
    }
    return true
}

function some(arr,cond)
{
    return ! every(arr, function(x){return !cond(x)})
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
