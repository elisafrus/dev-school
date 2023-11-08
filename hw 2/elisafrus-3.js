let words = ["tsar", "rat", "tar", "star", "tars", "cheese"];
let groupedAnagrams = {};

for (let word of words) 
{
    let sortedWord = word.split('').sort().join('');
    if (groupedAnagrams[sortedWord]) {
        groupedAnagrams[sortedWord].push(word);
    } else {
        groupedAnagrams[sortedWord] = [word];
    }
}

console.log(groupedAnagrams);
