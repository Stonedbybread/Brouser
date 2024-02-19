var iFrameID = document.getElementById('frame');
var canScroll = false;
var canScroll2 = false;
let sitesVisited = [];
let index = undefined
let tab2Open = false
let frame2History = [];
let frame2Index = undefined
const unlockButton = document.getElementById("UnlockButton")
console.log(iFrameID);
 
if (iFrameID) {
    iFrameID.onload = function() {
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    };
}

function hide(objects) {
    objects.style.display = "none"
}

function show(objects) {
    objects.style.display = "block";
}
 

function redirect2() {
    if (frame2Index == undefined) {
        frame2Index = 0
    }
    else{frame2Index += 1}
    let URL = prompt("URL");
 
    if (!URL.includes("https://")) {
        URL = "https://" + URL;
    }
    frame2History.push(URL)
    frame2.src = URL;
    console.log(frame2History.length-1);
}

function redirect() {
    if (index == undefined) {
        index = 0
    }
    else {index += 1}
    let URL = prompt("URL");
 
    if (!URL.includes("https://")) {
        URL = "https://" + URL;
    }
    sitesVisited.push(URL)
    iFrameID.src = URL;
    console.log(sitesVisited.length-1);
}

function goToPage(page, frame) {
    console.log(page)
    if (page == ""){
        return
    }
    else{
        if (page == undefined) {
            return
        }
    }
    frame.src = page;
}

function TogleScroll() {
    if (canScroll == false) {
        canScroll = true
        iFrameID.scrolling = "yes"
    }
    else {
        canScroll = false
        iFrameID.scrolling = "no"
    }
}

function TogleScroll2() {
    if (canScroll2 == false) {
        canScroll2 = true
        frame2.scrolling = "yes"
    }
    else {
        canScroll2 = false
        frame2.scrolling = "no"
    }
}

function Back() {
    if (index <= 0) {
        index = 1
    }
    index -= 1
    goToPage(sitesVisited[index], iFrameID);
    console.log(sitesVisited);
    console.log(index);
}

function Back2() {
    if (frame2Index <= 0) {
        frame2Index = 1
    }
    frame2Index -= 1
    goToPage(frame2History[frame2Index], frame2);
    console.log(frame2History);
    console.log(frame2Index);
}


function Forward() {
    index += 1
    if (index > sitesVisited.length-1) {
        index -= 1
    }
    goToPage(sitesVisited[index], iFrameID);
    console.log(sitesVisited);
    console.log(index);
    console.log(sitesVisited.langth)
}

function Forward2() {
    frame2Index += 1
    if (frame2Index > frame2History.length-1) {
        frame2Index -= 1
    }
    goToPage(frame2History[frame2Index], frame2);
    console.log(frame2History);
    console.log(frame2Index);
    console.log(frame2History.langth)
}

function Unlock() {
    let attemptedpassword = prompt("password");
    if (!attemptedpassword == "hello parker") {
        return
    }
    show(document.getElementById("Website"));
    hide(unlockButton);
}

function addCode(code) {
    document.getElementById("add_after_me")
        .insertAdjacentHTML("afterend",
            code);
}

function OpenTab2() {
    if (tab2Open == true) {
        return
    }
    tab2Open = true
    hide(document.getElementById('tabButton'));
    addCode(`
    <iframe id="frame2" src="" style="border:5px #373737 block;" name="Site" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="100%" allowfullscreen></iframe>
    <img src="/Imgs/BreadBar.png" alt="">
    <div class="Buttons">
            <div id="Row1">
                <button id="URLButton2" onclick="redirect2()" class="centerButton">Change URL</button>
            </div>
            <br>
            <div id="Row2">
                <button id="ScrollTogle2" onclick="TogleScroll2()">Scroll on/off</button>
                <button id="BackButton2" onclick="Back2()"><</button>
                <button id="ForwardButton2" onclick="Forward2()">></button>
            </div>
            <br>
        </div>
    `)
    const frame2 = document.getElementById('frame2');
}




hide(document.getElementById("Website"));
show(document.getElementById('UnlockButton'));
console.log(sitesVisited.length-1);