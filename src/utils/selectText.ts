export function selectText(containerid: string) {
  if (!document || !window) return;

  if (window.getSelection) {
    const range = document.createRange();
    const container = document.getElementById(containerid);
    if (container) {
      range.selectNode(container);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  }
}
