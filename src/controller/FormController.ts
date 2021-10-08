import { Request, Response } from "express";
import AppModel from "../model/AppModel";

class FormController {

    getNewForm(req: Request, res: Response){
        res.render("FormView", {
            htmlFormat: {
                targetUrl: "/api/add",
                methodType: "POST",
                formTitle: "Add new webapp"
            },
            data: []
        });
    }

    async sendNewForm(req: Request, res: Response){
        const appData = new AppModel({
            app_name: req.body.AppNameInput,
            app_url: req.body.AppUrlInput,
            created_at: new Date(),
            updated_at: new Date()
        });
        await appData.save();
        res.send({
            nextUrl: "/"
        });
    }

    async getEditForm(req: Request, res: Response){
        const appId = req.params.id;
        const appData = await AppModel.findById(appId).exec();
        res.render("FormView", {
            htmlFormat: {
                targetUrl: "/api/edit/"+appId,
                methodType: "PATCH",
                formTitle: "Edit existing webapp"
            },
            data: appData
        });
    }

    async sendEditForm(req: Request, res: Response){
        const appId = req.params.id;
        await AppModel.findByIdAndUpdate(appId, {
            app_name: req.body.AppNameInput,
            app_url: req.body.AppUrlInput,
            updated_at: new Date()
        });
        res.send({
            nextUrl: "/"
        });
    }

}

export = FormController;