import { Router } from "express";
import HomeController from "../controller/HomeController";
import FormController from "../controller/FormController";

const router = Router();
const homeCtrl = new HomeController();
const formCtrl = new FormController();

router.get("/", homeCtrl.getHome);
router.get("/add", formCtrl.getNewForm);
router.get("/edit/:id", formCtrl.getEditForm);

router.post("/api/add", formCtrl.sendNewForm);
router.patch("/api/edit/:id", formCtrl.sendEditForm);
router.delete("/api/delete/:id", homeCtrl.deleteApp);

export = router;