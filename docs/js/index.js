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

const copyToClipboard3 = document.getElementById('copyToClipboard3');
copyToClipboard3.addEventListener('click',()=>{
    const copyRainbowCode1 = document.getElementsByClassName('copyRainbowCode1');
    let result = '';
    for(let i=0;i<copyRainbowCode1.length ;i++){
        copyRainbowCode1[i].disabled = false;
        result = result + copyRainbowCode1[i].value + '\n';
        copyRainbowCode1[i].disabled = true;
    }
    const textarea1 = document.getElementById('textarea1');
    textarea1.value = result;
    textarea1.select();
    textarea1.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

const copyToClipboard4 = document.getElementById('copyToClipboard4');
copyToClipboard4.addEventListener('click',()=>{
    const copyRainbowCode2 = document.getElementsByClassName('copyRainbowCode2');
    let result = '';
    for(let i=0;i<copyRainbowCode2.length ;i++){
        copyRainbowCode2[i].disabled = false;
        result = result + copyRainbowCode2[i].value + '\n';
        copyRainbowCode2[i].disabled = true;
    }
    const textarea2 = document.getElementById('textarea2');
    textarea2.value = result;
    textarea2.select();
    textarea2.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

const copyToClipboard5 = document.getElementById('copyToClipboard5');
copyToClipboard5.addEventListener('click',()=>{
    const copyRainbowCode3 = document.getElementsByClassName('copyRainbowCode3');
    let result = '';
    for(let i=0;i<copyRainbowCode3.length ;i++){
        copyRainbowCode3[i].disabled = false;
        result = result + copyRainbowCode3[i].value + '\n';
        copyRainbowCode3[i].disabled = true;
    }
    const textarea3 = document.getElementById('textarea3');
    textarea3.value = result;
    textarea3.select();
    textarea3.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

const copyToClipboard6 = document.getElementById('copyToClipboard6');
copyToClipboard6.addEventListener('click',()=>{
    const copyBashCode = document.getElementsByClassName('copyBashCode');
    let result = '';
    for(let i=0;i<copyBashCode.length ;i++){
        copyBashCode[i].disabled = false;
        result = result + copyBashCode[i].value + '\n';
        copyBashCode[i].disabled = true;
    }
    const textarea4 = document.getElementById('textarea4');
    textarea4.value = result;
    textarea4.select();
    textarea4.setSelectionRange(0, 99999);
    document.execCommand("copy");
})