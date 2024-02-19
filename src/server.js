require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const bookRouter = require("./books/routes");

const Genre = require("./genres/model")
const genreRouter = require("./genres/routes");

const Author = require("./authors/model")
const authorRouter = require("./authors/routes");

const port = process.env.PORT || 5001;

const app = express();

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