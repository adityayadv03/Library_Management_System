const userEL=document.getElementById("email");
const passEL=document.getElementById("pass");
const loginEl=document.getElementById("login");
const messEL=document.getElementById("mess");

loginEl.addEventListener('click',(event)=>{
    let user=userEL.value;
    let pas=passEL.value;
    let space=/[ ]/;
    if(user==="" || pas===""){
        event.preventDefault();
        messEL.textContent="Fill the fields First";
        setTimeout(()=>{
            userEL.value="";
            passEL.value="";
            messEL.textContent="";
        },2000);
    }
    else if(space.test(user)===true){
        event.preventDefault();
        messEL.textContent="Spaces are Not Allowed";
        setTimeout(()=>{
            userEL.value="";
            passEL.value="";
            messEL.textContent="";
        },2000);
    }else if(localStorage.getItem('user')){
        event.preventDefault();
        let ob=JSON.parse(localStorage.getItem('user'));
        if((user===ob.user || user===ob.mail) && pas===ob.pass){
            window.location.replace("../index.html");
        }else{
            messEL.textContent="Wrong username or Password";
            setTimeout(()=>{
                userEL.value="";
                passEL.value="";
            },3000);
        }
    }else if(user!="adityayadv01" || pas!="passcode21"){
        event.preventDefault();
        messEL.textContent="Wrong username or Password";
        setTimeout(()=>{
            userEL.value="";
            passEL.value="";
            messEL.textContent="";
        },3000);
    }else if(user === "adityayadv01" && pas === "passcode21"){
        event.preventDefault();
        window.location.replace("../index.html");
    }
});