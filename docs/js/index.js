let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("rbwNavScreen");
let screenFlag = false;

rainbowLogo.addEventListener("click", navigation);

if(window.innerWidth <= 425){
    document.getElementById('header-buttons-list').style.display = "none";
    document.getElementById('rbw-hidden-nav').style.display = "inline-block";
} else{
    document.getElementById('rbw-hidden-nav').style.display = "none";
}

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