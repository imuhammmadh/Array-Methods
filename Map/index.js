// Q1.Write a function to create a new array that contains the double of each element in the original array using map().
function double(arr) {
    let twoTime = arr.map(elm => elm * 2)
    return twoTime
} console.log(double([1, 2, 3, 4, 5]));
// Q2. Write a function to create a new array that contains the square of each element in the original array using map().
function square(arr) {
    let squared = arr.map(elm => elm * elm)
    return squared
} console.log(square([1, 2, 3, 4, 5]));
// Q3. Write a function to create a new array that contains the length of each string in the original array using map().
function lengthFinder(arr) {
    let l = arr.map(elm => elm.length)
    return l
} console.log(lengthFinder(["hi", "hello", "bye"]));
// Q4. Write a function to create a new array that contains the uppercase version of each string in the original array using map()
function uppercaseMaker(arr) {
    let up = arr.map(elm => elm.toUpperCase())
    return up
} console.log(uppercaseMaker(["hi", "hello", "bye"]));
// Q5. Write a function to create a new array that contains the first letter of each string in the original array using map().
function firstLetter(arr) {
    let first = arr.map(elm => elm[0])
    return first
} console.log(firstLetter(["India", "Rajasthan", "Jaipur"]));
// Q6. Write a function to create a new array that contains the type of each element in the original array using map()
function type(arr) {
    let t = arr.map(elm => typeof elm)
    return t
} console.log(type(["hello", 1, true]));
// Q7. Write a function to create a new array that contains the index of each element in the original array using map().
function index(arr) {
    let finder = arr.map((elm, i) => i)
    return finder
} console.log(index([1, 2, 4, 5]));
// Q8. Write a function to create a new array that contains the sum of each pair of elements from two arrays using map().
function sum(arr, arr2) {
    let add = arr.map((elm, i) => elm + arr2[i])
    return add
} console.log(sum([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// Q9. Write a function to create a new array that contains the difference between each pair of elements from two arrays using map().
function difference(arr, arr2) {
    let subtract = arr.map((elm, i) => elm - arr2[i])
    return subtract
} console.log(difference([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// Q10. Write a function to create a new array that contains the product of each pair of elements from two arrays using map().
function product(arr, arr2) {
    let multiply = arr.map((elm, i) => elm * arr2[i])
    return multiply
} console.log(product([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));