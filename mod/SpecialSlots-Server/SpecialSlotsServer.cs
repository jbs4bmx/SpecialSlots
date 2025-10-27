using SPTarkov.DI.Annotations;
using SPTarkov.Server.Core.DI;
using SPTarkov.Server.Core.Helpers;
using SPTarkov.Server.Core.Models.Common;
using SPTarkov.Server.Core.Models.Spt.Mod;
using SPTarkov.Server.Core.Models.Utils;
using SPTarkov.Server.Core.Services;
using System.Reflection;


namespace SpecialSlots_Server;

public record ModMetadata : AbstractModMetadata
{
    public override string ModGuid { get; init; } = "com.jbs4bmx.SpecialSlots";
    public override string Name { get; init; } = "ReadJsonConfigExample";
    public override string Author { get; init; } = "SpecialSlots";
    public override List<string>? Contributors { get; init; }
    public override SemanticVersioning.Version Version { get; init; } = new("4.0.1");
    public override SemanticVersioning.Range SptVersion { get; init; } = new("~4.0.0");
    public override List<string>? Incompatibilities { get; init; }
    public override Dictionary<string, SemanticVersioning.Range>? ModDependencies { get; init; }
    public override string? Url { get; init; }
    public override bool? IsBundleMod { get; init; }
    public override string? License { get; init; } = "MIT";
}

