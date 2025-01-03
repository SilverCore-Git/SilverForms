/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * 
**/

import cfg from '../config/indexConfig.js';

const srvurl = `https://${cfg.srvHostname}:${cfg.srvPort}/send-SilverForms/${cfg.recketName}`;

const confirmBlock = document.getElementById('confirmBlock');

document.getElementById('btn1').addEventListener('click', submit);
document.getElementById('btn2').addEventListener('click', submit);
document.getElementById('btn3').addEventListener('click', submit);

function submit() {
    let zone1 = null, zone2 = null, zone3 = null, zone4 = null, zone5 = null;

    if (cfg.zone1) zone1 = document.getElementById('inputzone1')?.value || null;
    if (cfg.zone2) zone2 = document.getElementById('inputzone2')?.value || null;
    if (cfg.zone3) zone3 = document.getElementById('inputzone3')?.value || null;
    if (cfg.zone4) zone4 = document.getElementById('inputzone4')?.value || null;
    if (cfg.zone5) zone5 = document.getElementById('inputzone5')?.value || null;

    const data = {
        zone1,
        zone2,
        zone3,
        zone4,
        zone5
    };

    fetch(srvurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (cfg.confirmBlock) {
            confirmBlock.style.display = 'block';
            confirmBlock.innerHTML = cfg.confirmBlock_OK || "Données envoyées avec succès !";
        }
    })
    .catch(error => {
        if (cfg.confirmBlock) {
            confirmBlock.style.display = 'block';
            confirmBlock.innerHTML = cfg.confirmBlock_NONE || "Une erreur s'est produite. Veuillez réessayer.";
        }
        console.error("Erreur lors de l'envoi :", error);
    });
}