/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * test
**/

// libs
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// require data
const top = require('./assets/top.js'); top();
const cfg = require('./public/config/config.js');

// creating var
const prefix = cfg.loggerPrefix;
const hostname = cfg.srvHostname;
const port = cfg.srvPort;
const htt = 'https://'
const client1host = htt + cfg.cilentHostname;
const client2host = htt + cfg.cilentHostname2;
const client3host = htt + cfg.cilentHostname3;
const client4host = htt + cfg.cilentHostname4;
const client5host = htt + cfg.cilentHostname5;
const fullhostname = htt + hostname + ':' + port;
const allClientHost = [
    client1host, 
    client2host,
    client3host,
    client4host,
    client5host,
    fullhostname,
    hostname
];

// starting loading app
console.log('―――――――――――――――――― { Silver Forms } ――――――――――――――――――')
console.log(prefix, 'starting loading app...')
const app = express();

// loading SSL (with letsencrypt)
console.log(prefix, 'configur sll option...')
const options = {
    key: fs.readFileSync(`/etc/letsencrypt/live/${hostname}/privkey.pem`, 'utf8'),
    cert: fs.readFileSync(`/etc/letsencrypt/live/${hostname}/fullchain.pem`, 'utf8'),
};
if (cfg.showsslkey) { // it's dangerous !!
    console.log(prefix, 'loading ssl with key : ');
    console.log(options)
}

// Configur CORS for allowed all client host and srvhostname (in config.json)
console.log(prefix, 'configur origin of corse...')
app.use(cors({
    origin: allClientHost,
}));
console.log(prefix, 'Corse is configur for allowed client domaine :');
console.log(allClientHost);

// Middleware pour analyser les corps de requêtes en JSON
app.use(bodyParser.json());

// afficher la page index.html dans public/ (equivalent html avec variables) sur https://hostname:port/
console.log(prefix, 'Configuration of main page in public/ ');
app.use(express.static(path.join(__dirname, 'public')));

// recket link (the fontend send data to this url)
console.log(prefix, 'Configuration of recket...');
console.log(prefix, 'Recket link is :', `https://${hostname}:${port}/send-SilverForms/${cfg.recketName}`)

app.post(`/send-SilverForms/${cfg.recketName}`, (req, res) => {

    const { zone1, zone2, zone3, zone4, zone5 } = req.body;

    const databasePath = path.join(__dirname, cfg.databasePath);

    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            console.log(prefix, 'Error on reading .json :', data);
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.log(prefix, 'Error parsing json.');
        };

        jsonData.push({ zone1, zone2, zone3, zone4, zone5 });

        fs.writeFile(databasePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.log(prefix, 'Error on writing JSON.')
            }
            console.log(prefix, 'Data adding with succes !')
        });
    });
});

// Démarrer le serveur HTTPS
console.log(prefix, 'Loading is end !!');
console.log(prefix, `Starting app now to url : https://${hostname}:${port}/`);
https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS server listen on https://${hostname}:${port}`);
});

