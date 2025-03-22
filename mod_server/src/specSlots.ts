/* eslint-disable no-var */
/**
 * Copyright: jbs4bmx
*/

import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { container, DependencyContainer } from "tsyringe";
import { ICoreConfig } from "@spt/models/spt/config/ICoreConfig";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { IMod } from "@spt/models/external/mod";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { FileSystemSync } from "@spt/utils/FileSystemSync";
import { satisfies } from "semver";
import { jsonc } from "jsonc";
import path from "path";

//const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();
//const dbServer = container.resolve<DatabaseServer>("DatabaseServer");
//const tables: IDatabaseTables = dbServer.getTables();
const logger = container.resolve<ILogger>("WinstonLogger");
const configServer = container.resolve<ConfigServer>("ConfigServer");
const sptConfig = configServer.getConfig<ICoreConfig>(ConfigTypes.CORE);
const fileSystem = container.resolve<FileSystemSync>("FileSystemSync");

class SpecSlots implements IPreSptLoadMod, IMod
{
    private privatePath = require('path');
    public modName: string = this.privatePath.basename(this.privatePath.dirname(__dirname.split('/').pop()));

    public preSptLoad(container: DependencyContainer): void
    {
        if (!this.validSptVersion(container)) {
            logger.error("This version of SpecialSlots was not made for your version of SPT. Disabling");
            return;
        }
    }

