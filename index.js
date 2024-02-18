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
    console.log(page)
    if (page == ""){
        return
    }
    else{
        if (page == undefined) {
            return
        }
    }
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
    if (index == NaN) {
        index = sitesVisited.findIndex(iFrameID.src)
    }
    else{
        if (index == undefined){
            index = sitesVisited.findIndex(iFrameID.src)
        }
    }
    goToPage(sitesVisited[index]);
    console.log(sitesVisited);
    console.log(index);
}

function Forward() {
    index += 1
    if (index > sitesVisited.length-1) {
        index = sitesVisited.findIndex(iFrameID.src)
        console.log('above')
    }
    goToPage(sitesVisited[index]);
    if (index == NaN) {
        index = sitesVisited.findIndex(iFrameID.src)
    }
    else{
        if (index == undefined){
            index = sitesVisited.findIndex(iFrameID.src)
        }
    }
    iFrameID.src = sitesVisited[index]
    console.log(sitesVisited);
    console.log(index);
    console.log(sitesVisited.langth)
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
show(document.getElementById('UnlockButton'));