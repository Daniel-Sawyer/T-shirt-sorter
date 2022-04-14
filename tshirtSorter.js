// Write your solution below:
const sorter = (word) => {
    arr = [...word]
    console.log(arr);
    arr.sort()
    arr.reverse()
    console.log(arr);
    text = arr.join(``)
    return text
}

console.log(sorter(`smmmmslsm`))
