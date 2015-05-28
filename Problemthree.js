
function isEven(number) {
    
    
    if (number < 2) {
        
        console.log("The number entered must be greater than one"); 
        
    }
    
    else { 
        
        
        for ( var denominator = 2; number >= denominator; denominator ++) {
        
            while (number % denominator === 0) {
                
                number /= denominator;
                
            }
            
        }

    console.log (denominator-1);
    
    }
    
 }
 
isEven(600851475143);