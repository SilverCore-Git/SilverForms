/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * 
**/

// libs
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// require data
const top = require('./top.js'); top();
const { loggerPrefix, srvPort, srvHostname, recketName } = require('./config.json');
const { cilentHostname, cilentHostname2, cilentHostname3, cilentHostname4, cilentHostname5 } = require('./config.json');
import index from './public/index.html';

// creating var
const prefix = loggerPrefix;
const hostname = srvHostname;
const port = srvPort;
const client1host = cilentHostname;
const client2host = cilentHostname2;
const client3host = cilentHostname3;
const client4host = cilentHostname4;
const client5host = cilentHostname5;
const allClientHost = [
    client1host, 
    client2host,
    client3host,
    client4host,
    client5host,
    hostname
];

// starting loading app
console.log('―――――――――――――――――― { Silver Forms } ――――――――――――――――――')
console.log(prefix + 'starting loading app...')
const app = express();


// loading SSL (with letsencrypt)
console.log(prefix + 'configur sll option...')
const options = {
    key: fs.readFileSync(`/etc/letsencrypt/live/${hostname}/privkey.pem`, 'utf8'),
    cert: fs.readFileSync(`/etc/letsencrypt/live/${hostname}/fullchain.pem`, 'utf8'),
};
console.log(prefix + 'loading ssl in : ');
console.log(options)

// Configur CORS for allowed all client host and srvhostname (in config.json)
console.log(prefix + 'configur origin of corse...')
app.use(cors({
    origin: allClientHost,
}));
console.log(prefix + 'Corse is configur for allowed client domaine :');
console.log(allClientHost);

// Middleware pour analyser les corps de requêtes en JSON
app.use(bodyParser.json());

// afficher la page index.ejs (equivalent html avec variables) sur https://hostname:port/
console.log(prefix + 'Configuration of main page : ', index);
app.get('/', (req, res) => {
    res.send(index);
});

// recket link (the fontend send data to this url)
console.log(prefix + 'Configuration of recket...');
console.log(prefix + 'Recket link is :', `https://${hostname}:${port}/send-SilverForms/${recketName}`)
app.post(`/send-SilverForms/${recketName}`, (req, res) => {
    const { title, content, author, publish_date } = req.body;


    // Vérifier si tous les champs sont fournis
    if (!title || !content || !author || !publish_date) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    const filePath = path.join(__dirname, '../../../dium/launcher/news.json');

    // Lire le fichier JSON existant
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur de lecture du fichier.' });
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            return res.status(500).json({ message: 'Erreur de parsing du fichier JSON.' });
        }

        // Ajouter la nouvelle entrée
        jsonData.push({ title, content, author, publish_date });

        // Réécrire dans le fichier JSON
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de l\'écriture dans le fichier.' });
            }
            res.status(200).json({ message: 'Article ajouté avec succès !' });
        });
    });
});

// Démarrer le serveur HTTPS
console.log(prefix + 'Loading is end !!');
console.log(prefix + `Starting app now to url : https://${hostname}:${port}/`);
https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS server listen on https://${hostname}:${port}`);
});

