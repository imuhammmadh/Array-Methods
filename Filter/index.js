//Question1:Filter an array from given type of data using
function filterData(arr, data) {
    let type = arr.filter(value => typeof value == data)
    return type
} console.log(filterData(["hello", 1, true], "string"));
//Question2:Filter an array of objects from persons who are elder than 18
function removeElder(arr) {
    let e = arr.filter(value => value.age < 18)
    return e
} console.log(removeElder([{ name: "Patrick", age: 17 }, { name: "Joe", age: 19 }, { name: "Ben", age: 12 }]));
//Question3:Filter Even Numbers in an array 
function evenFinder(arr) {
    let even = arr.filter(value => value % 2 == 0)
    return even
} console.log(evenFinder([1, 2, 3, 4, 5, 6]));
//Question4:Return elements those have only given length in an array
function givenLength(arr, l) {
    let len = arr.filter(value => value.length == l)
    return len
} console.log(givenLength(["hello", "below", "hollow"], 6));
//Question5:Return Elements whose length are even
function evenLength(arr) {
    let even = arr.filter(value => value.length % 2 == 0)
    return even
} console.log(evenLength(["hi", "Jam", "Java", "JS", "11"]));