import { Request, Response } from "express";

class HomeController {

    getHome(req: Request, res: Response){
        res.render("home");
    }

    addApp(req: Request, res: Response){
        
    }

    editApp(req: Request, res: Response){

    }

    deleteApp(req: Request, res: Response){
        
    }

}

export = HomeController;