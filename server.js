const express = require('express')
const app = express()
const PORT = 3000


// data
let data = {
    naem: "Tolu",
    age: 23,
    job: "Developer"
}

// Web endpoints

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>")
})

app.get("/dashboard", (req, res) => {
    res.send("<h1>Dashboard</h1>")
})

// API endpoints
app.get("/api/data", (req, res) => {
    console.log("This is for data")
    res.send(data)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))