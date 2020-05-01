const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.AZURE_URI;
//conect mongo
mongoose
  .connect(uri,{useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo CosmosDB Connected"))
  .catch(err => console.log("error connecting" + err));

  
app.get("/", (req, res) => {
  res.send("hello node");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



