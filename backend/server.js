import express from "express";
import dotenv from "dotenv"; 
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000


// The get method is used to respond to HTTP GET requests, which are 
// typically used to request data from the server.
// app.get("/", (req,res) => {
//     //  When you access http://localhost:5000/ in your browser, you are making 
//     // a GET request to the root path. ie "/"
//     res.send("Hello world.");
//     //  The res.send method sends the specified string ("Hello world.") 
//     // as the response body. When a client (like a web browser) makes a GET request 
//     // to the root URL, it will receive this string in response and display it.

// });
app.use(express.json());  // to parse the incoming requests with JSON payloads (from req.body)
console.log("works");
app.use("/api/auth", authRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});