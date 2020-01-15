const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

const app = express()

mongoose.connect("mongodb+srv://lucasfelinto:lucasfelinto@cluster0-lcntc.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(8000)
