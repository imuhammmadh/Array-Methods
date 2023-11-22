// Q1. Write a function to calculate the sum of all elements in an array using reduce().
function sum(arr) {
    return arr.reduce((p, c) => {
        return p += c
    })
} console.log(sum([1, 2, 3, 4, 5,]));
// Q2. Write a function to find the maximum value in an array using reduce().
function maximum(arr) {
    return arr.reduce((p, c) => {
        if (p < c) {
            p = c
        }
        return p
    })
} console.log(maximum([1, 5, 2, 4, 3]));
// Q3. Write a function to count the number of occurrences of a given element in an array using reduce().
function countoccurrences(arr, target) {
    return arr.reduce((p, c,) => {
        if (c == target) {
            p++
        }
        return p
    }, 0)
} console.log(countoccurrences([1, 2, 3, 4, 5, 1, 2, 5, 2], 2));
// Q4. Write a function to concatenate all elements of an array into a single string using reduce().
function concatenateElm(arr) {
    return arr.reduce((p, c) => {
        return p += c
    }, "")
} console.log(concatenateElm(["a", "b", "c"]));
// Q5. Write a function to create a new array that contains only the unique elements from the original array using reduce().
function uniqueElm(arr) {
    return arr.reduce((p, c) => {
        if (!p.includes(c)) {
            p.push(c)
        }
        return p
    }, [])
} console.log(uniqueElm([1, 2, 1, 3, 2, 4, 5, 6]));
// Q6. Write a function to reverse the order of elements in an array using reduce().
function reverse(arr) {
    return arr.reduce((p, c) => {
        p.unshift(c)
        return p
    }, [])
} console.log(reverse([1, 2, 3, 4, 5]));
// Q7. Write a function to multiply all elements of an array together using reduce().
function multiplyElm(arr) {
    return arr.reduce((p, c) => {
        return p *= c
    })
} console.log(multiplyElm([2, 3, 4, 5]));
// Q8. Write a function to find the average value of all elements in an array using reduce().
function average(arr) {
    let sum = arr.reduce((p, c) => {
        return p += c
    })
    return sum / arr.length
} console.log(average([1, 2, 3, 4, 5]));
// Q9. Write a function to find the product of the even elements in an array using reduce().
function evenMultiply(arr) {
    let evenElm = arr.filter((e) => e % 2 == 0)
    return evenElm.reduce((p, c) => {
        return p *= c
    })
} console.log(evenMultiply([1, 2, 3, 4, 5, 6]));
// Q10. Write a function to find the index of the largest element in an array using reduce().
function largestIndex(arr) {
    let largest = arr.reduce((p, c) => {
        if (p < c) {
            p = c
        }
        return p
    }, 0)
    return arr.indexOf(largest)
} console.log(largestIndex([1, 2, 5, 3, 4]));