const { extractIcon } = require('@inithink/exe-icon-extractor');
const path = require('path');
const fs = require('fs');

function doExtraction (pathIn, pathOut) {
    const buffer = extractIcon(pathIn, "large");
    fs.writeFileSync(pathOut, buffer);
}

const pathIn = "path\\to\\exe";
const fileIn = path.basename(pathIn);
const fileOut = fileIn.slice(0, -path.extname(fileIn).length) + ".ico";
const pathOut = path.join(__dirname, 'icons', fileOut);

doExtraction(pathIn, pathOut);

console.log(pathOut);