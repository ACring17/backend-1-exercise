const express = require('express')

const app = express()

app.use(express.json()) // When we want to be able to accept JSON.

app.listen(4000, () => console.log('Server running on 4000'))