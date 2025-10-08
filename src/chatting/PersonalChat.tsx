import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("latitude : ", position.coords.latitude)
            console.log("longitude : ", position.coords.longitude);
        }, (error) => { alert("error") })
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


const PersonalChat = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [sendmessage, setsendMessage] = useState<string>("");
    const [recieveMessage, setrecieveMessage] = useState<string[]>([]);
    useEffect(() => {
        const newSocket = io('http://localhost:3001', { query: { userId: 5 } });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log("connected to Server")
        })

        newSocket.on('receiveMessage', (msg) => {
            setrecieveMessage((prevMessages) => [...prevMessages, msg.content]);
        });
        getLocation();
        return () => { newSocket.close() }
    }, [])
    const sendMessage = () => {
        if (socket) {
            socket.emit('newMessage', { senderId: 5, receiverId: 6, content: sendmessage })
            setsendMessage("");
        }
    };

    return (
        <>

            <div className="mt-5 ml-10">
                <h1> messages From Friends </h1>
                {recieveMessage.map((msg, index) => <p key={index} className="w-1/4 p-2 m-2"> {msg} </p>)}
            </div>
            <div className="fixed bottom-0 left-0 w-full bg-blue-200 text-white p-4 text-center">
                <input type="text" value={sendmessage} onChange={(e) => { setsendMessage(e.target.value) }} placeholder="enter text" className="mt-4 ml-5 h-10 w-150 text-black border border-2 rounded" ></input>
                <button onClick={sendMessage} className="bg-blue-500 text-white p-2 m-2 rounded"> Send </button>
            </div>
        </>

    )
}

export default PersonalChat;