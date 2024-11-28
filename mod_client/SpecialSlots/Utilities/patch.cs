using System;
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
            //return typeof(SlotItemView).GetMethod(nameof(SlotItemView.NewSlotItemView));
            return typeof(SlotItemView).GetMethod("NewSlotItemView");
        }

        [PatchPostfix]
        private static void Postfix(SlotItemView __instance, Item item)
        {
            bool flag = !SlotsPlugin.Instance.Enable.Value;
            if (!flag)
            {
                CompoundItem compoundItem = item as CompoundItem;
                bool flag2 = compoundItem == null;
                if (!flag2)
                {
                    bool flag3 = compoundItem.Grids != null && compoundItem.Grids.Length == 0;
                    if (!flag3)
                    {
                        StaticManager.BeginCoroutine(SlotItemViewNewSlotItemViewPatch.DoCoroutine(__instance));
                    }
                }
            }
        }

        private static IEnumerator DoCoroutine(SlotItemView __instance)
        {
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i++)
            {
                yield return null;
            }

            GeneratedGridsView generatedGridsView = __instance.transform.parent.GetComponentInChildren<GeneratedGridsView>();
            bool flag = generatedGridsView != null;
            if (flag)
            {
                generatedGridsView.GameObject.SetActive(false);
            }
            yield break;
        }
    }
}
