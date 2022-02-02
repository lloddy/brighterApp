const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")

dotenv.config();
app.use(express.json());
const { PORT, DATABASE_URL} = process.env;

mongoose.connect(DATABASE_URL);
mongoose.connection
    .on("open", () => console.log("Congrats, you're connected to MongoDB!"))
    .on("close", () => console.log("You are now disconnected from MongoDB"))
    .on("error", (error) => console.log(error));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb) => {
        cb(null,req.body.name);
    },
});

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
    console.log("backend is running")
})