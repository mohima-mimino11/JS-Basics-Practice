// var personOne = "Jamal";

// var personTwo = "Kamal";

// var areTheyBrother = true;


/*
if("Jamal" == personOne){
    if("Kamal" == personTwo){
        if(areTheyBrother){
            console.log("Jamal & Kamal are brothers");
        }else{
            console.log("They are not brothers");
        }
    }
}
*/

// if("Jamal" == personOne && "Kamal" == personTwo && areTheyBrother){
//     console.log("They are brothers");

// }else{
//     console.log("They are not brothers");
// }

var n = 21;

if(n < 10){
    if(2 == n || 3 == n || 5 == n || 7 == n){
        console.log("This number", n, "is smaller than 10 and it's a prime number");

    }else{
        console.log("This number", n, "is smaller than 10 and it's not a prime number");

    }
}else{
    console.log("This number", n, "is greater than 10");

}