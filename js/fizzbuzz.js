//Write a function for fizzBuzz
function fizzBuzz(N){
    //count variable N starting from 1
    for(var N = 1; N <= 15; N++){
        //For every number that isn't a multiple of 3 or 5, return a period '.'
        if ((N % 3 !== 0) && (N % 5 !== 0)){
            var string = console.log('.')
        }
        //For every number that is a multiple of 3 (but not 5), return 'fizz'
        else if ((N % 3 === 0) && (N % 5 !== 0)){
            var string = console.log('fizz')
        }
        //For every number that is a multiple of 5 (but not 3), return 'buzz'
        else if ((N % 5 === 0) && (N % 3 !== 0)){
            var string = console.log('buzz')
        }
        //For every number that is a multiple of 3 and 5, return 'fizzbuzz'
        else if ((N % 3 === 0) && (N % 5 === 0)){
            var string = console.log('fizzbuzz')
        }
        else {
            var string = console.log('nothing')
        }
        //Add string to repeat all values here
    }
}
//Call function to count from N to final value
fizzBuzz()
