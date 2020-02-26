/**
 * 
 * 153 = 13 + 53+3+3 = 1+125+27 = 153
 *  
 */

// find out armstrong number
var  n= 173;

var sum =0
var temp;
temp=n;
var r;


while(temp>0)
	{
	r=temp%10;
	
	sum = sum+r*r*r
	temp= Math.floor(temp/10);

	
	}

console.log(sum)

if(sum==n)
	{
	console.log("ArmStrong Number")
	}
else{
	console.log(" Not armStrong Number")
}