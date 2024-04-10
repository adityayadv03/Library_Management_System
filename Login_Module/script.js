const userEL=document.getElementById("username");
const passEL=document.getElementById("pass");
const loginEl=document.getElementById("login");
const messEL=document.getElementById("mess");

console.log("Check");
loginEl.addEventListener('click',(event)=>{
    let user=userEL.value;
    let pas=passEL.value;
    let space=/[ ]/;
    if(user==="" || pas===""){
        event.preventDefault();
        messEL.textContent="Fill the fields First";
        setTimeout(()=>{
            window.location.reload();
        },3000);
    }
    else if(space.test(user)===true){
        event.preventDefault();
        messEL.textContent="Spaces are Not Allowed";
        setTimeout(()=>{
            window.location.reload();
        },3000);
    }
    else if(user!=="adityayadv01" || pas!=="passcode21"){
        event.preventDefault();
        messEL.textContent="Wrong username or Password";
        setTimeout(()=>{
            userEL.value="";
            passEL.value="";
        },3000);
    }
    else if(user==="adityayadv01" && pas==="passcode21"){
        event.preventDefault();
        window.location.replace("../index.html");
    }
});