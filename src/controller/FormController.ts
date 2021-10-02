import { Request, Response } from "express";
import { connect } from "mongoose";

class CommandController {

    getForm(req: Request, res: Response){
        res.render("addform");
    }

    sendForm(req: Request, res: Response){

    }

    editForm(req: Request, res: Response){

    }

}

export = CommandController;