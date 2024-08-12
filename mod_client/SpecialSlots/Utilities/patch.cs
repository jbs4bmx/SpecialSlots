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
            return typeof(SlotItemView).GetMethod("NewSlotItemView");
        }

        [PatchPostfix]
        private static void Postfix(SlotItemView __instance, Item item)
        {
            bool flag = !SlotsPlugin.Instance.Enable.Value;
            if (!flag)
            {
                LootItemClass lootItemClass = item as LootItemClass;
                bool flag2 = lootItemClass == null;
                if (!flag2)
                {
                    bool flag3 = lootItemClass.Grids != null && lootItemClass.Grids.Length == 0;
                    if (!flag3)
                    {
                        StaticManager.BeginCoroutine(SlotItemViewNewSlotItemViewPatch.DoCoroutine(__instance));
                    }
                }
            }
        }

        private static IEnumerator DoCoroutine(SlotItemView __instance)
        {
            int num;
            for (int i = 0; i < SlotsPlugin.Instance.FramesToWait.Value; i = num + 1)
            {
                yield return null;
                num = i;
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
