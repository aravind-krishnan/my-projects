const crypto = require('crypto');
const cipher = crypto.createCipher('aes192','a password');
var encrypted = cipher.update('hi everyone','utf8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);


const decipher = crypto.createDecipher('aes192','a password');
var decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
