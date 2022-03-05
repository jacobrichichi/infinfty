const path = require("path")
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(bodyParser.json());
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});