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
