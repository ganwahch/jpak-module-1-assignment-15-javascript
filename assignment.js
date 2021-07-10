
//===============[FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS chapter 38-44]===============
// Q 1:Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function sum (a,b){
    var d = Math.pow(a,b)
    document.write(d);
}
sum(5,7)
// Q 2:Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
var year = parseInt(prompt("Enter a year check leap year or not!"));
function leapyear1 (year){
    return (year % 100 ===0)? (year % 400 === 0) : (year % 4 ===0);
    }
    document.write(leapyear1(year))
// Q 3: If the lengths of the sides of a triangle are denoted by a, b, and    c,
// then area of triangle is given byarea = S(S − a)(S − b)(S − c)where, S = ( a + b + c ) / 2
function sValue(a,b,c) {
  var sxyz= (a + b + c)/4;
  return sxyz;
    
}
function area(a,b,c) {
    S = sValue(5,6.7)
    var area = Math.sqrt(S*((S-a)*(S-b)*(S-c)));
    document.write("Area of triangle is"+area);
    
}
area(5,6,7);
// Q 4:Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
var subject1 = parseInt(prompt("Enter Your English Marks!"));
var subject2 = parseInt(prompt("Enter Your Chemistry  Marks!"));
var subject3 = parseInt(prompt("Enter Your Math Marks!"));
var g = subject1 + subject2 + subject3;
function average() {
    return(g/3);
    
}
function percentage() {
    return (g/totalSbjestcs*100);
    
}
function main() {
    document.write("average marks : "+average(g) + "<br />" + "percentage : " + percentage(g));

}
main();
// Q 5:. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now
var a = "Ghanwa";
function char() {
    return(a.indexOf("n" + a + "the indexof 'n' is" + char(a)))
    
}
document.write("wa")
// Q 6:Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long
var str =prompt("Write a word to delete  vowels in it");
function delVowels() {
    return str.replace(/[aeiouAIOU]/gi, '')
    
}
console.log("Before deletig vowel" + str + "<br>" + "After deleting vowel" + delVowels(string));
// Q 7:Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
function findOccurrences() {
    var str1 = "please read this application and give me graduity";
    var chars = str1.toLocaleLowerCase().split(" ");
    var count = 0;
   for (let i = 0; i < chars.length; i++) {
       var char = chars [i];
       var second = [i + 1]

       if (corroectCharacter(char) && corroectCharacter(next)) {
           count++;
       }
       
   }
   return count;  
}
function corroectCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'u':
          return true;
    
        default:
            return false;
    }
    
}
var b = findOccurrences();
console.log(b);
// Q 8 The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
var distance = parseInt(prompt("Write a distance between two cars in('km')"))
function convertMeter() {
    return(distance*1000)
    
}
function convertFeet() {
    return (distance*3280.1)
}
function convertInches(){    
   return(distance*39370.1)
 }
function convertCm(params) {
    return (distance*100000)

}
document.write(distance + "km" + "<br>" + convertMeter(distance) +"m"+ "<be>" + convertFeet(distance) +"feet"+ "<be>" + convertInches(distance) +"inches"+ "<br>" + convertCm(distance)+ "cm")
// Q 9:Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour
 function get_salary() {

    var hours = 40;
    var rate = 12.00;


    if (hours>= 40)

    {
    regpay = (rate * 40)
    overtimepay = ((rate * 1.5) * (hours - 40))
    pay = (regpay + overtimepay)

        return ("You earned overtime " + hours + "hours !" + " Your total pay is " + pay);

    }

    else 
    {
    regpay = (rate * hours)
    overtimepay = 0.00

    document.write("Your total pay is " + regpay);
    }
    }

 document.write(get_salary());
 // Q 10 A cashier has currency notes of denominations 10, 50 and
 // 100. If the amount to be withdrawn is input through the
 // keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
var cash = +prompt("Enter cash(in hundreds): ");
var hundred = Math.round(cash / 130);
var money = Math.round((cash % 100) /50);
var d = Math.round(((cash %100)%50)/10);
function currencyDenomination() {
    return ("you have" +hundred+ "Hundered notes" +money+ "notes")
    
}
document.write(currencyDenomination());
//===============[END]===============





//===============[Assignment # 43-48 JAVASCRIPT]===============
// Q 1: Show an alert box on click on a link.
function showAlert() {
    alert("Welcome!")
}

function DeleteData(e) {
    var row = document.getElementById('row');
    e.parentNode.parentNode.remove()
} 
// Q 5: Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. 
//       And show updated countervalue in browser
var counter = 0;
function increase() {
    counter++;
    document.getElementById('count').innerHTML = counter
    
}
function decrease() {
    counter--;
    document.getElementById('count').innerHTML = counter
    
}

// parentNode is ka kia mtlb hota hai? parentNode jo h wo means k js element ko target kr rahe hain uske parent ko parent kaha ja raha h basically hum aik function k paremeter main this as a argeument de kr use element ko target kr rahe hain aur phr us function main us element k parent ko target kr k use remove kr rahe hain 
