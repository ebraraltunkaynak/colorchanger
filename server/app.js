const app = require('express')();
const http= require('http').Server(app);
const io= require("socket.io")(http);
const cors = require('cors');



app.use(cors());

app.get("/",(req,res)=> {
    res.send("hello world");
})

let lastColor ="#000000";

io.on("connection",(socket)=>{
    console.log("new connection");
    socket.emit("color",lastColor);

    socket.on("newColor",(color) =>{
        lastColor=color;
        io.emit("receive",color);
    });
    socket.on("disconnect",()=>{
        console.log("user disconnected");
    })
})

http.listen(3000,()=> console.log("🚀🚀🚀server started 🚀🚀🚀"));