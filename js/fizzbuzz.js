//Write a function for fizzBuzz


function FizzBuzz(N){
    //count variable N starting from 1
    var string = '';
    for(var i = 1; i <= N; i++){
        //For every number that is a multiple of 3 and 5, return 'fizzbuzz'
        if ((i % 3 === 0) && (i % 5 === 0)){
            string += 'fizzbuzz'
        }
        else if ((i % 3 === 0) && (i % 5 !== 0)){
            string += 'fizz'
        }
        else if ((i % 5 === 0) && (i % 3 !== 0)){
            string += 'buzz'
        }
        else {
            string += '.'
        }
    }
    // console.log(string)
    return(string)
}
// FizzBuzz(1)
// FizzBuzz(2)
// FizzBuzz(3)
// FizzBuzz(5)
// FizzBuzz(10)

console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
