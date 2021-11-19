import axios from "axios";
import { useState, useEffect } from "react";
import io from 'socket.io-client';
const dev = "http://localhost:5001"
const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function Home(){
    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`${baseUrl}/api/v1/posts`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((e)=>{
            console.log(e.message)
        })
    }, [])

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
        setData(obj)
    });

    return () => {
        socket.close();
    };
}, []);
return(
    <div>
    <h2>
       {data?.tournament} 
    </h2>
    <h3> {data?.inning} </h3>
    <h3>Date: {data?.date}</h3>
    <h3>Headline: {data?.headline}</h3>
    <h3>Toss: {data?.toss}</h3>
    <ul>
        <h3>{data?.teamOne}</h3>
        <li>Score: {data?.scoreOne}/{data?.wicketsOne}</li>
        <li>Over: {data?.oversOne}</li>
        <li>Batsman One: {data?.batsmanOne}</li>
        <li>Batsman Two: {data?.batsmanTwo}</li>
    </ul>
    <ul>
        <h3>{data?.teamTwo}</h3>
        <li>Score: {data?.scoreTwo}/{data?.wicketsTwo}</li>
        <li>Over: {data?.overTwo}</li>
        <li>Bowler One: {data?.bowlerOne}</li>
        <li>Bowler Two: {data?.bowlerTwo}</li>
    </ul>
    </div>
)
}
export default Home;