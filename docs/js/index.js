let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("rbwNavScreen");
let screenFlag = false;
let rainbowNavList = document.getElementById('rbw-navlist');

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
}

function closeNavigation(){
    rainbowNavScreen.style.height = "0%";
}

const copyToClipboard1 = document.getElementById('copyToClipboard1');
copyToClipboard1.addEventListener('click',()=>{
    const copyText = document.getElementById('copyText');
    copyText.disabled = false;
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    copyText.disabled = true;
})

const copyToClipboard2 = document.getElementById('copyToClipboard2');
copyToClipboard2.addEventListener('click',()=>{
    const copyMvnText = document.getElementById('copyMvnText');
    copyMvnText.disabled = false;
    copyMvnText.select();
    copyMvnText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    copyMvnText.disabled = true;
})
