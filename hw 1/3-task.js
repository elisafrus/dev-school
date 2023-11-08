function findNb(m) {
    let n = 1;
    let totalVolume = 0;
    
    while (totalVolume < m) {
        totalVolume += n**3;
        if (totalVolume === m) {
            return n;
        }
        n++;
    }
    
    return -1;
}

console.log(findNb(1071225)); 



