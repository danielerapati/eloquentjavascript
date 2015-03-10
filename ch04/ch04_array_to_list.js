function arrayToList(arr)
{
    if (arr.length == 0) return null;
    return { "value": arr.shift(), "rest": arrayToList(arr) }
}

function listToArray(l)
{
    toReturn = []
    if (l === null) return toReturn
    if ("value" in l) toReturn.push(l["value"])
    if ("rest" in l) return toReturn.concat(listToArray(l["rest"]))
    return toReturn
}

function prepend(value, l)
{
    return {"value": value, "rest": l}
}

function nth(l, n)
{
    if (l === null) return undefined
    if (n==0 && "value" in l) return l["value"]
    if ("rest" in l) return nth(l["rest"],n-1)
    return undefined
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 4));
// → 20
