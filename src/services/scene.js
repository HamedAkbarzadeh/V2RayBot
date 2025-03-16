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

const insertConfigStage = new Scenes.Stage([
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
    configExpiredAtScene
]);

export { insertConfigStage, configNameScene, configDescriptionScene, configTypeScene, configStatusScene, configPriceScene, configLinkScene, configSpeedScene, configUserUsedScene, configRegionScene, configNetVolumeScene, configExpiredAtScene };