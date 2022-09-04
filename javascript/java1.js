// QUESTION 1 :Ans

var str1 = 'Today is';
 var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
 Result = str1 + str2 + str3;
 console.log(Result);



 // QUESTION 2 :ANS

 var r=prompt("enter the Alaphbet")

 switch(r)
     {
         case "a":
         case "e":
         case "i":   
         case "o":
         case "u":
         case "A":
         case "E":
         case "I":   
         case "O":
         case "U":
             console.log("constant")
             break;
         default:
             console.log("non Alaphbet")
     } 
     

// QUESTION 3 :ANS


const num1 = parseFloat(prompt("first number :"));
const num2 = parseFloat(prompt("second number :"));
const operator=prompt("enter operator: +, -, *, / ");
switch(operator){
case "+":
var result = num1 + num2;
 console.log(" Enter number:" +result)
break;

case "-":
var result = num1 - num2;
console.log(" Enter number:" +result)

break;

case "*":
var result = num1 * num2;
console.log(" Enter number:" +result)

break;

case "/":
var result = num1 / num2;
console.log("Enter number:" +result)

break;
default:
    console.log("Enter valid operator")

}

 // QUESTION 5 :ANS
 units = 300
 bill = 0
 if(units<=50){
   bill  = units*0.50
 }
 else if(units <=150){
   bill = 50*0.50 + (units-50)*0.75
 }
 else if(units <=250){
   bill = 50*0.50 + 100*0.75 + (units-150)*1.20
 }
 else if(units>250){
   bill = 50*0.50 + 100*0.75 + 100*1.20 + (units-250) *1.50
 }
 
 if(bill>150){
   bill =bill + bill*0.2
 }
 
 console.log(bill)