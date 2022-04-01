const express = require('express');
const cors = require("cors");

const app = express()

app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors()); //When we want to be able to accept cors

app.listen(4000, () => console.log('Server running on 4000'))