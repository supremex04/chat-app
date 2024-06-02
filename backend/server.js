const express = require("express")
const dotenv = require("dotenv");
const app = express();
dotenv.config();
PORT = process.env.PORT || 5000
app.get("/", (req,res) => {
    // root route http://localhost:5000
    res.send("Hello world.");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));