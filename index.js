console.log("JAY SHEREE RAM");
// console.log(window); //this will not work because "window" is browser object

///////////////////////////
//////////MODULE//////////
/////////////////////////
// anything in node js will be a MODULE (e.g. any variable,function,object)
//TYPE--1 (FILE BASED)
//TYPE--2 (BUILT IN)
//TYPE--3 (THIRD PARTY) e.g. express,react,socket.io,mongoose,mocha

/////TYPE--1 (FILE BASED)/////
// const a={
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent:(a,b)=>{
//         console.log((a/b)*100);
//     }
// };
// // console.log(a,"is from index.js");
// module.exports = a;



// /////TYPE--2 (BUILT IN)/////
// /////fs module/////
// const fs = require("fs");
// // console.log(fs);
// fs.readFile('./sample.txt','utf-8',(err,data)=>{//this is an 'asynchronous' function
//     if(err) throw err;
//     console.log("Async operation",data);//this line will be printed after console.log("I am first"); this line
// })

// const t = fs.readFileSync('./sample.txt','utf-8');
// console.log("sync operation",t);
// console.log("I am first");

// const tw = "This string has to written in sample1.txt";
// fs.writeFile("./sample1.txt",tw,()=>{
//     console.log("Sample1.txt has been written with given string");
// })

// // fs.appendFile("./sample1.txt","wow",()=>{});


/////path module/////
// const path = require("path");

// const extensionName = path.extname("/nodejs_only/index.js");
// console.log(extensionName);

// const currDirec = "C:/Users/Abhisek/Desktop/nodejs_only";

// const baseName = path.basename(currDirec);
// console.log(baseName);

// const dir = path.dirname(currDirec);
// console.log(dir);

// const newDirec = "/abhi";
// const newPath = path.join(currDirec+newDirec);
// console.log(newPath);



/////os module/////
// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());

//Some fun third-party module(e.g. pokemon)
// const pokemon = require("pokemon");
// console.log(pokemon.random());





////////////////////////////////////////////////////
//////////////////Create a Server//////////////////
//////////////////////////////////////////////////
const http = require("http");
const fs = require("fs");
const PORT = 2000;
const hostname = "localhost";

console.log("Current directory is",__dirname);
console.log("Current file is",__filename);


const home = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req,res,next)=>{
    if(req.url==="/"){
        return res.end(home);
    }
    else if(req.url==="/about"){
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    else if(req.url==="/contact"){
        return res.end("<h1>CONTACT PAGE</h1>");
    }
    else if(req.url==="/service"){
        return res.end("<h1>SERVICE PAGE</h1>");
    }
    else{
        return res.end("<h1>404 PAGE NOT FOUND</h1>")
    }
    
})

server.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`);
    
})

