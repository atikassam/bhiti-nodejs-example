import * as http from "http";
import * as express from "express";

const app = express();

app.use(express.static(__dirname+'/view'))

app.listen(8080);