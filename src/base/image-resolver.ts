import imageMap from '../../public/optimized/img-hash.json';

const typedImageMap = imageMap as { [key: string]: string };
export function resolveImage(imageName: string): string {
  const hashedImageName = typedImageMap[imageName] as string;
  if (!hashedImageName) {
    throw new Error(`No image for: ${imageName}`);
  }

  return `/optimized/${hashedImageName}`;
}
