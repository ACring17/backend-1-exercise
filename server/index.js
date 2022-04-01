const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); //When we want to be able to accept cors

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(4000, () => console.log('Server running on 4000'));