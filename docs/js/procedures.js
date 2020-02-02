let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("navScreen");
let screenFlag = false;
let rainbowNavList = document.getElementById('navlist');

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
}

function closeNavigation(){
    rainbowNavScreen.style.height = "0%";
    const body = document.body;
    body.style.overflowY = 'scroll';
}