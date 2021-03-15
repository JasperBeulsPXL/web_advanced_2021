let number;
do{
    number = prompt('please enter a number between 1 and 5');
    number = parseInt(number);
}while(number < 1 || number > 5);
console.log(number);