function StretchCell(inner, givenWidth, givenHeight)
{
  this.inner = inner;
  this.givenWidth = givenWidth;
  this.givenHeight = givenHeight;
};

StretchCell.prototype.minWidth = function()
{
  return Math.max(this.inner.minWidth(), this.givenWidth);
};
StretchCell.prototype.minHeight = function() 
{
  return Math.max(this.inner.minHeight(), this.givenHeight);
};

StretchCell.prototype.draw = function(width, height)
{
  return this.inner.draw(this.minWidth(), this.minHeight())
};



function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};



var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
//
