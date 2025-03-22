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

        [PatchPostfix]
        private static void Postfix(SlotItemView __instance, Item item)
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

            StaticManager.BeginCoroutine(SlotItemViewNewSlotItemViewPatch.DoCoroutine(__instance));
        }

        private static IEnumerator DoCoroutine(SlotItemView __instance)
        {
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i++)
            {
                yield return null;
            }

            GeneratedGridsView generatedGridsView = __instance.transform.parent.GetComponentInChildren<GeneratedGridsView>();
            if (generatedGridsView != null)
            {
                generatedGridsView.GameObject.SetActive(false);
            }
        }
    }
}
