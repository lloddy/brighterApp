const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const cors = require('cors');
const { cloudinary } = require('./utils/cloudinary')
const path = require("path");

app.use(cors());

dotenv.config();

const {DATABASE_URL} = process.env;

mongoose.connect(DATABASE_URL);
mongoose.connection
    .on("open", () => console.log("Congrats, you're connected to MongoDB!"))
    .on("close", () => console.log("You are now disconnected from MongoDB"))
    .on("error", (error) => console.log(error));

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.get('/api/images', async (req, res) => {
    const {resources} = await cloudinary.search.expression
    ('folder:dev_setups')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
    const publicIds = resources.map(file => file.public_id);
    res.send(publicIds);
})

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        console.log(fileStr)
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Backend - Something went wrong' });
    }
});

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

