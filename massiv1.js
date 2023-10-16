let cem=0
let max
let min
let toplam
let son
const arr=[1,2,3,4,5,5,24,346,78,456,543,45,44,3];

max=Math.max(...arr)

min=Math.min(...arr)

toplam=(max+min)

for (let i = 0; i < arr.length; i++) {
        cem+= arr[i]
    }
    son=cem-toplam
console.log(son);