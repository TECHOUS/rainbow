let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("navScreen");
let screenFlag = false;
let rainbowNavList = document.getElementById('navlist');
let navLogo = document.getElementById('rbw-logo');
let closebtn = document.getElementById('closebtn');
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// if the image is viewed in website browser remove the scroll bar from below
if(!isMobile){
    let arr = document.getElementsByClassName('field-div heading');
    for(let i=0;i<arr.length;i++){
        arr[i].style.overflow = "hidden";
    }
}

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
    searchArray.push("Colors");
    searchArray.push("Formats");
    searchArray.push("Backgrounds");
    searchArray.push("RESET");
    searchArray.push("BOLD");
    searchArray.push("ITALIC");
    searchArray.push("UNDERLINE");
    searchArray.push("BLINK");
    searchArray.push("HIDDEN");
    searchArray.push("CUT");
    searchArray.push("DOUBLELINE");
    searchArray.push("OVERLINE");
    searchArray.push("DEFAULT");
    searchArray.push("LGREEN");
    searchArray.push("MGREEN");
    searchArray.push("DGREEN");
    searchArray.push("LRED");
    searchArray.push("DRED");
    searchArray.push("LWHITE");
    searchArray.push("DWHITE");
    searchArray.push("LBLUE");
    searchArray.push("DBLUE");
    searchArray.push("LCYAN");
    searchArray.push("DCYAN");
    searchArray.push("ORANGE");
    searchArray.push("BLACK");
    searchArray.push("MAGENTA");
    searchArray.push("YELLOW");
    searchArray.push("LEMON");
    searchArray.push("PINK");
    searchArray.push("BGDGREEN");
    searchArray.push("BGLGREEN");
    searchArray.push("BGMGREEN");
    searchArray.push("BGDRED");
    searchArray.push("BGLRED");
    searchArray.push("BGDORANGE");
    searchArray.push("BGLORANGE");
    searchArray.push("BGLBLUE");
    searchArray.push("BGLWHITE");
    searchArray.push("BGDWHITE");
    searchArray.push("BGLEMON");
    searchArray.push("BGMPINK");
    searchArray.push("BGDPINK");
    searchArray.push("BGLPINK");
}