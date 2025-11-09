using BepInEx;
using BepInEx.Configuration;
using SpecialSlots_Client.Utilities;
using System;
using static SpecialSlots_Client.Utilities.VersionChecker;

namespace SpecialSlots_Client
{
    [BepInPlugin("com.jbs4bmx.specialslots", "SpecialSlots", "4.0.2")]
    [BepInDependency("com.SPT.core", "4.0.0")]
    public class SlotsPlugin : BaseUnityPlugin
    {
        public const int TarkovVersion = 40087;
        public static SlotsPlugin Instance { get; private set; }
        public ConfigEntry<bool> Enable { get; private set; }
        public ConfigEntry<int> FramesToWait { get; private set; }

        private void Awake()
        {
            // Verify EFT version is correct.
            if (!VersionChecker.CheckEftVersion(Logger, Info, Config))
            {
                throw new Exception("Invalid EFT Version");
            }

            SlotsPlugin.Instance = this;
            Enable = Config.Bind<bool>(
                "General",
                "Enable",
                true,
                new ConfigDescription
                (
                    "Enable or disable this service.",
                    null,
                    new ConfigurationManagerAttributes
                    {
                        Order = 2,
                    }
                )
            );
            FramesToWait = Config.Bind<int>(
                "General",
                "Frames To Wait",
                1,
                new ConfigDescription
                (
                    "Time (in seconds) to wait before the service processes.",
                    null,
                    new ConfigurationManagerAttributes
                    {
                        Order = 1,
                    }
                )
            );

            new SlotItemViewPatch().Enable();
        }
    }
}
