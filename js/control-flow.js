// whatsUp()
//
// var name = 'Keith';
// console.log(name)
// console.log('What\'s Up?');
//
// function whatsUp(){
//     var name = 'Johnson'
//     function sayHello(){
//         console.log('Say Hello')
//     }
//     console.log('What is up?');
// }
var mph1 = 10;
var hours1 = 5;
var distance1 = mph1 * hours1;
// console.log(distance);

var mph2 = 80;
var hours2 = 2;
var distance2 = mph2 * hours2;
// console.log(distance);

var mph3 = 55;
var hours3 = .75;
var distance3 = mph3 * hours3;
console.log(distance1, distance2, distance3);

function distance(mph, hours = 10){
    if (hours === undefined){
        hours = 10;
    }
    // return 10
    // return 'Jim Eats World'
    // return true
    if (mph > 65){
        // console.log('Warning, too fast!')
        return 'Warning: Too Fast! No way you will get distance from us.'
    }
    return mph * hours;
    // console.log('Not going to see me')
}
// console.log(distance(66))
//
// var distanceTraveled = distance(55,2)
// distanceTraveled = distanceTraveled + distance(80,16)
// distanceTraveled = distanceTraveled + distance(25,.25)
// console.log(distanceTraveled)

// if ( 1 === 1){ //The '===' inside the condition are conditional operators
//     console.log('It is true.');
// }

// var movie = 'Groundhog Day'
// var movie ='Forest Gump'
var movie ='The Rock'
// // var year = 1995
//
// if (movie === 'Forest Gump'){
//     console.log('Life is like a box of chocolates.');
// }
// else if (movie === 'Groundhog Day'){
//     console.log('Repeat.')
// }
// else if (movie === 'StarWars'){
//     console.log('Let the force be with you.')
// }
// else{
//     console.log(movie + ' is awesome!')
// }

// switch (movie){
//     case 'Forest Gump':
//         console.log('Buba-gump Shrimp')
//         break;
//     case 'Groundhog Day':
//         console.log('Just put your little hand in mine.')
//         break;
//     case 'Star Wayrs':
//         console.log('Use the force!')
//         break;
//     default:
//         console.log(movie + 'is worth seeing!')
// }
// console.log(8 % 3)

// if (6 % 3) {
//     console.log('Yes it is divisible by three.')
// }

// var list = ['Jack', 'Jill', 'Spot', 'Jane', 'Jeff', 'Janice']
//
// for (var i = 0; i < list.length ; i++){
//     console.log( list[i] + ' - Looping...')
// }
// for (var i = 0; i < 100; i++){
//     console.log(`<div id="Row${i}" class="row"><div class="col-sm-12"></div></div>`)
// }

// for (var i = 0; i < 300; i++){
//     if (i <= 100){
//         document.querySelector('.container').innerHTML += `<button class="btn btn-info btn-lg">Button${i}</button>`
//     }
//     else if (i > 100 && i <= 200){
//         document.querySelector('.container').innerHTML += `<button class="btn btn-danger btn-lg">Button${i}</button>`
//     }
//     else {
//         document.querySelector('.container').innerHTML += `<button class="btn btn-primary btn-lg">Button${i}</button>`
//     }
// }
// var total = 0
//
// for (var i = 0; i < 300; i++){ // using in homework
//     total = total + i
// }
//
// console.log(total)

// function sayHello(greeting){ //Example base for homework
//     return greeting
// }
// console.assert(sayHello('Hello') === 'Hello')
