let homeScore = 0;
let awayScore = 0;

function add1Home() {
    homeScore++;
    document.getElementById("homeScore").textContent = homeScore;
}

function add2Home() {
    homeScore += 2;
    document.getElementById("homeScore").textContent = homeScore;
}

function add3Home() {
    homeScore += 3;
    document.getElementById("homeScore").textContent = homeScore;
}

function add1Away() {
    awayScore++;
    document.getElementById("awayScore").textContent = awayScore;
}

function add2Away() {
    awayScore += 2;
    document.getElementById("awayScore").textContent = awayScore;
}

function add3Away() {
    awayScore += 3;
    document.getElementById("awayScore").textContent = awayScore;
}

function reset () {
    homeScore = 0;
    awayScore = 0;
    document.getElementById("homeScore").textContent = homeScore;
    document.getElementById("awayScore").textContent = awayScore;
}