    public postDBLoad(container: DependencyContainer): void
    {
        const dbServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = dbServer.getTables();
        const defaultPockets = tables.templates.items["627a4e6b255f7527fb05a0f6"];
        const altPockets = tables.templates.items["65e080be269cbd5c5005e529"];
        const svmPockets = tables.templates.items["a8edfb0bce53d103d3f62b9b"];
        const { AllItems, LimitedItems, CustomIDsList } = jsonc.parse(fileSystem.read(path.resolve(__dirname, "../config.jsonc")));

        const medsIDs = ["543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1"]
        const firearmsIDs = ["5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733"]
        const foodAndDrinkIDs = ["543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568"]
        const throwablesIDs = ["543be6564bdc2df4348b4568"]
        const barterItemsIDs = ["5448eb774bdc2d0a728b4567"]
        const mapsIDs = ["567849dd4bdc2d150f8b456e"]
        const secureContainersIDs = ["59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc"]
        const containersIDs = ["5795f317245977243854e041","5448e53e4bdc2d60728b4567"]
        const rigsIDs = ["5448e5284bdc2dcb718b4567"]
        const armorsIDs = ["5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b"]
        const repairKitIDs = ["616eb7aea207f41933308f46"]
        let itemFilterList: string[] = []

        if ( typeof AllItems !== 'boolean' || typeof LimitedItems.Meds !== 'boolean' || typeof LimitedItems.Firearms !== 'boolean' || typeof LimitedItems.FoodAndDrink !== 'boolean' || typeof LimitedItems.Throwables !== 'boolean' || typeof LimitedItems.BarterItems !== 'boolean' || typeof LimitedItems.Maps !== 'boolean' || typeof LimitedItems.SecureContainers !== 'boolean' || typeof LimitedItems.Containers !== 'boolean' || typeof LimitedItems.Rigs !== 'boolean' || typeof LimitedItems.Armors !== 'boolean' || typeof LimitedItems.RepairKits !== 'boolean' ) {
            logger.error(`SpecialSlots: One or more Compatability selection values are not a boolean value of true or false.`)
            logger.error(`Please fix your configuration file and restart your server.`)
            return
        }

        if ( AllItems === true ) {
            itemFilterList.push("54009119af1c881c07000029")
        } else {
            if (LimitedItems.Meds === true) {
                for (const med of medsIDs){
                    itemFilterList.push(med)
                }
            }
            if (LimitedItems.Firearms === true) {
                for (const firearm of firearmsIDs){
                    itemFilterList.push(firearm)
                }
            }
            if (LimitedItems.FoodAndDrink === true) {
                for (const foodStuffs of foodAndDrinkIDs){
                    itemFilterList.push(foodStuffs)
                }
            }
            if (LimitedItems.Throwables === true) {
                for (const throwable of throwablesIDs){
                    itemFilterList.push(throwable)
                }
            }
            if (LimitedItems.BarterItems === true) {
                for (const barterItem of barterItemsIDs){
                    itemFilterList.push(barterItem)
                }
            }
            if (LimitedItems.Maps === true) {
                for (const map of mapsIDs){
                    itemFilterList.push(map)
                }
            }
            if (LimitedItems.SecureContainers === true) {
                for (const secureContainer of secureContainersIDs){
                    itemFilterList.push(secureContainer)
                }
            }
            if (LimitedItems.Containers === true) {
                for (const container of containersIDs){
                    itemFilterList.push(container)
                }
            }
            if (LimitedItems.Rigs === true) {
                for (const rig of rigsIDs){
                    itemFilterList.push(rig)
                }
            }
            if (LimitedItems.Armors === true) {
                for (const armor of armorsIDs){
                    itemFilterList.push(armor)
                }
            }
            if (LimitedItems.RepairKits === true) {
                for (const repairKit of repairKitIDs){
                    itemFilterList.push(repairKit)
                }
            }
			if (LimitedItems.CustomItems === true) {
                for (const customItem of CustomIDsList){
                    itemFilterList.push(customItem)
                }
            }
        }

        for (const itemID of itemFilterList) {
            // Default Pockets
            if (defaultPockets._props.Slots[0] !== undefined) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push(itemID);
            }
            if (defaultPockets._props.Slots[1] !== undefined) {
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push(itemID);
            }
            if (defaultPockets._props.Slots[2] !== undefined) {
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push(itemID);
            }
            if (defaultPockets._props.Slots[3] !== undefined) {
                defaultPockets._props.Slots[3]._props.filters[0].Filter.push(itemID);
            }
            if (defaultPockets._props.Slots[4] !== undefined) {
                defaultPockets._props.Slots[4]._props.filters[0].Filter.push(itemID);
            }
            if (defaultPockets._props.Slots[5] !== undefined) {
                defaultPockets._props.Slots[5]._props.filters[0].Filter.push(itemID);
            }
            // Alt Pockets
            if (altPockets._props.Slots[0] !== undefined) {
                altPockets._props.Slots[0]._props.filters[0].Filter.push(itemID);
            }
            if (altPockets._props.Slots[1] !== undefined) {
                altPockets._props.Slots[1]._props.filters[0].Filter.push(itemID);
            }
            if (altPockets._props.Slots[2] !== undefined) {
                altPockets._props.Slots[2]._props.filters[0].Filter.push(itemID);
            }
            if (altPockets._props.Slots[3] !== undefined) {
                altPockets._props.Slots[3]._props.filters[0].Filter.push(itemID);
            }
            if (altPockets._props.Slots[4] !== undefined) {
                altPockets._props.Slots[4]._props.filters[0].Filter.push(itemID);
            }
            if (altPockets._props.Slots[5] !== undefined) {
                altPockets._props.Slots[5]._props.filters[0].Filter.push(itemID);
            }
            // SVM Pockets
            if (typeof svmPockets !== "undefined") {
                if (svmPockets._props.Slots[0] !== undefined) {
                    svmPockets._props.Slots[0]._props.filters[0].Filter.push(itemID)
                }
                if (svmPockets._props.Slots[1] !== undefined) {
                    svmPockets._props.Slots[1]._props.filters[0].Filter.push(itemID)
                }
                if (svmPockets._props.Slots[2] !== undefined) {
                    svmPockets._props.Slots[2]._props.filters[0].Filter.push(itemID)
                }
                if (svmPockets._props.Slots[3] !== undefined) {
                    svmPockets._props.Slots[3]._props.filters[0].Filter.push(itemID)
                }
                if (svmPockets._props.Slots[4] !== undefined) {
                    svmPockets._props.Slots[4]._props.filters[0].Filter.push(itemID)
                }
                if (svmPockets._props.Slots[5] !== undefined) {
                    svmPockets._props.Slots[5]._props.filters[0].Filter.push(itemID)
                }
            }
        }
    }

    private validSptVersion(container: DependencyContainer): boolean
    {
        const sptVersion = globalThis.G_SPTVERSION || sptConfig.sptVersion;
        const packageJsonPath: string = path.join(__dirname, "../package.json");
        const modSptVersion = JSON.parse(fileSystem.read(packageJsonPath)).sptVersion;
        return satisfies(sptVersion, modSptVersion);
    }
}

/**
 * Erabior was here.
 * Can confirm. This statement is true. - jbs4bmx
 */
module.exports = { mod: new SpecSlots() }