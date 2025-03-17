import { Scenes } from "telegraf";

//insert config scenes
const configNameScene = new Scenes.BaseScene("configNameScene");
const configDescriptionScene = new Scenes.BaseScene("configDescriptionScene");
const configTypeScene = new Scenes.BaseScene("configTypeScene");
const configStatusScene = new Scenes.BaseScene("configStatusScene");
const configPriceScene = new Scenes.BaseScene("configPriceScene");
const configLinkScene = new Scenes.BaseScene("configLinkScene");
const configSpeedScene = new Scenes.BaseScene("configSpeedScene");
const configUserUsedScene = new Scenes.BaseScene("configUserUsedScene");
const configRegionScene = new Scenes.BaseScene("configRegionScene");
const configNetVolumeScene = new Scenes.BaseScene("configNetVolumeScene");
const configExpiredAtScene = new Scenes.BaseScene("configExpiredAtScene");

//show config scenes
const selectConfigScene = new Scenes.BaseScene("selectConfigScene");
//delete config scenes
const deleteConfigScene = new Scenes.BaseScene("deleteConfigScene");
const confirmDeleteConfigScene = new Scenes.BaseScene("confirmDeleteConfigScene");
//edit config scenes
const editConfigScene = new Scenes.BaseScene("editConfigScene");


const configStage = new Scenes.Stage([
    configNameScene,
    configDescriptionScene,
    configTypeScene,
    configStatusScene,
    configPriceScene,
    configLinkScene,
    configSpeedScene,
    configUserUsedScene,
    configRegionScene,
    configNetVolumeScene,
    configExpiredAtScene,

    selectConfigScene,
    deleteConfigScene,
    confirmDeleteConfigScene,
    editConfigScene,

]);

export {
    configStage,
    selectConfigScene,
    editConfigScene,
    deleteConfigScene,
    configNameScene,
    configDescriptionScene,
    configTypeScene,
    configStatusScene,
    configPriceScene,
    configLinkScene,
    configSpeedScene,
    configUserUsedScene,
    configRegionScene,
    configNetVolumeScene,
    configExpiredAtScene,
    confirmDeleteConfigScene
};