import { Scenes } from "telegraf";
import { cancelMiddleware } from "../../middlewares/cancel.js";

export const cateNameScene = new Scenes.BaseScene("cateNameScene");
export const cateDescriptionScene = new Scenes.BaseScene("cateDescriptionScene");
export const cateStatusScene = new Scenes.BaseScene("cateStatusScene");

export const categoryStage = new Scenes.Stage([
    cateNameScene,
    cateDescriptionScene,
    cateStatusScene
]);

categoryStage.use(cancelMiddleware);
