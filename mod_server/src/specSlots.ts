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
        const defaultPockets = db.templates.items["627a4e6b255f7527fb05a0f6"];
        const altPockets = db.templates.items["65e080be269cbd5c5005e529"];
        this.pkg = require("../package.json")
        const vfs = container.resolve<VFS>("VFS");
        const { AllItems, LimitedItems, CustomIDsList } = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config.jsonc")));

        if ( typeof AllItems !== 'boolean' || typeof LimitedItems.Meds !== 'boolean' || typeof LimitedItems.Firearms !== 'boolean' || typeof LimitedItems.FoodAndDrink !== 'boolean' || typeof LimitedItems.Throwables !== 'boolean' || typeof LimitedItems.BarterItems !== 'boolean' || typeof LimitedItems.Maps !== 'boolean' || typeof LimitedItems.SecureContainers !== 'boolean' || typeof LimitedItems.Containers !== 'boolean' || typeof LimitedItems.Rigs !== 'boolean' || typeof LimitedItems.Armors !== 'boolean' || typeof LimitedItems.RepairKits !== 'boolean' ) {
            logger.error(`SpecialSlots: One or more Compatability selection values are not a boolean value of true or false.`)
            logger.error(`Please fix your configuration file and restart your server.`)
            return
        } else {
            logger.info(`SpecialSlots config looks correct. Continuing to load mod...`);
        }

        if ( AllItems === true ) {
            // Default Pockets
            defaultPockets._props.Slots[0]._props.filters[0].Filter.push("54009119af1c881c07000029");
            defaultPockets._props.Slots[1]._props.filters[0].Filter.push("54009119af1c881c07000029");
            defaultPockets._props.Slots[2]._props.filters[0].Filter.push("54009119af1c881c07000029");

            // Alt Pockets
            altPockets._props.Slots[0]._props.filters[0].Filter.push("54009119af1c881c07000029");
            altPockets._props.Slots[1]._props.filters[0].Filter.push("54009119af1c881c07000029");
            altPockets._props.Slots[2]._props.filters[0].Filter.push("54009119af1c881c07000029");

            // Compatibility for SVM Custom Pockets. ("a8edfb0bce53d103d3f62b9b")
            if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                    db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("54009119af1c881c07000029");
                }
                if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                    db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("54009119af1c881c07000029");
                }
                if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                    db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("54009119af1c881c07000029");
                }
            }

        } else {
            if (LimitedItems.Meds === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("543be5664bdc2dd4348b4569","5448f39d4bdc2d0a728b4568","5448f3a14bdc2d27728b4569","5448f3a64bdc2d60728b456a","5448f3ac4bdc2dce718b4569","57864c8c245977548867e7f1");
                    }
                }
            }

            if (LimitedItems.Firearms === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("5447b5cf4bdc2d65278b4567","5447b5e04bdc2d62278b4567","5447b5f14bdc2d61278b4567","5447b5fc4bdc2d87278b4567","5447b6094bdc2dc3278b4567","5447b6194bdc2d67278b4567","5447b6254bdc2dc3278b4568","5447bed64bdc2d97278b4568","5447bedf4bdc2d87278b4568","5447bee84bdc2dc3278b4569","617f1ef5e8b54b0998387733");
                    }
                }
            }

            if (LimitedItems.FoodAndDrink === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("543be6674bdc2df1348b4569","5448e8d04bdc2ddf718b4569","5448e8d64bdc2dce718b4568");
                    }
                }
            }

            if (LimitedItems.Throwables === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("543be6564bdc2df4348b4568");
                    }
                }
            }

            if (LimitedItems.BarterItems === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("5448eb774bdc2d0a728b4567");
                    }
                }
            }

            if (LimitedItems.Maps === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("567849dd4bdc2d150f8b456e");
                    }
                }
            }

            if (LimitedItems.SecureContainers === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("59db794186f77448bc595262","5c093ca986f7740a1867ab12","5857a8b324597729ab0a0e7d","5c0a794586f77461c458f892","665ee77ccf2d642e98220bca","5857a8bc2459772bad15db29","544a11ac4bdc2d470e8b456a","664a55d84a90fc2c8a6305c9","64f6f4c5911bcdfe8b03b0dc");
                    }
                }
            }

            if (LimitedItems.Containers === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("5795f317245977243854e041","5448e53e4bdc2d60728b4567");
                    }
                }
            }

            if (LimitedItems.Rigs === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("5448e5284bdc2dcb718b4567");
                    }
                }
            }

            if (LimitedItems.Armors === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("5448e54d4bdc2dcc718b4568","5448e54d4bdc2dcc718b4568","57bef4c42459772e8d35a53b");
                    }
                }
            }

            if (LimitedItems.RepairKits === true) {
                defaultPockets._props.Slots[0]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                defaultPockets._props.Slots[1]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                defaultPockets._props.Slots[2]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                altPockets._props.Slots[0]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                altPockets._props.Slots[1]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                altPockets._props.Slots[2]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                // Compatibility for SVM Custom Pockets.
                if ( typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined" ) {
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                    }
                    if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
                        db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push("616eb7aea207f41933308f46");
                    }
                }
            }//Added block for custom IDs
		if (LimitedItems.CustomItems === true) {
			for (const CustID of CustomIDsList) {
				// Default Pockets
				defaultPockets._props.Slots[0]._props.filters[0].Filter.push(CustID);
				defaultPockets._props.Slots[1]._props.filters[0].Filter.push(CustID);
				defaultPockets._props.Slots[2]._props.filters[0].Filter.push(CustID);
	
				// Alt Pockets
				altPockets._props.Slots[0]._props.filters[0].Filter.push(CustID);
				altPockets._props.Slots[1]._props.filters[0].Filter.push(CustID);
				altPockets._props.Slots[2]._props.filters[0].Filter.push(CustID);
	
				// Compatibility for SVM Custom Pockets
				if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"] !== "undefined") {
					if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0] !== "undefined") {
						db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[0]._props.filters[0].Filter.push(CustID);
					}
					if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1] !== "undefined") {
						db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[1]._props.filters[0].Filter.push(CustID);
					}
					if (typeof db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2] !== "undefined") {
						db.templates.items["a8edfb0bce53d103d3f62b9b"]._props.Slots[2]._props.filters[0].Filter.push(CustID);
					}
				}
			}
		}	
	}
        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}: Cached Successfully`);
    }

}

module.exports = { mod: new SpecSlots() }
