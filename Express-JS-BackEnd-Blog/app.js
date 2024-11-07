const express = require("express")
const app = express()
const router = require("./routes/api");

app.use(express.json());
app.use('/api', router);

const CHOSEN_PORT = process.env.CHOSEN_PORT || 5050

app.listen(CHOSEN_PORT, () => 
    console.log("Server running port on " + " " + CHOSEN_PORT + ".......")
)