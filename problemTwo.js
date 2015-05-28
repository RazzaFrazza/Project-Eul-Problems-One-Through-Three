var a = 1;
var b = 2;
var sum = 0;

while ( a < 4000000) {
    
    if(a % 2 === 0) {
        
        sum += a;
        
    }
    
    c = a + b;
    a = b;
    b = c;

    
    
}

console.log(sum); 

            