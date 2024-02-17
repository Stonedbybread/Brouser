var iFrameID = document.getElementById('frame');
var canScroll = false;
let sitesVisited = [];
let index = undefined
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
 
function BingButton() {
    iFrameID.src = "https://bing.com";
    console.log("Bing");
    sitesVisited.push("https://bing.com")
    index = 0
}

function redirect() {
    let URL = prompt("URL");
 
    if (!URL.includes("https://")) {
        URL = "https://" + URL;
    }
    sitesVisited.push(URL)
    iFrameID.src = URL;
}

function goToPage(page) {
    if (!page.includes("https://")) {
        page = "https://" + page;
    }
    sitesVisited.push(page);
    iFrameID.src = page;
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

function Back() {
    if (index <= 0) {
        index = 1
    }
    index -= 1
    
    goToPage(sitesVisited[index]);
}

function Forward() {
    index += 1
    if (index > sitesVisited.length-1) {
        index = sitesVisited.langth-1
    }
    goToPage(sitesVisited[index]);
}

function Unlock() {
    let attemptedpassword = prompt("password");
    if (!attemptedpassword == "hello parker") {
        return
    }
    show(document.getElementById("Website"));
    hide(unlockButton);
}

function addCode() {
    document.getElementById("add_after_me")
        .insertAdjacentHTML("afterend",
            `<button id="UnlockButton"onclick="Unlock()">Enter Password</button>`);
}




hide(document.getElementById("Website"))
addCode();
show(document.getElementById('UnlockButton'));