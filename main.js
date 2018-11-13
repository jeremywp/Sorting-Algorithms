function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

let myBubbleArray = [2,9,3,7,5,0,1,8];
let mySelectArray = [2,9,3,7,5,0,1,8];
let myNewArray = [];

function selectionSort(arr) {
    let length = arr.length;
    for (let i = 0; i <length; i++) {
        let min = Math.min.apply(null, arr);
        let index = arr.indexOf(min);
        myNewArray.push(arr[index]);
        arr.splice(index,1);
    }
}

bubbleSort(myBubbleArray);
selectionSort(mySelectArray);

console.log(myBubbleArray);
console.log(myNewArray);