/**
 * Copyright: jbs4bmx
*/

import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class SpecSlots implements IMod {
    private pkg;
    public postDBLoad(container: DependencyContainer): void {
		const logger = container.resolve<ILogger>("WinstonLogger");
		const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const pockets = db.templates.items["627a4e6b255f7527fb05a0f6"];
        this.pkg = require("../package.json")

        // Default Pockets
        pockets._props.Slots[0]._props.filters[0].Filter.push("54009119af1c881c07000029");
        pockets._props.Slots[1]._props.filters[0].Filter.push("54009119af1c881c07000029");
        pockets._props.Slots[2]._props.filters[0].Filter.push("54009119af1c881c07000029");

        // Compatibility for SVM Custom Pockets.
        if ( typeof db.templates.items["CustomPocket"] !== "undefined" ) {
            if (typeof db.templates.items["CustomPocket"]._props.Slots[0] !== "undefined") {
                db.templates.items["CustomPocket"]._props.Slots[0]._props.filters[0].Filter.push("54009119af1c881c07000029");
            }
            if (typeof db.templates.items["CustomPocket"]._props.Slots[1] !== "undefined") {
                db.templates.items["CustomPocket"]._props.Slots[1]._props.filters[0].Filter.push("54009119af1c881c07000029");
            }
            if (typeof db.templates.items["CustomPocket"]._props.Slots[2] !== "undefined") {
                db.templates.items["CustomPocket"]._props.Slots[2]._props.filters[0].Filter.push("54009119af1c881c07000029");
            }
        }

        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}: Cached Successfully`);
    }
}

module.exports = { mod: new SpecSlots() }