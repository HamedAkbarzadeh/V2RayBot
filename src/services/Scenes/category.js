import { Scenes } from "telegraf";

const nameScene = new Scenes.BaseScene("nameScene");
const descriptionScene = new Scenes.BaseScene("descriptionScene");

const categoryStage = new Scenes.Stage([
    nameScene,
    descriptionScene
]);

export {
    categoryStage,
    nameScene,
    descriptionScene
}