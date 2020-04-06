const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

(async () => {
  // Clear previous optimized resources if necessary
  if (fs.existsSync('public/optimized')) {
    const currentFilenames = fs.readdirSync('public/optimized');
    currentFilenames.forEach((filename) => {
      fs.unlinkSync(path.join('public/optimized', filename));
    });
  }

  // Optimize images
  const files = await imagemin(['src/public/*.png', 'src/public/*.jpg'], {
    destination: 'public/optimized',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  // Hash images
  const filenameToHash = {};
  files.forEach((f) => {
    const hash = crypto.createHash('sha256');
    const data = fs.readFileSync(f.destinationPath);
    hash.update(data);

    const pathParts = path.parse(f.destinationPath);
    const filename = `${pathParts.name}${pathParts.ext}`;
    filenameToHash[filename] = `${pathParts.name}-${hash
      .digest('hex')
      .substring(0, 8)}${pathParts.ext}`;
  });

  // Dump hashes to `img-hash.json` for app consumption
  fs.writeFileSync(
    'public/optimized/img-hash.json',
    JSON.stringify(filenameToHash),
  );

  // Include hash in all file names to boost caching
  Object.entries(filenameToHash).forEach(([filename, hashedFilename]) => {
    const currentFilename = path.join('public/optimized', filename);
    const nextFilename = path.join('public/optimized', hashedFilename);
    fs.renameSync(currentFilename, nextFilename);
  });
})();
