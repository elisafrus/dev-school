const arr = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];

let perimeter = 0;
const rows = arr.length;
const cols = arr.length;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (arr[i][j] === 'X') {
        
            if (i === 0 || arr[i - 1][j] === 'O') {
                perimeter++;
            }
            
            if (i === rows - 1 || arr[i + 1][j] === 'O') {
                perimeter++;
            }
            
            if (j === 0 || arr[i][j - 1] === 'O') {
                perimeter++;
            }
            
            if (j === cols - 1 || arr[i][j + 1] === 'O') {
                perimeter++;
            }
        }
    }
}

console.log(perimeter);