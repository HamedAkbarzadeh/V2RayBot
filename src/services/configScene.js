// import { Scenes } from "telegraf";
// import { cancelMiddleware } from "../middlewares/cancel.js";
//
// //insert config scenes
// export const configNameScene = new Scenes.BaseScene("configNameScene");
// export const configDescriptionScene = new Scenes.BaseScene("configDescriptionScene");
// export const configTypeScene = new Scenes.BaseScene("configTypeScene");
// export const configStatusScene = new Scenes.BaseScene("configStatusScene");
// export const configPriceScene = new Scenes.BaseScene("configPriceScene");
// export const configLinkScene = new Scenes.BaseScene("configLinkScene");
// export const configSpeedScene = new Scenes.BaseScene("configSpeedScene");
// export const configUserUsedScene = new Scenes.BaseScene("configUserUsedScene");
// export const configRegionScene = new Scenes.BaseScene("configRegionScene");
// export const configNetVolumeScene = new Scenes.BaseScene("configNetVolumeScene");
// export const configExpiredAtScene = new Scenes.BaseScene("configExpiredAtScene");
//
// //show config scenes
// export const selectConfigScene = new Scenes.BaseScene("selectConfigScene");
// //delete config scenes
// export const deleteConfigScene = new Scenes.BaseScene("deleteConfigScene");
// export const confirmDeleteConfigScene = new Scenes.BaseScene("confirmDeleteConfigScene");
// //edit config scenes
// export const editConfigScene = new Scenes.BaseScene("editConfigScene");
//
// export const configStage = new Scenes.Stage([
//     configNameScene,
//     configDescriptionScene,
//     configTypeScene,
//     configStatusScene,
//     configPriceScene,
//     configLinkScene,
//     configSpeedScene,
//     configUserUsedScene,
//     configRegionScene,
//     configNetVolumeScene,
//     configExpiredAtScene,
//
//     selectConfigScene,
//     deleteConfigScene,
//     confirmDeleteConfigScene,
//     editConfigScene,
//
// ]);
// configStage.use(cancelMiddleware);
//
