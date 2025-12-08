const express = require("express")
const mongoose = require("mongoose")
const food  = require("./models/Food")
require("dotenv").congig()
app.use(express.json())

const port = process.env.PORT


