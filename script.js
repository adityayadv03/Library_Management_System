const getEL=document.getElementById("get");
getEL.addEventListener("click",()=>{
    window.location.replace("./Sign_Module/index.html");
});

const joinEL=document.getElementById("join_button");

joinEL.addEventListener("click",()=>{
    let mailEL=document.getElementById("mail").value;
    if(isValidfield(mailEL)===true){
        const joinsecEL=document.getElementById("section_join");
        joinsecEL.innerHTML=
        `
            <img src="./images/Thank.avif" height="250px">
            <h2>Thank You For Joining the Community</h2>
        `
    }
});


const elements = [...document.getElementsByClassName("issue")];
elements.forEach(e => e.addEventListener('click', (event) => {
    if(confirm("Wanna Issue the Book?")){
        alert("Book Issued Thank You for Issuing");
    }else{
        alert("Book Not Issued");
    }
}))

function isValidfield(ch){
    let space=/[ ]/;
    if(space.test(ch)===true){
        messEL.textContent="Username or Email Can't Contains Spaces";
        return false;
    }else{
        return true;
    }
}