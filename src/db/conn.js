const mongoose = require("mongoose");
//creating db
mongoose.connect("mongodb://localhost:27017/rahuldynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection success");
}).catch((error) => {
    console.log(error);
})