import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

dotenv.config()

const app = express();
// const corsOption = {
//     origin: 'http://localhost:5173'
// }

app.use(express.json());

// app.use(cors(corsOption));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });  

app.use('/api/v1/post',   postRoutes);
app.use("/api/v1/dalle", dalleRoutes);


app.get('/', async (req, res) => {
    res.send("Hello world!")
})
app.post("/post", async (req, res) => {
    console.log(req.body)
    res.send("POST REQUEST IS SENT")

})



const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log("app is running on port http://localhost:8080"))
    } catch (error) {
        console.log(error)
    }
}

startServer();