import { Router } from "express";
import HomeController from "../controller/HomeController";
import FormController from "../controller/FormController";

const router = Router();
const homeCtrl = new HomeController();
const formCtrl = new FormController();

router.get("/", homeCtrl.getHome);
router.get("/add", formCtrl.getForm);

router.post("/add", formCtrl.sendForm);

router.patch("/edit/:id", formCtrl.editForm);

router.delete("/delete/:id", homeCtrl.deleteApp);

export = router;