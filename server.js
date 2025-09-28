const express = require('express')
const app = express()
const PORT = 8383

app.get("/", (req, res) => {
    console.log("My server is running", req.method)
    res.sendStatus(200)
})
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) 