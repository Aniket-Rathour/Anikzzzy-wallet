const express= require("express");
const cors=require("cors");
const app =express();
require("dotenv").config();
const mainRouter=require("./routes/index")

//const db = require("./db");

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);

app.listen(process.env.PORT);