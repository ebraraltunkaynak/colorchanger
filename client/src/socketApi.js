import io from "socket.io-client";
let socket;

export const init = () =>{
    console.log("sunucuya bağlanılıyor");

    socket=io("http://localhost:3000",{
        transports:["websocket"],
    });

    socket.on("connect",()=>{
        console.log("bağlandı");
    } );
};

export const send =(color) =>{
    socket.emit("newColor",color)
};

export const subscribe=(cb) =>{
    socket.on("receive",(color)=>{
        console.log("renk geldi",color);
        cb(color);
    })
}