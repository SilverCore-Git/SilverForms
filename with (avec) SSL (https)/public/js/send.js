/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * 
**/

import cfg from '../../config/indexConfig.js';
import config from '../../config/config.json';

const srvurl = `${config.srvHostname}:${config.srvPort}/send-SilverForms/${config.recketName}`;

const confirmBlock = document.getElementById('confirmBlock');

document.getElementById('btn1').addEventListener('click', submit);
document.getElementById('btn2').addEventListener('click', submit);
document.getElementById('btn3').addEventListener('click', submit);

function submit() {
    if (cfg.zone1) {
        const zone1 = document.getElementById('inputzone1')
    } else if (cfg.zone2) {
        const zone2 = document.getElementById('inputzone2')
    } else if (cfg.zone3) {
        const zone3 = document.getElementById('inputzone3')
    } else if (cfg.zone4) {
        const zone4 = document.getElementById('inputzone4')
    } else if (cfg.zone5) {
        const zone5 = document.getElementById('inputzone5')
    };

    const data = {
        "zone1": zone1,
        "zone2": zone2,
        "zone3": zone3,
        "zone4": zone4,
        "zone5": zone5
    };

    fetch(srvurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (cfg.confirmBlock) {
            confirmBlock.style.display = 'block';
            confirmBlock.innerHTML = cfg.confirmBlock_OK;
        }
    })
    .catch(error => {
        if (cfg.confirmBlock) {
            confirmBlock.style.display = 'block';
            confirmBlock.innerHTML = cfg.confirmBlock_NONE;
        }
    })


}