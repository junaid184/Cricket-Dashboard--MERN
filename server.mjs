import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
const __dirname = path.resolve();
const PORT = process.env.PORT || 5001
const app = express()
mongoose.connect('mongodb+srv://junaid:123@cluster0.agtya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Cricket = mongoose.model("Cricket", {
    tournament: String,
    date: String,
    inning: String,
    teamOne: String,
    teamTwo: String,
    scoreOne: Number,
    wicketsOne: Number,
    scoreTwo: Number,
    wicketsTwo: Number,
    oversOne: String,
    overTwo: String,
    batsmanOne: String,
    batsmanTwo: String,
    bowlerOne: String,
    bowlerTwo: String,
    toss: String,
    headline: String,
    created: { type: Date, default: Date.now },
})
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5001"],
    credentials: true
}))
app.use('/', express.static(path.join(__dirname, 'web/build')))
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})
app.post("/api/v1/cricket", (req, res) => {
    const newCricket = new Cricket({
        tournament: req.body.tournament,    
        date: req.body.date,
        inning: req.body.inning,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        wicketsOne: req.body.wicketsOne,
        scoreTwo: req.body.scoreTwo,
        wicketsTwo: req.body.wicketsTwo,
        oversOne: req.body.oversOne,
        overTwo: req.body.overTwo,
        batsmanOne: req.body.batsmanOne,
        batsmanTwo: req.body.batsmanTwo,
        bowlerOne: req.body.bowlerOne,
        bowlerTwo: req.body.bowlerTwo,
        toss: req.body.toss,
        headline: req.body.headline
    });
    newCricket.save().then(() => {
        console.log("Dashboard created");

        io.emit("Cricket", {
            tournament: req.body.tournament,
            date: req.body.date,
        inning: req.body.inning,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        wicketsOne: req.body.wicketsOne,
        scoreTwo: req.body.scoreTwo,
        wicketsTwo: req.body.wicketsTwo,
        oversOne: req.body.oversOne,
        overTwo: req.body.overTwo,
        batsmanOne: req.body.batsmanOne,
        batsmanTwo: req.body.batsmanTwo,
        bowlerOne: req.body.bowlerOne,
        bowlerTwo: req.body.bowlerTwo,
        toss: req.body.toss,
        headline: req.body.headline
        });

        res.send("Post created");
    });
});



app.get("/api/v1/posts", (req, res) => {
    Cricket.find({})
    .sort({ created: "desc" })
    .limit(1)
    .exc((err, data)=>{
        res.send(data);
    })

});

app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
    // res.redirect("/")
})
const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    // to emit data to a certain client
    socket.emit("topic 1", "some data")

    // collecting connected users in a array
    // connectedUsers.push(socket)

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});
server.listen(PORT, function () {
    console.log("server is running on", PORT);
})