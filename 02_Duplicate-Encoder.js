/*
The goal of this exercise is to convert a string to a new string where each character
in the new string
is "(" if that character appears only once in the original string, or ")" if that character
appears more than once in the original string. Ignore capitalization when determining if a
character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

*/

function duplicateEncode(word){
    let wordArray = word.toLowerCase().split('');
    console.log(wordArray);
    let newArray = wordArray.map(function (letter) {
        let count = 0
        wordArray.forEach((letterArr) => {
            if (letter === letterArr) {
                count++
            }
        })
        if (count > 1) {
            return ')'
        } else {
            return '('
        }
    })
    return newArray.join('')
}