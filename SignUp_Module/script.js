const nameEL=document.querySelector("#name");
const userEL=document.querySelector("#username");
const mailEL=document.querySelector("#mail");
const passEL=document.querySelector("#pass");
const signEL=document.querySelector("#signup");
const messEL=document.querySelector("#mess");
const logEL=document.querySelector("#login");

signEL.addEventListener('click',()=>{
    let name=nameEL.value;
    let user=userEL.value;
    let mail=mailEL.value;
    let pass=passEL.value;
    if(name==="" || user==="" || mail==="" || pass===""){
        messEL.textContent="First fill the Fields.";
        signEL.disabled=true;
    }else if(isValidfield(user)!==true || isValidfield(mail)!==true){
        signEL.disabled=true;
    }else if(isPassValid(pass)!==true){
        signEL.disabled=true;
    }else{
        messEL.classList.remove("wrong");
        messEL.classList.add("right");
        messEL.textContent="SignUp Completed! You can now Login";
        signEL.disabled=true;
        logEL.style.display='block';
    }
    setTimeout(()=>{
        messEL.textContent="";
        signEL.disabled=false;
        messEL.classList.remove("right");
        messEL.classList.add("wrong");
    },3000);
});

logEL.addEventListener("click",()=>{
    logEL.disabled=true;
    window.location.href="../Login_Module/index.html";
});

function isValidfield(ch){
    let space=/[ ]/;
    if(space.test(ch)===true){
        messEL.textContent="Username or Email Can't Contains Spaces";
        return false;
    }else{
        return true;
    }
}
function isPassValid(ch){
    let special=/[!#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    if(ch.length<=6){
        messEL.textContent="Password is too Small"
        return false;
    }else if(special.test(ch)){
        messEL.textContent="Invalid Special Character (Use _ @ Only!)"
        return false;
    }else{
        return true;
    }
}
