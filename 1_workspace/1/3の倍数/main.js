const genkiFunction = function(number){

    for (let n=1; n<=number; n++) {
        if (n % 3 === 0) {
        console.log(`${n}!!!!!!`)
        } else {
        console.log(n)
        }
    }
}
genkiFunction(100)

const fizzBuzz = function(number){
    for (let n=1; n<=number; n++) {
        if (n % 3 === 0) {
            if (n % 15 === 0){
                console.log(`FizzBuzz`)
            } else {
                console.log(`Fizz`)
            }
        } else if (n % 5 === 0){
            console.log(`Buzz`)
        } else {
            console.log(n)
        }
    }
}
fizzBuzz(30)

const genkiFunction2 = function(number){
    for (let n=1; n<=number; n++) {
        if (n = 3) {
            if (n % 3 === 0){
                console.log(`${n}!!!!!!`)
            }
            else {
                console.log(`${n}!!!!!!`)
            }
        } else {
            console.log(n)
        }
    }
}
genkiFunction2(40)
