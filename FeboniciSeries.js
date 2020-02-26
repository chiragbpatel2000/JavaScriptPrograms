/**
 *   
 */

// 011235813   = 0+1=1  // a=b  a=1
//b=c= 1 b=1  1+1 =2 a=b = a=1 b=2 //1+2=3

var n =10;

var a =0;
var b =1
console.log(a+""+b);

for(var i=2;i<=n;i++)
	{
	var c= a+b;
	a=b //b valaue goes to a
	b=c //c value assign to b
	
	console.log(c)
	}
