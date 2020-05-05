import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';

type OutputOptions = {
  width: number;
};
type Output = {
  [key: string]: OutputOptions;
};

export async function optimizeImage<O extends Output>(
  nameWithSlash: string,
  output: O,
): Promise<{ src: string; srcset: string }> {
  if (!fs.existsSync('public/uploads')) {
    fs.mkdirSync('public/uploads');
  }

  const nameWithExt = nameWithSlash.substring(1);
  const dotIndex = nameWithExt.lastIndexOf('.');
  const name = nameWithExt.substring(0, dotIndex);
  const ext = nameWithExt.substring(dotIndex + 1);
  let processor;
  if (ext === 'png') {
    processor = processPng;
  } else if (ext === 'jpg') {
    processor = processJpg;
  } else {
    throw new Error(`Unexpected extension: ${ext}`);
  }

  const results: string[] = [];
  let src = '';
  for (const key in output) {
    const inputFile = `content/uploads/${nameWithExt}`;
    const outputFile = `public/uploads/${name}.${key}.${ext}`;
    await processor(inputFile, outputFile, output[key]);
    src = `/uploads/${name}.${key}.${ext}`;
    results.push(
      // Most screens have a pixel density over 1. It's normally enough to
      // download first a low quality image, specially on mobile devices.
      `${src} ${output[key].width * 1.5}w`,
    );
  }

  return {
    src,
    srcset: results.join(', '),
  };
}

async function processPng(
  inputFile: string,
  outputFile: string,
  options: OutputOptions,
) {
  await sharp(inputFile).resize(options.width).toFile(outputFile);
  await imagemin([outputFile], {
    destination: 'public/uploads',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });
}

async function processJpg(
  inputFile: string,
  outputFile: string,
  options: OutputOptions,
) {
  await sharp(inputFile).resize(options.width).toFile(outputFile);
}
