require("dotenv").config();
const express = require("express");
const cors = require("cors");

const User = require("./users/model");
const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const app = express();

//cors for frontend
app.use(cors());

app.use(express.json());

app.use(userRouter);


const syncTables = () => {
    User.sync();
};

app.get("/health", (req, res) =>{
    res.status(200).json({ message: "API is healthy" });
})

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
});