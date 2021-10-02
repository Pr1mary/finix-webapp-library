import express from "express";
import path from "path";
import router from "./routes/main_routes";
import { connect } from "mongoose";

connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./view"));

app.use(express.static(path.join(__dirname, "www")));

app.use(router);

app.listen(port, () => {
    console.log("Server started at port: "+port);
});