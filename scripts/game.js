
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
