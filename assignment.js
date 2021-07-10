
//===============[FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS chapter 38-44]===============
// Q 1:Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function sum (a,b){
    var d = Math.pow(a,b)
    document.write(d);
}
sum(5,7)
// Q 1:Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
var year = parseInt(prompt("Enter a year check leap year or not!"));
function leapyear (year){
    return (year % 100 ===0)? (year % 400 === 0) :(year)
}




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
