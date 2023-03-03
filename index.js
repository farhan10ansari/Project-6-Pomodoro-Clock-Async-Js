//buttons listener
let callInterval = 1000;


let sessiontime = 0;
let sessionmin = 0;
let sessionsec = 0;
let sinterval;

let breaktime = 0;
let breakmin = 0;
let breaksec = 0;
let binterval;

sessioncounter = 0;
breakcounter = 0;

let task = 1;

function breakinterval() {
    console.log("break interval");
    if (breakmin == 0 && breaksec == 0) {
        clearInterval(binterval);
        startsession();
        return;
    }
    breaksec--;

    let m = breakmin;
    let s = breaksec;
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("displaytime").innerText = m + ":" + s;
    if (breaksec == 0 && breakmin > 0) {
        breakmin--;
        breaksec = 60;
    }
}
function startbreak() {
    if (breaktime == 0) {
        startsession();
        return;
    }
    task = 2;
    if (breaksec == 0) {
        breakcounter++;

    }
    document.getElementById("session").innerText = "Break " + breakcounter;
    document.getElementById("session").style.color = "#c36d48";
    if (breakmin == 0 && breaksec == 0) {
        breakmin = breaktime - 1;
        breaksec = 60;
    }

    binterval = setInterval(breakinterval, callInterval);
    document.getElementById("displaytime").style.color = "#c36d48";
}

function sessioninterval() {
    console.log("session interval");
    if (sessionmin == 0 && sessionsec == 0) {
        clearInterval(sinterval);
        startbreak();
        return;
    }
    sessionsec--;

    let m = sessionmin;
    let s = sessionsec;
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("displaytime").innerText = m + ":" + s;
    if (sessionsec == 0 && sessionmin > 0) {
        sessionmin--;
        sessionsec = 60;
    }


}
function startsession() {
    if (sessiontime == 0) {
        startbreak();
        return;
    }
    task = 1;

    if (sessionsec == 0) {
        sessioncounter++;
    }
    document.getElementById("session").innerText = "Session " + sessioncounter;
    document.getElementById("session").style.color = "#00a0b0";
    if (sessionmin == 0 && sessionsec == 0) {
        sessionmin = sessiontime - 1;
        sessionsec = 60;
    }
    sinterval = setInterval(sessioninterval, callInterval);
    document.getElementById("displaytime").style.color = "#00a0b0";


}
function startclicked(event) {
    console.log("start clicked");
    if (sessiontime == 0 && breaktime == 0) {
        alert("Please Set Session Time");
        return;
    }
    if (task == 1 && sessiontime != 0) {
        startsession();
    }
    else {
        startbreak();
    }
    document.getElementById("startb").replaceWith(pause);

    document.getElementById("s1").disabled = true;
    document.getElementById("s2").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("resetb").disabled = false;

}
function pauseclicked(event) {
    if (task == 1) {
        clearInterval(sinterval);
    }
    else {
        clearInterval(binterval);
    }
    document.getElementById("pauseb").replaceWith(start);


}
function resetclicked(event) {

    clearInterval(sinterval);
    clearInterval(binterval);
    sessiontime = 0;
    sessionmin = 0;
    sessionsec = 0;
    breaktime = 0;
    breakmin = 0;
    breaksec = 0;

    sessioncounter = 0;
    breakcounter = 0;

    document.getElementById("mainbuttons").firstElementChild.replaceWith(start);
    document.getElementById("displaytime").innerText = "00:00";
    document.getElementById("stime").innerText = "00 min";
    document.getElementById("btime").innerText = "00 min";
    document.getElementById("resetb").disabled = true;

    document.getElementById("s1").disabled = false;
    document.getElementById("s2").disabled = false;
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;

    document.getElementById("displaytime").style.color = "#00a0b0";

    document.getElementById("session").innerText = "Session 0";



}
function s1clicked(event) {

    console.log("s1 clicked");
    if (sessiontime == 0) {
        return;
    }
    sessiontime--;
    let x = sessiontime;
    if (sessiontime < 10) {
        x = "0" + sessiontime;
    }
    x = x + " min";
    document.getElementById("stime").innerText = x;

}
function s2clicked(event) {

    console.log("s2 clicked");
    sessiontime++;
    let x = sessiontime;
    if (sessiontime < 10) {
        x = "0" + sessiontime;
    }
    x = x + " min";
    document.getElementById("stime").innerText = x;

}
function b1clicked(event) {

    console.log("b1 clicked");
    if (breaktime == 0) {
        return;
    }
    breaktime--;
    let x = breaktime;
    if (breaktime < 10) {
        x = "0" + breaktime;
    }
    x = x + " min";
    document.getElementById("btime").innerText = x;
}
function b2clicked(event) {

    console.log("b2 clicked");
    breaktime++;
    let x = breaktime;
    if (breaktime < 10) {
        x = "0" + breaktime;
    }
    x = x + " min";
    document.getElementById("btime").innerText = x;

}



//startbutton
let start = document.createElement("button");
start.setAttribute("class", "mainbuttons");
start.innerText = "Start";
start.setAttribute("id", "startb");
start.addEventListener("click", startclicked)
//pausebutton
let pause = document.createElement("button");
pause.setAttribute("class", "mainbuttons");
pause.innerText = "Pause";
pause.setAttribute("id", "pauseb");
pause.addEventListener("click", pauseclicked)

//resetbutton
let reset = document.createElement("button");
reset.setAttribute("class", "mainbuttons");
reset.innerText = "Reset";
reset.addEventListener("click", resetclicked);
reset.setAttribute("id", "resetb");

let x = document.getElementById("mainbuttons");
x.appendChild(start);
x.appendChild(reset);


console.log("farhan");









document.getElementById("s1").addEventListener("click", s1clicked);
document.getElementById("s2").addEventListener("click", s2clicked);
document.getElementById("b1").addEventListener("click", b1clicked);
document.getElementById("b2").addEventListener("click", b2clicked);

console.log(document.getElementById("s1"));


