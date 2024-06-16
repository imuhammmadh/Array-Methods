//Question1:Print all elements of an array
function printElement(arr) {
    arr.forEach(elm => {
        console.log(elm);
    });
} printElement([1])
//Question2:Find the smallest element in an array
function smallest(arr) {
    let min = Infinity
    arr.forEach(elm => {
        if (min > elm) {
            min = elm
        }
    })
    return min
} console.log(smallest([1, 2, 3, 4, 5, -3]));
//Question3:Find the element in an array
function linearSearch(arr, target) {
    let result = false
    arr.forEach(elm => {
        if (elm == target) {
            result = true
        }
    })
    return result
} console.log(linearSearch([1, 2, 3, 4, 5, -3], -3));
//Question4:Filter an array from given type of data using forEach
function filterArray(arr, data) {
    let result = []
    arr.forEach(elm => {
        if (typeof elm == data) {
            result.push(elm)
        }
    })
    return result
} console.log(filterArray(["hi", 1, "1", true, 18], "number"));
//Question5:Count how many even numbers are present in an array
function evenCounter(arr) {
    let counter = 0
    arr.forEach(elm => {
        if (elm % 2 == 0) {
            counter++
        }
    })
    return counter
} console.log(evenCounter([0, 1, 2, 3, 4]));
//Question6:Find the average of an array
function average(arr) {
    let sum = 0
    arr.forEach(elm => {
        sum += elm
    })
    return sum / arr.length
} console.log(average([1, 2, 3, 4]));
//Question8:Check if array is special or not
function specialArr(arr) {
    let result = true
    arr.forEach((elm, i) => {
        if (elm % 2 == 0 && i % 2 !== 0) {
            result = false
        } else if (elm % 2 !== 0 && i % 2 == 0) {
            result = false
        }
    })
    return result
} console.log(specialArr([0, 1, 2, 3, 4, 5]));
//Question9:Check if Array is sorted
function sorted(arr) {
    let result = true
    arr.forEach((elm, i) => {
        if (arr[i] < arr[i - 1]) {
            result = false
        }
    })
    return result
} console.log(sorted([1, 2, 3, 4, -10, 6]));
//Question10:Return elements those have only given length in an array
function lengthFiltered(arr, length) {
    let result = []
    arr.forEach(elm => {
        if (elm.length == length) {
            result.push(elm)
        }
    })
    return result
} console.log(lengthFiltered(["hello", "Coder", "Loss", "JavaScript"], 5));
//Q11:Write a function to remove all duplicate elements from an array using forEach().
function duplicateRemover(arr) {
    let num = []
    arr.forEach((e) => {
        if (!num.includes(e)) {
            num.push(e)
        }
    })
    return num
} console.log(duplicateRemover([1, 2, 3, 3, 4, 5]));
// Q12. Write a function to find the first occurrence of an element in an array using forEach().
function firstOccurrence(arr, target) {
    let i = -1
    arr.forEach((elm, idx) => {
        if (elm == target && i == -1) {
            i = idx
        }
    })
    return i
} console.log(firstOccurrence([1, 2, 3, 3, 4, 5], 3));
// Q13. Write a function to find the second smallest element in an array using forEach().
function secondSmallest(arr) {
    let smallest = arr[0]
    let sSmallest = Infinity
    arr.forEach(elm => {
        if (smallest > elm) {
            sSmallest = smallest
            smallest = elm
        } else if (elm !== smallest && elm < sSmallest) {
            sSmallest = elm
        }
    })
    return sSmallest
} console.log(secondSmallest([1, 2, 3, 4, 5]));
// Q14. Write a function to concatenate all elements of an array into a single string using forEach().
function arrToStr(arr) {
    let result = ""
    arr.forEach(elm => {
        result += elm
    })
    return result
} console.log(arrToStr([1, 2, 3, 4, 5, "hi"]));
// Q15. Write a function to remove all elements from an array that satisfy a given condition using forEach().
function satisfyCondition(arr) {
    arr.forEach((elm, i, a) => {
        if (elm % 2 == 0) {
            arr.splice(i, 1)
        }
    })
    return arr
} console.log(satisfyCondition([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Q16. Write a function to find the sum of the squares of all even elements in an array using forEach().
function sumofSquares(arr) {
    let result = []
    arr.forEach(elm => {
        if (elm % 2 == 0) {
            result.push(elm * elm)
        }
    })
    return result
} console.log(sumofSquares([1, 2, 3, 4, 5, 6]));
// Q17. Write a function to count how many elements in an array are equal to a given value using forEach().
function checkElement(arr, value) {
    let counter = 0
    arr.forEach(elm => {
        if (elm == value) {
            counter++
        }
    })
    return counter
} console.log(checkElement([1, 2, 3, 4, 5, 1, 6], 1));
// Q18. Write a function to find the first positive element in an array using forEach().
function firstPositive(arr) {
    let result = 0
    arr.forEach((elm) => {
        if (elm > 0 && result == 0) {
            result = elm
        }
    })
    return result
} console.log(firstPositive([-99, -65, 1, 4, 0]));
// Q19. Write a function to find the longest string in an array using forEach().
function longestString(arr) {
    let max = -Infinity
    let result = ""
    arr.forEach(elm => {
        if (elm.length > max) {
            max = elm.length
            result = elm
        }
    })
    return result
} console.log(longestString(["Jaipur", "Rajasthan", "India", "Asia"]));
// Q20. Write a function to filter out all negative elements from an array using forEach().
function negativeFilter(arr) {
    let result = []
    arr.forEach((elm, i) => {
        if (elm > 0) {
            result.push(elm)
        }
    })
    return result
} console.log(negativeFilter([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]));
// Q21. Write a function to reverse the order of elements in an array using forEach()
//  Q22. Write a function to remove all elements from an array that are divisible by a given value using forEach().
function removeDivisible(arr, value) {
    let result = []
    arr.forEach(elm => {
        if (elm % value == 0) {
            result.push(elm)
        }
    })
    return result
} console.log(removeDivisible([1, 2, 4, 36, 78, 31], 3));
// Q23.  Write a function to remove all falsy values from an array using forEach().
function removefalsy(arr) {
    let trueValues = []
    arr.forEach(elm => {
        if (elm) {
            trueValues.push(elm)
        }
    });
    return trueValues
} console.log(removefalsy([true, false, -1, "", null, undefined, 1, 2, 3, 4, -5, NaN, -0]));
// Q24. Write a function to find the smallest positive integer that is not present in an array using forEach().
function smallestNotPresent(arr) {
    let min = Infinity
    arr.forEach(elm => {
        if (elm < min) {
            min = elm
        }
    })
    return min - 1
} console.log(smallestNotPresent([8, 9, 7, 2, 3, 4, 5, 6]));
// Q25.  Write a function to find the index of the smallest element in an array using forEach().
function smallestIndex(arr) {
    let result = 0
    let min = Infinity
    arr.forEach((elm, i) => {
        if (elm < min) {
            min = elm
            result = i
        }
    })
    return result
} console.log(smallestIndex([25, 19, 13, 73, 27, 4, 6]));