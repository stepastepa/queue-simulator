var i=1;

function randomQueue() {
    var all = participants.value;
    i = Math.ceil(Math.random()*all);
    return i;
}

function queueGenerate() {
    resultNumbers.insertAdjacentHTML('beforeend', '<div class="result">101</div>');
    var myNumber = document.querySelector(".result:last-child");
    // highlight lucky queue number
    var x = randomQueue();
    myNumber.innerHTML = x;
    if (x<=lucky.value) {
        highlight();
    }
}
function generateQueueList() {
    resultNumbers.innerHTML = ''; // reset list
    for (var a=1; a<=accounts.value; a++) {
        queueGenerate();
    }
    if (accounts.value > 8) {
        longList();
    }
}

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", generateQueueList);



//////////// highlight lucky number /////////////
function highlight() {
    var resultNumber  = document.querySelector(".result:last-child");
    resultNumber.classList.add("highlight");
}

//////////// detect long list ///////////////
function longList() {
    var rightSection  = document.querySelector(".right");
    rightSection.classList.add("long-list");
}
