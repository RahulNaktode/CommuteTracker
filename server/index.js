import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db.js";
import { postLogin, postSignUp } from "./controllers/auth.js";
import { getHealth } from "./controllers/health.js";
// Middlewares
import { checkJWT } from "./middlewares/jwt.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8020;

app.get('/', getHealth)
app.post('/signup', postSignUp)
app.post('/login', checkJWT, postLogin)

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectDB()
})