# Special Slots


## Description
You have 3 "SPEC" slots. My question is, "Why not allow all items to be placed in those slots?" <br>
Well, here you go. <br>
Special Slots now hold all. <br>

## Mod Compatibility
Compatible with changes to pockets made by SVM.

## Pros/Cons
Pros:
  * Special Slots can hold anything.
  * Special Slots can be used to hold containers so you can hold even more items.
  * Special Slots retain everything after death. (See 'Cons' section for the one exception.)

Cons:
  * Special Slots cannot hold stacks of objects such as Ammo unless they are in a container.
  * Special Slots use containers much like the Armor, Backpack, and Secure Container slots so the containers expand when placed in the slots. SVM now has an option to hide this "feature".
  * Containers/Weapons/Items placed into Special Slots that have been insured will go through the insurance process upon your death. For example: if you have an insured container full of awesome loot in a Special Slot when you die, then you loose the loot and the container is subject to the insurance process.


## Installation
### How to Install this Mod.
"[SPT]" = Your SPT folder path
   1. Extract the contents of the zip file into the root of your [SPT] folder.
      - That's the same location as "SPT.Server.exe" and "SPT.Launcher.exe".
   2. Edit the Config to adjust the values to your likeing.
   3. Start SPT.Server.exe and wait until it fully loads.
   4. Start SPT.Launcher.exe but do not launch the game.
   5. Run the cache cleaner found in the launcher's settings menu.
   6. Now you can launch the game and profit.

### Common Questions
   1. Where do I report bugs found with the current version of the mod?
      - You can report bugs for the current version of this mod here: [SS Mod Page](https://hub.sp-tarkov.com/files/file/775-special-slots/).


## Configuration Guide
Edit '.\config.jsonc' file as desired. <br>
config.jsonc contents
```jsonc
{
    // ====================================================================================================
    // CAPABILITY_SELECTION
    // Choose 1 or more options.
    // Determines the version of the mod to load. (Default = "AllItems")
    // NOTE 1: If "AllItems" is set to "true", the other options will be ignored.
    // NOTE 2: Set "AllItems" to false if using the any of the other options.
    // NOTE 3: Special Items will always be allowed in the Special Slots. (Game default.)
    // ====================================================================================================

    "AllItems": true,

    // ====================================================================================================
    // NOTE: All options below this line require that "AllItems" be set to false for them to work.
    // ====================================================================================================
    "LimitedItems": {
        "Meds": false,
        "Firearms": false,
        "FoodAndDrink": false,
        "Throwables": false,
        "BarterItems": false,
        "Maps": false,
        "SecureContainers": false,
        "Containers": false,
        "Rigs": false,
        "Armors": false,
        "RepairKits": false
    }
}
```


## Good Luck Soldier!


## Disclaimer
**This mod is provided _as-is_ with _no guarantee_ of support.**
