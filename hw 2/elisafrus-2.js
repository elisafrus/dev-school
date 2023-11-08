let arr = [1, 2, 3, 4, 3, 2, 1];
let Index = -1;

for (let i = 0; i < arr.length; i++) 
{
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
        leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
        rightSum += arr[k];
    }

    if (leftSum === rightSum) {
        Index = i;
        break;
    }
}

console.log("Index=", Index);
