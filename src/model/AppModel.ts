import { Schema, model } from "mongoose"

const appSchema = new Schema({
    app_name: {
        type: String,
        required: true
    },
    app_url: {
        type: String,
        required: true
    },
    created_at: Date,
    updated_at: Date
});

const appModel = model(""+process.env.MONGO_DOC, appSchema);

export = appModel;