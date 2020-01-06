let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("rbwNavScreen");
let screenFlag = false;

rainbowLogo.addEventListener("click", navigation);

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
}

function closeNavigation(){
    rainbowNavScreen.style.height = "0%";
}