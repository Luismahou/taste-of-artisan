import lockfile from 'lockfile';
import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

type OutputOptions = {
  width: number;
};
type Output = {
  [key: string]: OutputOptions;
};

// Promisify `lockfile.lock`
function lock(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    lockfile.lock(path, { wait: 10000 }, (err: Error | null) => {
      if (err) {
        reject();
      }
      resolve();
    });
  });
}

export async function optimizeImage<O extends Output>(
  nameWithSlash: string,
  output: O,
): Promise<{ src: string; srcset: string }> {
  // Ensure we're not optimizing the same image at the same time
  const lockPath = `content/uploads${nameWithSlash}.lock`;
  await lock(lockPath);

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
    const hashedFilename = hashFile(outputFile);
    src = `/uploads/${hashedFilename}`;
    results.push(
      // Most screens have a pixel density over 1. It's normally enough to
      // download first a low quality image, specially on mobile devices.
      `${src} ${output[key].width * 1.5}w`,
    );
  }

  lockfile.unlockSync(lockPath);

  return {
    src,
    srcset: results.join(', '),
  };
}

function hashFile(src: string) {
  const hash = crypto.createHash('sha256');
  const data = fs.readFileSync(src);
  hash.update(data);

  const pathParts = path.parse(src);
  const hashedFilename = `${pathParts.name}-${hash
    .digest('hex')
    .substring(0, 8)}${pathParts.ext}`;
  fs.renameSync(src, `${path.join(pathParts.dir, hashedFilename)}`);
  return hashedFilename;
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
