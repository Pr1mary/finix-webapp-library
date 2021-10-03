import { Request, Response } from "express";
import AppModel from "../model/Model";

class HomeController {

    async getHome(req: Request, res: Response){

        const appList = await AppModel.find();

        res.render("HomeView", {
            appList: appList
        });
    }

    editApp(req: Request, res: Response){

    }

    async deleteApp(req: Request, res: Response){
        
        const appId = req.params.id;

        await AppModel.deleteOne({
            _id: appId
        });

        res.send("SUCCESS");

    }

}

export = HomeController;