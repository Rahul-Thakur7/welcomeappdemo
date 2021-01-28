const express = require('express');
require("./db/conn");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;


const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath))

//routing

app.get("/", (req, res) => {
    res.send("WELCOME");
})

//server
app.listen(port, () => {
        console.log('Server running on ${port}');
    })
    // http://localhost:5000/

// heroku cofig:set NOM_CONFIG_PRODUCTION=false