[Injectable(TypePriority = OnLoadOrder.PostDBModLoader + 1)]
public class SpecialSlotsServer(
    ISptLogger<SpecialSlotsServer> logger,
    DatabaseService databaseService,
    ModHelper modHelper) : IOnLoad
{
    public Task OnLoad()
    {
        var pathToMod = modHelper.GetAbsolutePathToModFolder(Assembly.GetExecutingAssembly());
        var config = modHelper.GetJsonDataFromFile<ModConfig>(pathToMod, "config.jsonc");

        var items = databaseService.GetItems();
        const string svmId = "a8edfb0bce53d103d3f62b9b";

        List<MongoId> IdList = [];

        var defaultPockets = items.GetValueOrDefault(ItemTpl.POCKETS_1X4_SPECIAL);
        var altPockets = items.GetValueOrDefault(ItemTpl.POCKETS_1X4_TUE);
        var svmPockets = items.GetValueOrDefault(new MongoId(svmId));

        if (config.AllItems is bool allitems && allitems)
        {
            allitems = config.AllItems;
        }

        if (allitems)
        {
            if (defaultPockets?.Properties?.Slots != null)
            {
                foreach (var x in defaultPockets.Properties.Slots)
                {
                    if (x?.Properties?.Filters != null)
                    {
                        foreach (var y in x.Properties.Filters)
                        {
                            y.Filter?.UnionWith([
                                "54009119af1c881c07000029"
                            ]);
                        }
                    }
                }
            }
            if (altPockets?.Properties?.Slots != null)
            {
                foreach (var x in altPockets.Properties.Slots)
                {
                    if (x?.Properties?.Filters != null)
                    {
                        foreach (var y in x.Properties.Filters)
                        {
                            y.Filter?.UnionWith([
                                "54009119af1c881c07000029"
                            ]);
                        }
                    }
                }
            }
            if (svmPockets?.Properties?.Slots != null)
            {
                foreach (var x in svmPockets.Properties.Slots)
                {
                    if (x?.Properties?.Filters != null)
                    {
                        foreach (var y in x.Properties.Filters)
                        {
                            y.Filter?.UnionWith([
                                "54009119af1c881c07000029"
                            ]);
                        }
                    }
                }
            }
            logger.Info("All items have been added to special slots.");
        }
        else
        {
            if (config.LimitedItems?.Meds is bool medical && medical)
            {
                IdList.AddRange([
                    "543be5664bdc2dd4348b4569",
                    "5448f39d4bdc2d0a728b4568",
                    "5448f3a14bdc2d27728b4569",
                    "5448f3a64bdc2d60728b456a",
                    "5448f3ac4bdc2dce718b4569",
                    "57864c8c245977548867e7f1"
                ]);
            }
            if (config.LimitedItems?.Firearms is bool firearms && firearms)
            {
                IdList.AddRange([
                    "5447b5cf4bdc2d65278b4567",
                    "5447b5e04bdc2d62278b4567",
                    "5447b5f14bdc2d61278b4567",
                    "5447b5fc4bdc2d87278b4567",
                    "5447b6094bdc2dc3278b4567",
                    "5447b6194bdc2d67278b4567",
                    "5447b6254bdc2dc3278b4568",
                    "5447bed64bdc2d97278b4568",
                    "5447bedf4bdc2d87278b4568",
                    "5447bee84bdc2dc3278b4569",
                    "617f1ef5e8b54b0998387733"
                ]);
            }
            if (config.LimitedItems?.FoodAndDrink is bool foodanddrink && foodanddrink)
            {
                IdList.AddRange([
                    "543be6674bdc2df1348b4569",
                    "5448e8d04bdc2ddf718b4569",
                    "5448e8d64bdc2dce718b4568"
                ]);
            }
            if (config.LimitedItems?.Throwables is bool throwables && throwables)
            {
                IdList.AddRange([
                    "543be6564bdc2df4348b4568"
                ]);
            }
            if (config.LimitedItems?.BarterItems is bool barteritems && barteritems)
            {
                IdList.AddRange([
                    "5448eb774bdc2d0a728b4567"
                ]);
            }
            if (config.LimitedItems?.Maps is bool maps && maps)
            {
                IdList.AddRange([
                    "567849dd4bdc2d150f8b456e"
                ]);
            }
            if (config.LimitedItems?.SecureContainers is bool securecontainers && securecontainers)
            {
                IdList.AddRange([
                    "59db794186f77448bc595262",
                    "5c093ca986f7740a1867ab12",
                    "5857a8b324597729ab0a0e7d",
                    "5c0a794586f77461c458f892",
                    "665ee77ccf2d642e98220bca",
                    "5857a8bc2459772bad15db29",
                    "544a11ac4bdc2d470e8b456a",
                    "664a55d84a90fc2c8a6305c9",
                    "64f6f4c5911bcdfe8b03b0dc"
                ]);
            }
            if (config.LimitedItems?.Containers is bool containers && containers)
            {
                IdList.AddRange([
                    "5795f317245977243854e041",
                    "5448e53e4bdc2d60728b4567"
                ]);
            }
            if (config.LimitedItems?.Rigs is bool rigs && rigs)
            {
                IdList.AddRange([
                    "5448e5284bdc2dcb718b4567"
                ]);
            }
            if (config.LimitedItems?.Armors is bool armors && armors)
            {
                IdList.AddRange([
                    "5448e54d4bdc2dcc718b4568",
                    "57bef4c42459772e8d35a53b"
                ]);
            }
            if (config.LimitedItems?.RepairKits is bool repairkits && repairkits)
            {
                IdList.AddRange([
                    "616eb7aea207f41933308f46"
                ]);
            }
            if (config.LimitedItems?.CustomItems is bool customitems && customitems)
            {
                if (config.CustomIDsList != null)
                {
                    //IdList.AddRange(config.CustomIDsList.Select(id => new MongoId(id)));

                    foreach (var idStr in config.CustomIDsList)
                    {
                        try
                        {
                            var mongoId = new MongoId(idStr);
                            IdList.Add(mongoId);
                        }
                        catch
                        {
                            logger.Warning($"Failed to parse MongoId '{idStr}'");
                        }
                    }

                }
                else
                {
                    logger.Warning("CustomItems is enabled but no CustomIDsList is provided in the config.");
                }
            }

            // Add IdList to filters for pockets.
            if (defaultPockets?.Properties?.Slots != null)
            {
                foreach (var x in defaultPockets.Properties.Slots)
                {
                    if (x?.Properties?.Filters != null)
                    {
                        foreach (var y in x.Properties.Filters)
                        {
                            y.Filter?.UnionWith(IdList);
                        }
                    }
                }
            }
            if (altPockets?.Properties?.Slots != null)
            {
                foreach (var x in altPockets.Properties.Slots)
                {
                    if (x?.Properties?.Filters != null)
                    {
                        foreach (var y in x.Properties.Filters)
                        {
                            y.Filter?.UnionWith(IdList);
                        }
                    }
                }
            }
            if (svmPockets?.Properties?.Slots != null)
            {
                foreach (var x in svmPockets.Properties.Slots)
                {
                    if (x?.Properties?.Filters != null)
                    {
                        foreach (var y in x.Properties.Filters)
                        {
                            y.Filter?.UnionWith(IdList);
                        }
                    }
                }
            }
            logger.Info("Limited items have been added to special slots.");
        }

        return Task.CompletedTask;
    }
}


public class ModConfig
{
    public bool AllItems { get; set; }
    public ModLimitedItems? LimitedItems { get; set; }
    public string[]? CustomIDsList { get; set; }
}

public class ModLimitedItems
{
    public bool Meds { get; set; }
    public bool Firearms { get; set; }
    public bool FoodAndDrink { get; set; }
    public bool Throwables { get; set; }
    public bool BarterItems { get; set; }
    public bool Maps { get; set; }
    public bool SecureContainers { get; set; }
    public bool Containers { get; set; }
    public bool Rigs { get; set; }
    public bool Armors { get; set; }
    public bool RepairKits { get; set; }
    public bool CustomItems { get; set; }
}
