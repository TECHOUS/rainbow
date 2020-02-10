let rainbowLogo = document.getElementById('rbw-logo');
let rainbowNavScreen = document.getElementById("rbwNavScreen");
let screenFlag = false;
let rainbowNavList = document.getElementById('rbw-navlist');

rainbowLogo.addEventListener("click", navigation);
rainbowNavList.addEventListener('click', navigation);

function navigation(){
    let navLogo = document.getElementById('rbw-logo');
    let closebtn = document.getElementById('closebtn');
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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

    let navLogo = document.getElementById('rbw-logo');
    let closebtn = document.getElementById('closebtn');
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
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

    let navLogo = document.getElementById('rbw-logo');
    if(window.innerWidth>=1200){
        navLogo.style.right = "15px";
    }
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

const copyToClipboard7 = document.getElementById('copyToClipboard7');
copyToClipboard7.addEventListener('click',()=>{
    const copyMainCode = document.getElementsByClassName('copyMainCode');
    let result = '';
    for(let i=0;i<copyMainCode.length ;i++){
        copyMainCode[i].disabled = false;
        result = result + copyMainCode[i].value + '\n';
        copyMainCode[i].disabled = true;
    }
    const textarea5 = document.getElementById('textarea5');
    textarea5.value = result;
    textarea5.select();
    textarea5.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

const copyToClipboard8 = document.getElementById('copyToClipboard8');
copyToClipboard8.addEventListener('click',()=>{
    const copyMainCodeEclipse = document.getElementsByClassName('copyMainCodeEclipse');
    let result = '';
    for(let i=0;i<copyMainCodeEclipse.length ;i++){
        copyMainCodeEclipse[i].disabled = false;
        result = result + copyMainCodeEclipse[i].value + '\n';
        copyMainCodeEclipse[i].disabled = true;
    }
    const textarea6 = document.getElementById('textarea6');
    textarea6.value = result;
    textarea6.select();
    textarea6.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

const copyToClipboard9 = document.getElementById('copyToClipboard9');
copyToClipboard9.addEventListener('click',()=>{
    const copyVSCode = document.getElementsByClassName('copyVSCode');
    let result = '';
    for(let i=0;i<copyVSCode.length ;i++){
        copyVSCode[i].disabled = false;
        result = result + copyVSCode[i].value + '\n';
        copyVSCode[i].disabled = true;
    }
    const textarea7 = document.getElementById('textarea7');
    textarea7.value = result;
    textarea7.select();
    textarea7.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

const copyToClipboard10 = document.getElementById('copyToClipboard10');
copyToClipboard10.addEventListener('click',()=>{
    const copyVSCodeBash = document.getElementsByClassName('copyVSCodeBash');
    let result = '';
    for(let i=0;i<copyVSCodeBash.length ;i++){
        copyVSCodeBash[i].disabled = false;
        result = result + copyVSCodeBash[i].value + '\n';
        copyVSCodeBash[i].disabled = true;
    }
    const textarea8 = document.getElementById('textarea8');
    textarea8.value = result;
    textarea8.select();
    textarea8.setSelectionRange(0, 99999);
    document.execCommand("copy");
})

let init =()=>{
    searchArray.push("Description");
    searchArray.push("Rainbow Java Package");
    searchArray.push("Class Codes");
    searchArray.push("Interface Procedures");
    searchArray.push("Class Rainbow");
    searchArray.push("Getting Started");
    searchArray.push("Getting Started-Developer Use");
    searchArray.push("Getting Started-Library Jar Use");
    searchArray.push("Getting Started-Github Java Package Use");
    searchArray.push("Developer Use");
    searchArray.push("Developer Use-Intellij Idea");
    searchArray.push("Intellij Idea-Using of App Class in Rainbow Package");
    searchArray.push("Intellij Idea-Adding customization to Rainbow Library");
    searchArray.push("Intellij Idea-Building local Artifacts and use of library jar");
    searchArray.push("Developer Use-Eclipse");
    searchArray.push("Eclipse-Using of App Class in Rainbow Package");
    searchArray.push("Eclipse-Adding customization to Rainbow Library");
    searchArray.push("Eclipse-Creating local jar with eclipse");
    searchArray.push("Developer Use-VS Code");
    searchArray.push("VS Code-Using of App class in VS Code");
    searchArray.push("VS Code-Customize with VS Code");
    searchArray.push("VS Code-Creating local jar with vscode");
    searchArray.push("Library Jar Use");
    searchArray.push("Library Jar Use-Intellij Idea");
    searchArray.push("Library Jar Use-Eclipse");
    searchArray.push("Library Jar Use-VS Code");
    searchArray.push("Contribution");
    searchArray.push("LICENSE");
    searchArray.push("Version");
}