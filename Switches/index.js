
//switch = statement that examines a value
//         for a match against many clauses.
//         It is more efficient than many "else if" statements

let grade;

grade = window.prompt("Enter the score from your last test.");

switch(true){
    case grade >= 90:
        console.log("You did great, you got an A!");
        break;
    case grade >= 80:
        console.log("You did good, you got an B!");
        break;
    case grade >= 70:
        console.log("You did okay, you got an C.");
        break;
    case grade >= 60:
        console.log("You did poorly, you got an D.");
        break;
    case grade <= 59:
        console.log("You FAILED, you got an F!");
        break;
    default:
        console.log(grade, "is not a valid score.");
}