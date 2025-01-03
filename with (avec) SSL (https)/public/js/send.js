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
console.log('Send to :', srvurl);

const confirmBlock = document.getElementById('confirmBlock');

document.getElementById('btn1').addEventListener('click', submit);

function submit(event) {
    event.preventDefault();

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
    .then(response => {
        console.log('Réponse brute du serveur:', response);
        return response.text(); // Utiliser text() pour obtenir la réponse brute
    })
    .then(responseText => {
        try {
            const responseData = JSON.parse(responseText); // Tenter de parser la réponse en JSON
            if (cfg.confirmBlock) {
                confirmBlock.style.display = 'block';
                confirmBlock.innerHTML = `<p style="color= green">Données envoyées avec succès !!`;
            }
            console.log(responseData);
        } catch (error) {
            console.error("Erreur de parsing JSON :", error);
            if (cfg.confirmBlock) {
                confirmBlock.style.display = 'block';
                confirmBlock.innerHTML = "Erreur de format de réponse. Vérifiez le serveur.";
            }
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