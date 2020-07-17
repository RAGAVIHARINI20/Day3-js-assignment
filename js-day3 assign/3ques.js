console.log("hey there!");
let num=prompt("Hey buddy!...Enter your mark!");
switch(true)
{
    case (num>=90 && num<=100):
        console.log("Marks are "+ num+" and grade is A");
        break;
    case (num>=50 && num<90):
        console.log("Marks are "+ num+" and grade is B");
        break;
    case (num>=0 && num<50):
        console.log("Marks are "+ num+" and grade is C");
        break;
    default:
        console.log("Enter the valid marks");  

}