import { Request, Response } from "express";
import AppModel from "../model/Model";

class HomeController {

    async getHome(req: Request, res: Response){
        const appList = await AppModel.find();
        res.render("HomeView", {
            htmlFormat: {
                targetUrl: "/api/delete/",
            },
            appList: appList
        });
    }

    async deleteApp(req: Request, res: Response){
        const appId: String = req.params.id;
        let dataResult;
        await AppModel.deleteOne({
            _id: appId
        }).exec().then(result => {
            dataResult = result;
        }).catch(e => {
            dataResult = e;
        });
        res.send({
            nextUrl: "/"
        });
    }

}

export = HomeController;