let s = "   fly me   to   the moon  ";
let x = s.split(" ").filter(function (i) {
  return i != "";
});
/*(
  x.filter(function (i) {
    return i != "";
  })
);
*/
console.log(x[x.length - 1].length);
