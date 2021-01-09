const express = require('express')
const fs = require("fs")
const morgan = require("morgan")

const PORT = 3000

const app = express()

app.use(morgan("common"))

app.get('/', (req, res) => {
    console.log("ROOT ROUTE");
    res.send('Hello World')
})

app.get('/now', (req, res) => {
    console.log("NOW ROUTE");
    res.json({
        now: new Date()
    })
})

app.get('/readiness', (req, res) => {
    console.log("READINESS ROUTE");
    res.sendStatus(200)
})

app.get('/liveness', (req, res) => {
    console.log("LIVENESS ROUTE");
    const data = fs.readFileSync("archivo", { encoding: "utf-8" });
    console.log(`DATA IN FILE ${data}`);
    if (data.trim() === "OK") res.sendStatus(200)
    else res.sendStatus(500)
})

app.listen(PORT, () => {
    const date = new Date()
    console.log(`${date} Listening in port ${PORT}`)
})