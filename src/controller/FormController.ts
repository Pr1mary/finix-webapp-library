import { Request, Response } from "express";
import AppModel from "../model/Model";

class FormController {

    getForm(req: Request, res: Response){
        res.render("FormView");
    }

    async sendForm(req: Request, res: Response){
        
        const appData = new AppModel({
            app_name: req.body.AppNameInput,
            app_url: req.body.AppUrlInput,
            created_at: new Date(),
            updated_at: new Date()
        });

        await appData.save();

        res.redirect("/");
    }

    async editForm(req: Request, res: Response){

        const appId = req.params.id;

        

        res.render("FormView", {

        });

    }

}

export = FormController;