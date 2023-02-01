const express = require('express')
const app = express()
const fetch = require('cross-fetch')
const cors = require('cors')

app.use(cors())

app.get("/", async (re, res)=> {
    
    const response = await fetch('https://api.niwa.co.nz/co2/info/baringhead.json') 

    res.json(await response.json())
})

app.listen(4000, ()=> {
    console.log("listening on port 4000")
    
})