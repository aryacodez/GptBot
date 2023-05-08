const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const morgan = require("morgan");
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(fileUpload());

app.use(morgan("tiny"));

const user = require('./routes/user')
const chat = require('./routes/chat')
const uploadfile = require('./routes/uploadFile')
app.use('/api/v1',user);
app.use('/api/v1',chat);
app.use('/api/v1',uploadfile);

module.exports = app;
