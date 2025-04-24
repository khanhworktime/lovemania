/**
 * Preloads an array of images by creating Image objects and waiting for them to load
 * @param urls Array of image URLs to preload
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = (urls: string[]): Promise<void[]> => {
  const loadImage = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (url.startsWith("ipfs://")) {
        resolve();
        return;
      }

      const img = new Image();

      img.onload = () => {
        resolve();
      };

      img.onerror = () => {
        reject();
      };

      img.src = url;
    });
  };

  return Promise.all(urls.map((url) => loadImage(url)));
};

/**
 * Preloads a single image by creating an Image object and waiting for it to load
 * @param url URL of the image to preload
 * @returns Promise that resolves when the image is loaded
 */
export const preloadImage = (url: string): Promise<void> => {
  if (url.startsWith("ipfs://")) {
    return Promise.resolve();
  }

  return preloadImages([url]).then(() => void 0);
};
