const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")

dotenv.config();
app.use(express.json());
const { PORT, DATABASE_URL} = process.env;

mongoose.connect(DATABASE_URL);
mongoose.connection
    .on("open", () => console.log("Congrats, you're connected to MongoDB!"))
    .on("close", () => console.log("You are now disconnected from MongoDB"))
    .on("error", (error) => console.log(error));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
    console.log("backend is running")
})