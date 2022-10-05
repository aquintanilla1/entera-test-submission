const express = require('express');
const cors = require('cors');
const PORT = 3001;

const app = express();
app.use(express());
app.use(cors());

const homeRouter = require("./controllers/HomeController");

app.get("/", (req, res) => {
    res.json({message: "This is the server."});
});

app.use("/index", homeRouter);

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

module.exports = app;