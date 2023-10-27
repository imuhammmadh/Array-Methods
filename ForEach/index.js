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