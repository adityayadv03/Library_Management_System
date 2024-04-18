const fs=require('fs');
const http=require('http');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url==='/' || req.url==='/home'){
        res.statusCode=200;
        const data=fs.readFileSync('./Library_Management_System/index.html');
        res.end(data.toString());
    }
    else if(req.url==='/login'){
        res.statusCode=200;
        const data=fs.readFileSync('./Library_Management_System/Login_Module/index.html');
        res.end(data.toString());
    }
    else if(req.url==='signup'){
        res.statusCode=200;
        const data=fs.readFileSync('./Library_Management_System/Sign_Module/index.html');
        res.end(data.toString());
    }
});

server.listen(port,()=>{
    console.log("Listening to the port "+port);
});