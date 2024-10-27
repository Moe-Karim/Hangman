
const hangmanWords = [
    "Apple",
    "House",
    "Water",
    "Chair",
    "Table",
    "Bread",
    "Happy",
    "Grass",
    "Cloud",
    "Book",
    "Light",
    "Phone",
    "River",
    "Music",
    "Heart",
    "Coffee",
    "Train",
    "Dance",
    "Beach",
    "Star"
];
var answer = document.getElementById('answer-section');
var clicked = document.getElementById('clicked');
var alphabetics = document.querySelectorAll('.letter');
var displayWord = '';
var selected = RandomWord().toLowerCase();
var chars = selected.split('');
var WrongGuess=0;
var picked=[];


function RandomWord(){
    var word = Math.floor((Math.random()*hangmanWords.length));
    return hangmanWords[word];
}
function updateDisplay(){
    displayWord = '';
    for(var i =0;i<chars.length;i++){
        if(picked.includes(chars[i]))
            displayWord += chars[i]
        else
        displayWord += '-';
    }
    answer.innerHTML=displayWord.toUpperCase();

}
function CheckGameOver(){
    if(WrongGuess == 1)
        addBody();
    if(WrongGuess == 2)
        addLeftHand();
    if(WrongGuess == 3)
        addRightHand();
    if(WrongGuess == 4)
        addLeftLeg();
    if(WrongGuess == 5)
        addRightLeg();
    if (WrongGuess == 6) {
        addHead();
        setTimeout(()=>{
            alert('Game over! the word was: ' + selected);
            location.reload();}
        ,100)
        }else if(!displayWord.includes('-')) {
            setTimeout(()=>{
                alert('You win! ' + selected);
                location.reload();}
            ,100)
        }
}
alphabetics.forEach(function(element) {
    element.addEventListener('click', function() {
        var letter = element.textContent.toLowerCase();
        if (!picked.includes(letter)) {
            picked.push(letter);
            if (chars.includes(letter)) {
                updateDisplay();
            } else {
                WrongGuess++;
                console.log('Wrong Guess Count:', WrongGuess);
            }
            CheckGameOver();
        }
    });
});
updateDisplay();