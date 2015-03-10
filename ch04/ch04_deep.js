function deepEqual(a,b)
{
    if (a===null) return b===null
    if (typeof a === "object" && typeof b === "object")
    {
        equal = true
        for(p in a)
        {
            equal = equal && (p in b) && deepEqual(a[p],b[p])
        }
        for(p in b)
        {
            equal = equal && (p in a)
        }
        return equal 
    }
    return a===b
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
