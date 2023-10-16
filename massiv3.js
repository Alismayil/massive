let cem = 0
let max
const arr = [2, 0, 1, 2, 7, 2, 1, 0, 2]

max = Math.max(...arr)

for (let i = 0; i < arr.length; i++) {
    cem += arr[i]
    if (arr[i] === max) {
        break;
    }
}
console.log(cem);