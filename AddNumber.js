/**
 * 
 * 
 */

//var n =93 //12


// find sum of digit of given number

var n =93;
var lastDigitNumber;
var sum = 0;


while(n!==0)
	{
	lastDigitNumber = n%10;
	sum = sum + lastDigitNumber;
	n = Math.floor(n/10);
	//result =n+sum;
	//console.log(result);
	
	}
//var sum =firstNumber + secondNumber;
console.log(sum);