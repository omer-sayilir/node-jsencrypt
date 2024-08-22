var fs = require('fs');
var forge = require('node-forge');
var {
    parse
} = require("csv-parse");


const pub_key_pem = `-----BEGIN PUBLIC KEY-----
*******
-----END PUBLIC KEY-----`;
const writeStream = fs.createWriteStream('result.csv');




function encrypt(data) {
    const publicKey = forge.pki.publicKeyFromPem(pub_key_pem);
    const encrypted = publicKey.encrypt(data, 'RSAES-PKCS1-V1_5');
    return forge.util.encode64(encrypted);
}


const encryptedUserName = encrypt("nightwish");
const encryptedPassw = encrypt("mynameisNEMO");
console.log("Encrypted data:", encryptedUserName, encryptedPassw);

var csvData = [];
fs.createReadStream("input.csv")
    .pipe(parse({
        delimiter: ',',
        skip_empty_lines: true
    }))
    .on('data', function(csvrow) {
        console.log("csv row", csvrow);
        csvData.push(csvrow, encrypt(csvrow[0]), encrypt(csvrow[1]));
        writeStream.write(csvrow[0] + "," + csvrow[1] + "," + encrypt(csvrow[0]) + "," + encrypt(csvrow[1]) + '\n');
    })