const sumArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };
    
    const numbers = [1, 2, 3, 4, 5];
    const sum = sumArray(numbers);
    console.log(sum);