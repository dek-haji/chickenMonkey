
for (let currentNumber = 0; currentNumber <= 100; currentNumber++) {
     // Divide the current number by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        console.log('Chicken')
    } else if( currentNumber % 7 === 0) {
        console.log('Monkey')
    }else (
        console.log(currentNumber)
    )
}