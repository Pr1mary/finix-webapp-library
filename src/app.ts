require("dotenv").config();

import express from "express";
import path from "path";
import router from "./routes/MainRoutes";
import { connect } from "mongoose";

connect(""+process.env.MONGO_URI, {
    dbName: process.env.MONGO_COL,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
})
.then(cb => {
    console.log("Database connected!");
})
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