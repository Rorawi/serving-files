const express = require("express")
const path = require("path")

const bodyParser = require("body-parser");
const server = express();

const loginRequestHandler =(req,res)=> {
    //  let body= ""
    // req.on("data",chunk=> {
    //     body+=chunk
    // })

    // req.on("end",()=> {
        
    //     console.log(body);
    // })
    console.log(req.body.password);
    console.log(req.body.email);
    res.send("DONE BRO!")
}

//middleware definitions
server.use(express.static(path.join(__dirname,"public")))

server.use(bodyParser.urlencoded({extended: false}))
server.listen(3000,()=> console.log("server is ready"))

server.post('/login',loginRequestHandler)








































// const serveHomePage =(req,res)=> {
//     //res.send("Hello this is the home page handler")
//     // 1.Find the file
//         const homeageFilePath = path.join(__dirname,"public","index.html")
//     //2.send the file to the client
//     res.sendFile(homeageFilePath)

// }


// const serveProfilePage =(req,res)=> {
//     //res.send("Hello this is the home page handler")
//     // 1.Find the file
//         const homeageFilePath = path.join(__dirname,"public","profile.html")
//     //2.send the file to the client
//     res.sendFile(homeageFilePath)

// }


// const serveAboutPage =(req,res)=> {
//     const aboutPageFile = path.join(__dirname,"public","about.html")
//     res.sendFile(aboutPageFile)
// }
//route definitions.
// server.get("/",serveHomePage)
// server.get("/profile",serveProfilePage)
// server.get("/about",serveAboutPage)