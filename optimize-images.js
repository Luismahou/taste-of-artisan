const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

(async () => {
  const currentFilenames = fs.readdirSync('public/optimized');
  currentFilenames.forEach(filename => {
    fs.unlinkSync(path.join('public/optimized', filename));
  });

  const files = await imagemin(['src/public/*.png'], {
    destination: 'public/optimized',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  const filenameToHash = {};
  files.forEach(f => {
    const hash = crypto.createHash('sha256');
    const data = fs.readFileSync(f.destinationPath);
    hash.update(data);

    const pathParts = path.parse(f.destinationPath);
    const filename = `${pathParts.name}${pathParts.ext}`;
    filenameToHash[filename] = `${pathParts.name}-${hash
      .digest('hex')
      .substring(0, 8)}${pathParts.ext}`;
  });

  fs.writeFileSync(
    'public/optimized/img-hash.json',
    JSON.stringify(filenameToHash),
  );

  Object.entries(filenameToHash).forEach(([filename, hashedFilename]) => {
    const currentFilename = path.join('public/optimized', filename);
    const nextFilename = path.join('public/optimized', hashedFilename);
    fs.renameSync(currentFilename, nextFilename);
  });
})();
