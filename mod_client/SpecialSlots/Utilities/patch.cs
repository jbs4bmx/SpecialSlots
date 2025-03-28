using EFT;
using EFT.InventoryLogic;
using EFT.UI.DragAndDrop;
using SPT.Reflection.Patching;
using System.Collections;
using System.Reflection;

namespace SpecialSlots.Utilities
{
    public class SlotItemViewNewSlotItemViewPatch : ModulePatch
    {
        protected override MethodBase GetTargetMethod()
        {
            return typeof(SlotItemView).GetMethod(nameof(SlotItemView.NewSlotItemView));
        }

        [PatchPrefix]
        private static void PatchPrefix(SlotItemView __instance, Item item)
        {
            if (!SlotsPlugin.Instance.Enable.Value)
            {
                return;
            }
            if (!(item is CompoundItem lootItem))
            {
                return;
            }
            if (lootItem.Grids != null && lootItem.Grids.Length <= 0)
            {
                return;
            }
            StaticManager.BeginCoroutine(SlotItemViewNewSlotItemViewPatch.DoCoroutine1(__instance));
            StaticManager.BeginCoroutine(SlotItemViewNewSlotItemViewPatch.DoCoroutine2(__instance));
        }

        private static IEnumerator DoCoroutine1(SlotItemView __instance)
        {
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i++)
            {
                yield return null;
            }
            GeneratedGridsView generatedGridsView = __instance.transform.parent.GetComponentInChildren<GeneratedGridsView>();
            generatedGridsView.GameObject.SetActive(false);
        }

        private static IEnumerator DoCoroutine2(SlotItemView __instance)
        {
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i++)
            {
                yield return null;
            }
            GridView[] gridViews = __instance.transform.parent.GetComponentsInChildren<GridView>();
            foreach (var grid in gridViews)
            {
                grid.GameObject.SetActive(false);
            }
        }
    }
}
