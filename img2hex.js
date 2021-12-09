// Require file system access
fs = require("fs");

// Read file buffer
imgReadBuffer = fs.readFileSync("test-pattern.jpg");

// Encode image buffer to hex
//imgHexEncode = new Buffer(imgReadBuffer).toString("hex");
// @deprecated — since v10.0.0 - Use Buffer.from(string[, encoding]) instead.
imgHexEncode = imgReadBuffer.toString("hex");

// Output encoded data to console
console.log(imgHexEncode);

// Decode hex
//var imgHexDecode = new Buffer(imgHexEncode, 'hex');
// @deprecated — since v10.0.0 - Use Buffer.from(string[, encoding]) instead.
var imgHexDecode = Buffer.from(imgHexEncode, "hex");

// Save decoded file file system
fs.writeFileSync("decodedHexImage.jpg", imgHexDecode);
