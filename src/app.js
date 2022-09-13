
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const compression = require("compression");
const http = require("http");
const { logger } = require("./utils/logs/logger");
const multer = require("multer");
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const mime = require('mime');

const app = express();

app.use(cors({ credentials: true, origin: true }));
//app.options('*', cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cookieParser());

const server = http.createServer(app);

const port = process.env.PORT

app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

server.listen(port, () => console.log(`Server Running on port: ${port}`));
