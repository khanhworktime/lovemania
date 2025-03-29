export function getFileFromBase64(string64: string, fileName: string) {
  const [header, content] = string64.split(",");
  const imageContent = atob(content);
  const buffer = new ArrayBuffer(imageContent.length);
  const view = new Uint8Array(buffer);

  // Extract mime type from base64 header
  const type = header.match(/data:(.*?);/)?.[1] || "image/jpeg"; // Fallback to image/jpeg if not found

  for (let n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }
  const blob = new Blob([buffer], { type });
  return new File([blob], fileName, {
    lastModified: new Date().getTime(),
    type,
  });
}
