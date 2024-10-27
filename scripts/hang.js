function addHead(){
    var head = document.createElement('img');
    head.src = "../assets/head.svg";
    head.classList.add("head");
    document.getElementById('hang').appendChild(head);
}
function addBody(){
    var body = document.createElement('img');
    body.src = "../assets/body.svg";
    body.classList.add("body");
    document.getElementById('hang').appendChild(body);
}
function addLeftHand(){
    var lefthand = document.createElement('img');
    lefthand.src = "../assets/left-hand.svg";
    lefthand.classList.add("left-hand");
    document.getElementById('hang').appendChild(lefthand);
}
function addLeftLeg(){
    var left = document.createElement('img');
    left.src = "../assets/left-leg.svg";
    left.classList.add("left-leg");
    document.getElementById('hang').appendChild(left);
}
function addRightHand(){
    var right = document.createElement('img');
    right.src = "../assets/right-hand.svg";
    right.classList.add("right-hand");
    document.getElementById('hang').appendChild(right);
}
function addRightLeg(){
    var right = document.createElement('img');
    right.src = "../assets/right-leg.svg";
    right.classList.add("right-leg");
    document.getElementById('hang').appendChild(right);
}
