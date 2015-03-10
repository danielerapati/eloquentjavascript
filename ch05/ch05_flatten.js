function flatten(arr)
{
    if (typeof arr !== "object") return [arr]
    return arr.reduce(function (a,b) { return a.concat(flatten(b)) }, start=[])
}

var arrays = [[1, 2, 3], [4, 5], [6], 7, [], [8, 9]];
console.log(flatten(arrays))
