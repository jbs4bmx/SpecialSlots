using EFT;
using EFT.InventoryLogic;
using EFT.UI.DragAndDrop;
using SPT.Reflection.Patching;
using System.Collections;
using System.Reflection;

namespace SpecialSlots_Client.Utilities
{
    public class SlotItemViewPatch : ModulePatch
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
            StaticManager.BeginCoroutine(SlotItemViewPatch.DoCoroutine1(__instance));
            StaticManager.BeginCoroutine(SlotItemViewPatch.DoCoroutine2(__instance));
        }

        private static IEnumerator DoCoroutine1(SlotItemView __instance)
        {
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i++)
            {
                yield return null;
            }

            GeneratedGridsView generatedGridsView = __instance.transform.parent.GetComponentInChildren<GeneratedGridsView>();
            if (generatedGridsView?.GameObject != null)
            {
                generatedGridsView.GameObject.SetActive(false);
            }
        }

        private static IEnumerator DoCoroutine2(SlotItemView __instance)
        {
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i++)
            {
                yield return null;
            }

            GridView[] gridViews = __instance.transform.parent.GetComponentsInChildren<GridView>();
            if (gridViews == null || gridViews.Length == 0)
            {
                yield break;
            }

            foreach (var grid in gridViews)
            {
                if (grid?.GameObject != null)
                {
                    grid.GameObject.SetActive(false);
                }
            }
        }
    }
}
