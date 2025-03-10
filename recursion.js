/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
    if(n === 0){
      return 0;
    }
    return n + sum(n-1);
    // your code here 
  }
  console.log(sum(2));
  console.log(sum(5));
  
  
  /*
  2
  Create a function called factorial 
  that takes a single parameter n, 
  and return the product of all integers up to n starting from 1
  
  Ex: factorial(2); => 2 * 1 => 2 
  Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 
  
  */
  function factorial(n) {
    if(n === 1){
      return 1;
    }
    return n * factorial(n-1);
    // your code here 
  }
  console.log(factorial(2));
  console.log(factorial(4));
  
  /*
  3
  Create a function called repeatStr
  that takes 2 parameters string and number,
  and return the string number time with space
  Important: the stop condition should be [somthing=== 0]
  Ex: repeatStr("to",2); => "to to"
  Ex: repeatStr("to",4); => "to to to to"
  */
  
  function repeatStr(string1,number) {
    if(number === 0){
      return "";
    }
    return (string1 + " " + repeatStr(string1,number-1));
    // your code here 
  }
  console.log(repeatStr("to",2));
  console.log(repeatStr("to",4));
  /*
  4
  Create a function called fibon
  that takes 1 parameter a number,
  and return the fibonacci for this number
  
  Ex: fibon(7); => 21
  Ex: fibon(2); => 2
  Ex: fibon(1); => 1
  Ex: fibon(0); => 1
  
  fib(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
  n:      0 1 2 3 4 5  6  7
  */
  function fibon(number){
    if (number <= 1){
      return 1;
    } 
    return fibon(number - 1) + fibon(number - 2);
  
  }
  console.log(fibon(7));
  console.log(fibon(2));
  console.log(fibon(1));
  console.log(fibon(0));
  
  
  
  /*
  5
  Create a function called sum2
  that take two parameter
  and will return the sumation from the first number to the second number
  Ex: sum2(4, 5); => 4 + 5 => 9
  Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
  */
  function sum2(num1, num2){
  if(num1===num2){
    
  return num2;
  
  }
  
   return num1 + sum2(num1+1, num2);
  }
  console.log(sum2(4,5));
  console.log(sum2(3,6));
  /*
  6
  Create a function called repeatStr2
  that takes 2 string parameters,
  and return the first string number time
  (of the lenght of the secend string) with space betweeen it
  Important: the stop condition should be [somthing=== 0]
  Ex: repeatStr2("ro","cc"); => "ro ro"
  Ex: repeatStr2("ro","fff"); => "ro ro ro"
  */
  
  
  
   function repeatStr2(strnig1,string2){
     if(string2.length === 0){
       return "";
     }
    return strnig1 + " " +  repeatStr2(strnig1,string2.slice(0,-1)) ;
   }
   console.log(repeatStr2("ro","cc"));
   console.log(repeatStr2("ro","fff"));
  
  
  
  
  
  
  
  
  /*
  7
  Create a function called multiOf
  that takes 3 parameters,
  and return the first number mutiple by
  the second one ^ the third one
  Ex: multiOf(4,10,3); => 4000
  Ex: multiOf(6,2,4); => 96
  */
  
    function  multiOf(number1,number2,number3){
      if(number3===0){
        return number1;
      }
       return number2 * multiOf(number1,number2,number3-1);
    }
    console.log(multiOf(4,10,3));
    console.log(multiOf(6,2,4));
    console.log(multiOf(3,30,2));
    
  
  /*
  8
  Create a function called muti2
  that take two parameter
  and will return the multiplication from the first number to the second number
  Ex: muti2(4, 5); => 4 * 5 => 20
  Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
  */
  function muti2(number1,number2){
    if(number1 === number2){
      return number2;
    }
  return number1 * muti2(number1 +1,number2);
  }
  console.log(muti2(4,5));
  console.log(muti2(3,6));
  
  
  /*
  9
  Create a function called numberBetweenUs
  that take 2 parameters
  and return the numbers between them
  numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
  numberBetweenUs(1,3) => "2"
  */
   function numberBetweenUs(number1, number2){
  if(number1===number2-1){
    return number2-1 ;
  
  }
  if(number1===number2-2)
    return  numberBetweenUs(number1 +1, number2);
  else
    return  number1+1 + ", " + numberBetweenUs(number1 +1, number2 );
  
  
   }
   console.log('"',numberBetweenUs(2,8),'"');
   console.log('"',numberBetweenUs(1,3),'"');
  /*
  10
  Write a function called countDown
  that takes one parameter
  and return a string represent the count down from the number
  that insert to 0
  instead of 0 need to ahve "done"
  between each number a comma and space
  ** you need to use recursion
  countDown(5)
  => "5, 4, 3, 2, 1, done"
  countDown(2)
  => "2, 1, done"
  countDown(7)
  => "7, 6, 5, 4, 3, 2, 1, done"
  */
  
  function countDown(number){
      
    if(number === 0){
        return    "done"+ '"';
    }
        return  number + ',' + countDown(number-1);
    }
    console.log('"'+countDown(5));
    console.log('"'+countDown(2));
    console.log('"'+countDown(7));
    
  /*
  
  
  
  
  */
  
  /*
  11
  Write a function called multiplication2
  that takes two parameters
  and return the multiplication of them
  you need to use only sum
  multiplication2(5,4) => 20
  multiplication2(2,8) => 16
  multiplication2(7,6) =>  42
  */
  function multiplication2 (n1,n2)
  {
    if (n2===0)
      return 0;
  
    return n1 + multiplication2 (n1, n2-1);
  }
  console.log(multiplication2(5,4));
  console.log(multiplication2(2,8));
  console.log(multiplication2(7,6));
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
  
  function mod2 (n1, n2)
  {
    if (n1 < n2)
      return n1;
  
    return mod2(n1-n2, n2);
  }
  
  console.log(mod2(5,4));
  console.log(mod2(2,8));
  console.log(mod2(7,4));
  /*
  12
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
  function mirror(str1)
  {
    
    if(str1.length===0)
      return "";
  
    return str1[str1.length-1] + mirror(str1.slice(0,-1));
  }
  console.log(mirror("school"));
  console.log(mirror("car"));
  console.log(mirror("maDrasa"));
  
  /*
  13
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
  
  function mirrorCaseAlso (str1)
  { 
      if(str1.length===0)
        return "";
  
        if(str1[str1.length-1] >= 'a') 
         return str1[str1.length-1].toUpperCase() + mirrorCaseAlso(str1.slice(0,-1));
         else
         return str1[str1.length-1].toLowerCase() + mirrorCaseAlso(str1.slice(0,-1));
  }
  console.log(mirrorCaseAlso("sChOol"));
  console.log(mirrorCaseAlso("THOR"));
  console.log(repeatChar("schOol","s"));
  /*
  14
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
  function repeatChar(str1,s)
  {
    
    if(str1.length===0)
      return 0;
  
      if(str1[str1.length-1].toUpperCase() === s[0].toUpperCase() )
        return 1 + repeatChar(str1.slice(0,-1),s);
  
      return repeatChar(str1.slice(0,-1),s);
  }
  
  console.log(repeatChar("schOol","o"));
  console.log(repeatChar("schOol","a"));
  console.log(repeatChar("schOol","s"));
  /*
  15
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
  
  function repeatChar2(str1,s)
  {
    
    if(str1.length===0)
      return 0;
  
      if(str1[str1.length-1] === s[0])
        return 1 + repeatChar2(str1.slice(0,-1),s);
  
      return repeatChar2(str1.slice(0,-1),s);
  }
  
  console.log(repeatChar2("schOol","o"));
  console.log(repeatChar2("school","a"));
  console.log(repeatChar2("School","S"));
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  