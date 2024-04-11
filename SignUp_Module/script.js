const nameEL=document.querySelector("#name");
const userEL=document.querySelector("#username");
const mailEL=document.querySelector("#mail");
const passEL=document.querySelector("#pass");
const signEL=document.querySelector("#signup");
const messEL=document.querySelector("#mess");
const logEL=document.querySelector("#login");

signEL.addEventListener('click',(event)=>{
    let name=nameEL.value;
    let user=userEL.value;
    let mail=mailEL.value;
    let pass=passEL.value;
    if(name==="" || user==="" || mail==="" || pass===""){
        event.preventDefault();
        messEL.textContent="First fill the Fields.";
    }else if(isValidfield(user)!==true || isValidfield(mail)!==true){
        event.preventDefault();
    }else if(isPassValid(pass)!==true){
        event.preventDefault();
    }else{
        event.preventDefault();
        store(user,mail,pass);
        messEL.classList.remove("wrong");
        messEL.classList.add("right");
        messEL.textContent="SignUp Completed! You can now Login";
        logEL.style.display='block';
    }
    setTimeout(()=>{
        messEL.textContent="";
        messEL.classList.remove("right");
        messEL.classList.add("wrong");
    },3000);
});

logEL.addEventListener("click",(event)=>{
    event.preventDefault();
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

function store(username,usermail,password){
    let obj={
        user:username,
        mail:usermail,
        pass:password
    };
    localStorage.setItem('user',JSON.stringify(obj));
    alert("Job Done");
}