const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")
const app = express()


const __dirname = path.resolve();

// serve dist folder

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// all routes → frontend
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Frontend/dist", "index.html"));
});


module.exports = app