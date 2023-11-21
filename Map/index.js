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
// Q11. Calculate the length of each word in a sentence using map().
function lengthofString(str) {
    let result = str.split(" ")
    return result.map(elm => elm.length)
} console.log(lengthofString("I am learning MERN"));
// Q12. Reverse each string in a list using map().
function Reverse(arr) {
    return arr.map((elm, i) => {
        let reversed = (arr.length - 1) - i
        return arr[reversed]
    })
} console.log(Reverse(["I", "am", "Muhammad"]));
// Q13. Given an array of strings, capitalize the first letter of each word using map().
function capitalize(arr) {
    return arr.map((elm, i) => elm[0].toUpperCase() + elm.slice(1))
} console.log(capitalize(["I", "am", "from", "Rajasthan"]));
// Q14. Given an array of strings, convert each string to its reverse using map().
function stringtoreverse(str) {
    return str.split("").map((e, i, arr) => {
        return arr[arr.length - 1 - i]
    }).join("")
} console.log(stringtoreverse("India is the 7th largest country of the world"));
// Q15. Take an array of numbers and make them strings
function convertToString(arr) {
    return arr.map((e, i) => e.toString())
} console.log(convertToString([1, 2, 3, 4, 5]));
// Q16. Given an array of numbers, find the minimum number in each subarray using map().
function minimumSubarr(arr) {
    return arr.map((e, i) => Math.min(...e))
} console.log(minimumSubarr([[1, 2, 3,], [4, 5, 6], [7, 8, 9]]));
// Q17. Given an array of strings, replace specific words with another word using map().
function changeWords(arr, o, n) {
    return arr.map(e => {
        if (e == o) {
            e = n
        }
        return e
    })
} console.log(changeWords(["this", "is", "asia"], "asia", "europe"));
// Q18. Given an array of strings, remove duplicate words from each string using map().
function removeDuplicateWords(arr) {
    return arr.map((e, i) => {
        let splited = e.split(" ")
        let unique = splited.filter((word, i) => splited.indexOf(word) == i)
        return unique.join()
    })
} console.log(removeDuplicateWords(["this this", "is is", "javaScript", "code"]));
// Q19.  Given an array of strings, find the number of words in each string using map().
function numberOfWords(arr) {
    return arr.map((e, i) => {
        let splited = e.split(" ")
        return splited.length
    })
} console.log(numberOfWords(["hello this", "is", "javaScript", "code"]));
// Q20. Given an array of strings, remove special characters from each string using map().
function removeSpecial(arr) {
    let regex = /[^\w\s]/g
    return arr.map((e, i) => {
        return e.replace(regex, "")
    })
} console.log(removeSpecial(['Hello!', 'How are you?', 'I love programming!']));
// Q21. Given an array of strings, return a new array with the strings that start with the letter A.
function startWithA(arr) {
    return arr.map((e, i) => {
        if (e[0] == "a" || e[0] == "A") {
            return e
        }
    }).filter((e) => e !== undefined)
} console.log(startWithA(["alex", "likes", "Apple"]));