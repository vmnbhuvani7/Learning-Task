import React, { useState } from 'react';
import cryptico from 'cryptico-js'
var QRCode = require('qrcode.react');
const Scancode = () => {

    // const [HexaCode, setHexaCode] = useState()
    // const generateHexString = (length) => {
    //     var ret = "";
    //     while (ret.length < length) {
    //         ret += Math.random().toString(16).substring(2);
    //     }
    //     return ret.substring(0, length);
    // }
    // const changeHandler = () => {
    //     setHexaCode(generateHexString(36))
    // }

    // var plaintext = "hiii";
    // var encrptedText = CryptoJS.MD5(plaintext)
    // alert("Encrpted Text : " + encrptedText.toString());

    var PassPhrase = "vaman";

    var Bits = 128;
    var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
    var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey);

    console.log(MattsPublicKeyString);

    return (
        <div>
            {/* {!HexaCode && <QRCode value="http://facebook.github.io/react/" />}
            {HexaCode && <QRCode value={HexaCode} />}

            <button onClick={changeHandler}>Show Hexa code</button>
            {HexaCode && (<p>code is: <b>{HexaCode}</b></p>)} */}
        </div>
    )

}

export default Scancode;
