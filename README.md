# Special Slots


## Description
You have 3 "SPEC" slots. My question is, "Why not allow all items to be placed in those slots?" <br>
Well, here you go. <br>
Special Slots now hold all. <br>

**New as of version 390.0.2** - Special Slots now contains both a Server and a Client mod. The Client mod (also aptly named SpecialSlots.dll) aims to hide the slot view of containers placed into a Special Slot. Some containers, such as rigs, still show their slot views when placed into Special Slots.


## Mod Compatibility
Compatible with ServerValueModifier's custom pockets. (Some limitations are expected.)
  * Special Slots are only visible when using a 1 cell width for each of the 4 pockets.
    - Exception: Using only 3 or less pockets, you can expand them horizontally so long as they don't total more than 4 wide.
    - For example; if you increase the width of your pockets to 2 cells each, then this will "push" Special Slots off screen (technically under your invetory box) and you will not be able to use them.


## Pros/Cons
Pros:
  * Special Slots can hold anything.
  * Special Slots can be used to hold containers so you can hold even more items.
  * Special Slots retain everything after death. (See 'Cons' section for the one exception - insurance.)

Cons:
  * Special Slots cannot hold stacks of objects such as Ammo unless they are in a container.
    - There no ETA for a fix for this "feature".
  * **Insurance** - Containers/Weapons/Items placed into Special Slots that have been insured will go through the insurance process upon your death.
    - For example; if you have an insured container full of awesome loot in a Special Slot when you die, then you loose the loot and the container is subject to the insurance process.


## Installation
### How to Install this Mod.
"[SPT]" = Your SPT folder path
   1. Extract the contents of the zip file into the root of your [SPT] folder.
      - That's the same location as "SPT.Server.exe" and "SPT.Launcher.exe".
   2. Edit the Config to adjust the values to your liking.
   3. Start SPT.Server.exe and wait until it fully loads.
   4. Start SPT.Launcher.exe.
   5. Now you can launch the game and profit.

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
