/**
 * var ="1333sdd2323" = 13332323 sdd
 */


var str = "1333sdd23233yueywiuo5959449dfff";
//var result = str.substr(4,3);


//var result = str.slice(4,7);

var result = str.match(/[a-z]+|[^a-z]+/gi);

console.log(result);

