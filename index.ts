import {JSEncrypt} from "jsencrypt";

const pub_key = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALR/NfKef6S/6lJI5dT6y5LHnSa8U2PyvUGums2HxTaIRdSY9SwzIR/YyER809nmNOou1m4yZIVmcNsalI+rOh8CAwEAAQ==';


export function encrypt(data) {
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(pub_key);
    let encryptData = encrypt.encrypt(data);
    return encryptData;
}
console.log("Selam", encrypt("selam"));