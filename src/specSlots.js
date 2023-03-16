"use strict";
/**
 * Copyright: jbs4bmx
*/
Object.defineProperty(exports, "__esModule", { value: true });
class SpecSlots {
    postDBLoad(container) {
        const logger = container.resolve("WinstonLogger");
        const db = container.resolve("DatabaseServer").getTables();
        const pockets = db.templates.items["627a4e6b255f7527fb05a0f6"];
        this.pkg = require("../package.json");
        pockets._props.Slots[0]._props.filters[0].Filter.push("54009119af1c881c07000029");
        pockets._props.Slots[1]._props.filters[0].Filter.push("54009119af1c881c07000029");
        pockets._props.Slots[2]._props.filters[0].Filter.push("54009119af1c881c07000029");
        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}: Cached Successfully`);
    }
}
module.exports = { mod: new SpecSlots() };
