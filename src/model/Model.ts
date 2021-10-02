import { Schema, model } from "mongoose"

class AppModel {

    private appSchema = new Schema({
        app_name: {
            type: String,
            required: true
        },
        app_url: {
            type: String,
            required: true
        },
        created_at: Date,
        edited_at: Date
    });

    public appModel = model("appModel", this.appSchema);

}

export = AppModel;