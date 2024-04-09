const userEL=document.getElementById("username");
const passEL=document.getElementById("pass");
const loginEl=document.getElementById("login");
const messEL=document.getElementById("mess");

loginEl.addEventListener('click',()=>{
    let user=userEL.value;
    let pas=passEL.value;
    let space=/[ ]/;
    if(user==="" || pas===""){
        setTimeout(()=>{
            messEL.textContent="Fill the fields First";
        },500);
        setTimeout(()=>{
            window.location.reload();
        },3000);
    }
    else if(space.test(user)===true){
        setTimeout(()=>{
            messEL.textContent="Spaces are Not Allowed";
        },500);
        setTimeout(()=>{
            window.location.reload();
        },3000);
    }
    else if(user!=="adityayadv01" || pas!=="passcode21"){
        setTimeout(()=>{
            messEL.textContent="Wrong username or Password";
        },500);
        setTimeout(()=>{
            userEL.value="";
            passEL.value="";
        },3000);
    }
    else if(user==="adityayadv01" && pas==="passcode21"){
        window.location.assign('../index.html');
    }
});