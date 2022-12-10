// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '

console.log(str1 + ' ' + str2.trim() + ' ' + str3.trim());



// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var enteredAlphabet = 'd'
if (enteredAlphabet >= 'a' && enteredAlphabet <= 'z' || enteredAlphabet >= 'A' && enteredAlphabet <= 'Z') {
    switch (enteredAlphabet) {
        case 'a':
            console.log('This is a vowel');
            break;
        case 'A':
            console.log('This is a vowel');
            break;
        case 'e':
            console.log('This is a vowel');
            break;
        case 'E':
            console.log('This is a vowel');
            break;
        case 'i':
            console.log('This is a vowel');
            break;
        case 'I':
            console.log('This is a vowel');
            break;
        case 'o':
            console.log('This is a vowel');
            break;
        case 'O':
            console.log('This is a vowel');
            break;
        case 'u':
            console.log('This is a vowel');
            break;
        case 'U':
            console.log('This is a vowel');
            break;
        default:
            console.log('This is consonant');
            break;

    }
}
else {
    console.log('This is not an alphabet');
}


// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations 
//(add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. 
//It should perform operation according to the operator entered and must take input in given format.

var num1 = parseInt(prompt('Enter first number'))
// // console.log(num1);
var num2 = parseInt(prompt('Enter second number'))
// // console.log(num2);
var opr = prompt('Enter operator');
// // console.log(opr);
switch (opr) {
    case '+':
        var res = num1 + num2
        console.log('Addition is' + ' ' + res);
        break;

    case '-':
        var res = num1 - num2
        console.log('Substraction is' + ' ' + res);
        break;

    case '*':
        var res = num1 * num2
        console.log('Multiplication is' + ' ' + res);
        break;

    case '/':
        var res = num1 / num2
        console.log('Division is' + ' ' + res);
        break;
}


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.


var side1 = parseInt(prompt('Enter side 1'))
var side2 = parseInt(prompt('Enter side 2'))
var side3 = parseInt(prompt('Enter side 3'))

if(side1 == side2 && side1 == side3){
    console.log('this is an equilateral triangle');
}
else if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('This is an isoscale triangle');
}
else{
    console.log('This is a scalen triangle');
}



// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354


var unit = parseInt(prompt('Enter units'));

if(unit<=50){
    var l = unit * 0.5;
    console.log('Your bill is Rs'+' '+l)
}
else if(unit>50 && unit<=150){
    var l=unit-50;
    var m =25+(l*0.75);
    console.log('Your bill is Rs'+' '+m);
}
else if(unit>150 && unit<=250){
    var l=unit-150;
    var m =100+(l*1.20);
    console.log('Your bill is Rs'+' '+m);
}
else{
    var l=unit-250;
    var m =220+(l*1.5);
    var n = m+(m*0.2);
    console.log('Your bill is Rs'+' '+n);
}
    
