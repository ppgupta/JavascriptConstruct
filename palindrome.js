function checkPalindrome(num1,num2){
    let temp = 0;
    while(num1>0){
        temp=temp*10+num1%10;
        num1 = Math.floor(num1 /10);
    }
    return (temp == num2);
}
let num1 = 123456
let num2 = 654321

let check = checkPalindrome(num1,num2);
console.log("Is "+num1+" and "+num2+" palindrome? "+check)


// Check if a number is prime then   its palindrome is also prime

{
function findPalindrome(num){
    let temp = 0;
    while(num>0){
        temp=temp*10+num%10;
        num = Math.floor(num/10);
    }
    return temp;
}

function isPrime(num){
    for(let i = 2 ; i<=num/2;i++){
        if(num%i==0)
        return false;
    }
    return true;
}
let num = Math.floor(Math.random()*10000)%10000;
let check = isPrime(num);
if(check)
console.log(num+" is prime!");
else
console.log(num+" is not prime!");
let palindromeOfNum = findPalindrome(num);
console.log("palindrome of "+num+" is "+palindromeOfNum);
check = isPrime(palindromeOfNum);
if(check)
console.log(palindromeOfNum+" is prime!");
else
console.log(palindromeOfNum+" is not prime!");
}