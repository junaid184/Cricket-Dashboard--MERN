import { useState, useEffect } from "react";
import io from 'socket.io-client';
const dev = "http://localhost:5001"
const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function Home(){
    const [data, setData] = useState([])
  useEffect(() => {
    const socket = io(baseUrl); // to connect with locally running Socker.io server

    socket.on('connect', function () {
        console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
        console.log("disconnected from server: ", message);
    });
    socket.on('Cricket', (obj)=> {
        console.log(obj);
        setData((perv)=>[obj, ...perv])
        console.log(data);
        
    });

    return () => {
        socket.close();
    };
}, []);
return(
    <div>
    <h2>
       {data[0]?.tournament} 
    </h2>
    <h3> {data[0]?.inning} </h3>
    <h3>Date: {data[0]?.date}</h3>
    <h3>Headline: {data[0]?.headline}</h3>
    <h3>Toss: {data[0]?.toss}</h3>
    <ul>
        <h3>{data[0]?.teamOne}</h3>
        <li>Score: {data[0]?.scoreOne}/{data[0]?.wicketsOne}</li>
        <li>Over: {data[0]?.oversOne}</li>
        <li>Batsman One: {data[0]?.batsmanOne}</li>
        <li>Batsman Two: {data[0]?.batsmanTwo}</li>
    </ul>
    <ul>
        <h3>{data[0]?.teamTwo}</h3>
        <li>Score: {data[0]?.scoreTwo}/{data[0]?.wicketsTwo}</li>
        <li>Over: {data[0]?.overTwo}</li>
        <li>Bowler One: {data[0]?.bowlerOne}</li>
        <li>Bowler Two: {data[0]?.bowlerTwo}</li>
    </ul>
    </div>
)
}
export default Home;