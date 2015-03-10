// Interface:
//       you iterate on a Sequence by calling 
//       sequence.apply(f):  same as a forEach: apply f on every element
//       take(f, number): same as take until you have returned number
//                     of elements or the sequence is finished

function logFive(sequence)
{
   sequence.take(function(x){console.log(x)}, 5)
}

function ArraySeq(array)
{
    this.sequence = array;

    ArraySeq.prototype.take = function(f, number)
    {
        if (number===undefined) number = this.sequence.length
        return this.sequence.slice(0,number).map(f)
    }
}

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

function RangeSeq(start, stop)
{
    this.sequence = range(start, stop)

    RangeSeq.prototype.take = function(f, number)
    {
        if (number===undefined) number = this.sequence.length
        return this.sequence.slice(0,number).map(f)
    }

}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
