let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("navScreen");
let screenFlag = false;
let rainbowNavList = document.getElementById('navlist');
let navLogo = document.getElementById('rbw-logo');
let closebtn = document.getElementById('closebtn');
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

rainbowLogo.addEventListener("click", navigation);
rainbowNavList.addEventListener('click', navigation);

function navigation(){
    if(screenFlag){
        screenFlag = false;
        closeNavigation();
    }
    else
    {
        screenFlag = true;
        openNavigation();
    }
}

function openNavigation(){
    rainbowNavScreen.style.height = "100%";
    const body = document.body;
    body.style.overflowY = 'hidden';

    // manage index nav icon according to desktop browser
    if(window.innerWidth>=1200 && !isMobile){
        navLogo.style.right = "30px";
        closebtn.style.right = "30px";
    }
}

function closeNavigation(){
    rainbowNavScreen.style.height = "0%";
    const body = document.body;
    body.style.overflowY = 'scroll';

    if(window.innerWidth>=1200){
        navLogo.style.right = "15px";
    }
}

let init =()=>{
    searchArray.push("get");
    searchArray.push("getFormat");
    searchArray.push("getColor");
    searchArray.push("getBG");
    searchArray.push("getFormatColor");
    searchArray.push("getFormatBG");
    searchArray.push("getColorBG");
    searchArray.push("getRainbow");
    searchArray.push("getFormatString");
    searchArray.push("getColorString");
    searchArray.push("getBGString");
    searchArray.push("getFormatColorString");
    searchArray.push("getFormatBGString");
    searchArray.push("getColorBGString");
    searchArray.push("getRainbowString");
}