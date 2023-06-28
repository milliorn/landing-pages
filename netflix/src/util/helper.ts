/**
 * reset borders (the red line) when clicked
 */
 export function resetBorder({ e }: { e: { currentTarget: any } }): void {
  const tabBorder = "tab-border";
  const elements = document.getElementsByClassName(tabBorder);

  for (const el of elements) {
    el.classList.remove(tabBorder);
  }

  e.currentTarget.classList.add("tab-border");
}