import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

/* Import routes - Note the .js extension! */
import authRouter from "./routes/auth.routes.js";
import interviewRouter from "./routes/interview.routes.js";

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

// all routes → frontend
app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, "../../Frontend/dist", "index.html"));
});
export default app; // Use export default instead of module.exports