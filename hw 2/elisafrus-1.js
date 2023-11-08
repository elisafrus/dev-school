function maxLeaderHonor(arr, d) { 
    const step = arr.length/d;
    let result=0;

    for (let i = 0; i<step; i++) {
        let currentHonor=0;
        for (let j = i; j<arr.length; j+=step) {
            currentHonor += arr[j];
        }
        if (currentHonor > result) {result = currentHonor}
    }

    return result; 
}

console.log(maxLeaderHonor([1, 2, 3, 4], 2));