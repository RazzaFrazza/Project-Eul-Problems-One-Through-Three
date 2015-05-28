/* Declaring Global Variables */
var n; 
var sumOfThree = 0;
var sumOfFive = 0;

/* Declaring Arrays */
multiplesOfThree = [];
multiplesOfFive = [];

/* Finding how many numbers < 1000 divide evenly by three and five then adding them to my arrays */

console.log("Let's calculate how many numbers divide evenly by three and five in the number one thousand.");
console.log("Calculating...");

for(n = 0; n < 1000; n ++) {
    if(n % 3 === 0) { 
    multiplesOfThree.push(n);
    }
}

for(n = 0; n < 1000; n ++) {
    if(n % 5 === 0) { 
        multiplesOfFive.push(n);
    }
}

/* Letting the User know how many multiples of three exist */

console.log()
console.log("There are " + multiplesOfThree.length + " multiples of three in the number one thousand.");

/* Letting the User know how many multiples of five exist */

console.log()
console.log("There are " + multiplesOfFive.length + " multiples of five in the number one thousand.");
console.log()

/*Letting the User know the sum of the number of multiples */

console.log("Let's get the sum of the number of multiples.");
console.log("Calculating...");
console.log(multiplesOfThree.length + multiplesOfFive.length);
console.log()

/* Letting the User know the sum of all the three multiples */

console.log("Let's get the sum of all the three multiples.")
console.log("Calculating... ");
for (i=0; i < multiplesOfThree.length; i++) {

    sumOfThree += multiplesOfThree[i];

}
console.log(sumOfThree);
console.log()

/* Removing Multiples of Three From the Five Multiple Array */

console.log("Removing all multiples of three that are stored as multiples of five..");
console.log()


for(var i = multiplesOfFive.length -1; i >= 0 ; i--) {
    
    if(multiplesOfFive[i] % 3 === 0) {
        
        multiplesOfFive.splice(i, 1);
    
    }
};
        

console.log("The correct number of five multiples is now " + multiplesOfFive.length + ".");
console.log()

/* Letting the User know the sum of all the five multiples */

console.log("Let's get the sum of five multiples.")
console.log("Calculating... ");
for (i=0; i < multiplesOfFive.length; i++) {

    sumOfFive += multiplesOfFive[i];

}
console.log(sumOfFive);
console.log()

/* Letting the User know the added sum of all the three, five multiples */

console.log("Let's add these two sums together.")
console.log("Calculating... ");
var sumOfBoth = sumOfFive + sumOfThree;
console.log(sumOfBoth);


