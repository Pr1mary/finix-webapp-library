require("dotenv").config();

import express from "express";
import path from "path";
import router from "./routes/MainRoutes";
import { connect } from "mongoose";

connect(""+process.env.MONGO_URI+process.env.MONGO_COL)
.catch(e => {
    console.log(e);
});

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./view"));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, "www")));

app.use(router);

app.listen(port, () => {
    console.log("Server started at port: "+port);
});