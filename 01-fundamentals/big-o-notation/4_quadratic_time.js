// Quadratic Time or O(n^2)

// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];


function logAllPairsOfArray(array) {
    for (let i=0; i < array.length; i++){
        for (let j=0; j < array.length; j++){
            console.log(array[i], array[j])
        }
    }
}

// the double for loop there is the danger
