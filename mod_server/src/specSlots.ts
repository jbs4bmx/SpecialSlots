/**
 * Copyright: jbs4bmx
*/


import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt/models/external/mod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { VFS } from "@spt/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

class SpecSlots implements IMod {
    private pkg;
    public postDBLoad(container: DependencyContainer): void {
		const logger = container.resolve<ILogger>("WinstonLogger");
		const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const pockets = db.templates.items["a8edfb0bce53d103d3f62b9b"]
        this.pkg = require("../package.json")
        const vfs = container.resolve<VFS>("VFS");
        const { AllItems, LimitedItems, CustomIDsList } = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config.jsonc")));
        
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
        } else {
            logger.info(`SpecialSlots config looks correct. Continuing to load mod...`);
        }

        if ( AllItems === true ) {
            // Default Pockets
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
            if (pockets._props.Slots[0] !== undefined) {
                pockets._props.Slots[0]._props.filters[0].Filter.push(itemID)
            }
            if (pockets._props.Slots[1] !== undefined) {
                pockets._props.Slots[1]._props.filters[0].Filter.push(itemID)
            }
            if (pockets._props.Slots[2] !== undefined) {
                pockets._props.Slots[2]._props.filters[0].Filter.push(itemID)
            }
            if (pockets._props.Slots[3] !== undefined) {
                pockets._props.Slots[3]._props.filters[0].Filter.push(itemID)
            }
            if (pockets._props.Slots[4] !== undefined) {
                pockets._props.Slots[4]._props.filters[0].Filter.push(itemID)
            }
            if (pockets._props.Slots[5] !== undefined) {
                pockets._props.Slots[5]._props.filters[0].Filter.push(itemID)
            }

        }
        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}: Cached Successfully`);

    }

}
/**
 * Erabior was here
 */
module.exports = { mod: new SpecSlots() }
