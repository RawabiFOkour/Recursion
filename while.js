// All the exercises should use while loop:

// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// dDont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before 

console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0

Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27

*/
function subtract(n) {
    var sub = n;
    while (n > 0) {
        sub = sub - (n - 1);
        n--;
    }
    return sub;
}
console.log(subtract(9));
console.log(subtract(5));
console.log(subtract(2));
/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(num) {
    var factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
}
console.log(factorial(2));
console.log(factorial(4));
/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the stop condition should be [somthing=== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(text, number) {
    var str = "";
    while (number > 0) {
        str = str + " " + text;
        number--;
    }
    return str;
}
console.log(repeatStr("Rawabi", 2));
console.log(repeatStr("okour", 3));
console.log(repeatStr("mohamad", 4));

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number

Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(min, max) {
    var sum = 0;
    while (min <= max) {
        sum = sum + min;
        min++;
    }
    return sum;
}
console.log(sum2(4, 5));
console.log(sum2(3, 6));
/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the stop condition should be [somthing=== 0]
** Important: You should dint have extra space at the end

Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(str1, str2) {
    var stringLength = str2.length;
    var repeat = "";
    while (stringLength > 0) {
        repeat = repeat + " " + str1;
        stringLength--;
    }
    return repeat;
}
console.log(repeatStr2("Rawabi", "oo"));
console.log(repeatStr2("OBEIDAT", "oo69696"));
console.log(repeatStr2("JOZAA", "777"));

/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **

Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48

*/
function multiOf(number1, number2, number3) {

    var multi = 1;
    var power = 1;
    while (number3 > 0) {
        power = power * number2;
        multi = number1 * power;
        number3--;

    }
    return multi;
}
console.log(multiOf(4, 10, 3));
console.log(multiOf(6, 3, 2));
console.log(multiOf(6, 2, 3));
/*
7
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number

Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function multi2(min, max) {
    var multiplication = 1;
    while (min <= max) {
        multiplication = multiplication * min;
        min++;
    }
    return multiplication;
}
console.log(multi2(4, 5));
console.log(multi2(3, 6));

/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should dint have extra space at the end or comma
** Important: the stop condition should [num1===num2-1]
** hint: maybe you will have 2 if statment

numberBetweenUs(2,8) => "3, 4, 5, 6, 7"

numberBetweenUs(1,3) => "2"

*/
function numberBetweenUs(num1, num2) {
    var result = '"';
    while (num1 < num2 - 1) {
        result = result + " " + (num1 + 1) + " ,";
        num1++;
    }
    return result.slice(0, -1) + '"';
}
console.log(numberBetweenUs(2, 8));
console.log(numberBetweenUs(1, 3));
/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to ahve "done"
between each number a comma and space
** you need to use recursion
** Important: You should dint have extra space at the end or comma

countDown(5)
=> "5, 4, 3, 2, 1, done"

countDown(2)
=> "2, 1, done"

countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(number) {
    var result = '"';
    while (number > 0) {
        result = result + " " + (number) + " ,";
        number--;
    }
    return result + " done" + '"';
}
console.log(countDown(5));
console.log(countDown(2));
console.log(countDown(7));
/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum

multiplication2(5,4) => 20

multiplication2(2,8) => 16

multiplication2(7,6) =>  42
*/
function multiplication2(number1, number2) {
    var sum = number1;
    while (number2 > 1) {
        sum += number1;
        number2--;
    }
    return sum;
}
console.log(multiplication2(5, 4));
console.log(multiplication2(2, 8));
console.log(multiplication2(7, 6));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1

mod2(2,8) => 2

mod2(7,4) => 3
*/
function mod2(number1, number2) {
    while (number1 > number2) {
        number1 = number1 - number2;

    }
    return number1;
}
console.log(mod2(5, 4));
console.log(mod2(2, 8));
console.log(mod2(7, 4));
/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"

repeatChar("schOol","o") => 2

repeatChar("school","a") => 0

repeatChar("School","s") => 1

try more case by yourself
*/
function repeatChar(string, s) {

    var counter = 0;
    var i = 0;

    while(i<=string.length-1){
        if (string[i].toUpperCase() === s[0].toUpperCase()) {
            counter++
        }
        i++;
    }
    return counter;
}

console.log(repeatChar("schOol", "o"));
console.log(repeatChar("school", "a"));
console.log(repeatChar("school", "s"));









// Advanced Part {for your benefits}

// Dont solve any question here if you didnt finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it


/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number

Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1

fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/

function fibon(number){
    var first = 1;
	var second = 1;
	var result =0;
	if (number===1 || number===0)
		return 1;
	while (number>1)
	{
		result = first + second;
		second = first; 
		first = result;
		number--;
	}
	return result;
}
console.log(fibon(7));
console.log(fibon(2));
console.log(fibon(1));
console.log(fibon(0));
/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end

mirror("school") => "loohcs"

mirror("car") => "rac"

mirror("maDrasa") => "asarDam"

*/
function mirror(string){
var result ="";
var len = string.length;
while(len>0){
 result = result + string[len-1];
 len--;
}
return result;
}
console.log(mirror("school"));
console.log(mirror("car"));
console.log(mirror("maDrasa"));


/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end


mirrorCaseAlso("sChOol") => "LOoHcS"

mirrorCaseAlso("THOR") => "roht"

mirrorCaseAlso("BaBa") => "AbAb"

*/
function mirrorCaseAlso(string){
    var result ="";
    var len = string.length;
    while(len>0){
        if (string[len-1] >='a') 
            result = result + string[len-1].toUpperCase();
        else
            result = result + string[len-1].toLowerCase();

     len--;
    }
    return result;
    }
   console.log(mirrorCaseAlso("sChOol"));
console.log(mirrorCaseAlso("THOR"));
console.log(mirrorCaseAlso("BaBa"));


/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"

repeatChar2("schOol","o") => 1

repeatChar2("school","a") => 0

repeatChar2("School","S") => 1

try more case by yourself
*/
function repeatChar2(string, s) {
    var count=0;
    while (string.length > 0) {
        if (string[string.length-1] === s[0] ) {
            count++;
        }
        string = string.slice(0,-1);
    }
    return count;
}
console.log(repeatChar2("schOol","o"));
console.log(repeatChar2("school","a"));
console.log(repeatChar2("School","S"));
/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her

Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2

Ex: welcomeSayHello(7); => 2
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/
function welcomeSayHello(nubmer) {
    var numberOfPeople = 1;
	var string ="";
	var previousPeople=1;
	var n=1;
	while (numberOfPeople<=nubmer)
	{
		if (numberOfPeople===1)
        string = string + "hi 1  " ;
		else
        string = string +"hi " + numberOfPeople + " Now Pleas Say Hello To "



		while ( previousPeople < numberOfPeople-1)
			{
				if (previousPeople === n)
				{
					string = string.slice(0,-2)+ " and ";
				 	n++;
				}
				string = string + (previousPeople+1) +", ";
				previousPeople++;
			}


        numberOfPeople++;
		previousPeople=0;
		string = string.slice(0,-2) +"\n";
	}

	return string;
}

console.log(welcomeSayHello(7));