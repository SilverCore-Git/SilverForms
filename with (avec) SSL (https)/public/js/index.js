/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * 
**/

import config from '../config/indexConfig.js';
const cfg = config;

// MAIN VAR
const body = document.getElementsByTagName('body')[0];
const title = document.getElementsByTagName('title')[0];
const bodytitle = document.getElementById('bodytitle');
const confirmBlock = document.getElementById('confirmBlock');

confirmBlock.style.display = 'none';
title.innerHTML = cfg.title;
bodytitle.innerHTML = cfg.bodytitle;

if (!cfg.page) {
    body.style.display = 'none';
}


//  ZONE VAR
const zone1 = document.getElementById('zone1');
const zone1Label = document.getElementById('zone1Label');
const inputzone1 = document.getElementById('inputzone1');
const btnzone1 = document.getElementById('btnzone1');

zone1Label.innerHTML = cfg.zone1Label;
inputzone1.placeholder = cfg.inputzone1;
inputzone1.required = cfg.requireZone1;
btnzone1.innerHTML = cfg.btnzone1;

if (!cfg.zone1) {
    zone1.style.display = 'none';
} else if (!cfg.label1) {
    zone1Label.style.display = 'none';
} else if (!cfg.text1) {
    inputzone1.style.display = 'none';
} else if (!cfg.btnz1) {
    btnzone1.style.display = 'none';
};


const zone2 = document.getElementById('zone2');
const zone2Label = document.getElementById('zone2Label');
const inputzone2 = document.getElementById('inputzone2');
const btnzone2 = document.getElementById('btnzone2');

zone2Label.innerHTML = cfg.zone2Label;
inputzone2.placeholder = cfg.inputzone2;
inputzone2.required = cfg.requireZone2;
btnzone2.innerHTML = cfg.btnzone2;

if (!cfg.zone2) {
    zone2.style.display = 'none';
} else if (!cfg.label2) {
    zone2Label.style.display = 'none';
} else if (!cfg.text2) {
    inputzone2.style.display = 'none';
} else if (!cfg.btnz2) {
    btnzone2.style.display = 'none';
};


const zone3 = document.getElementById('zone3');
const zone3Label = document.getElementById('zone3Label');
const inputzone3 = document.getElementById('inputzone3');
const btnzone3 = document.getElementById('btnzone3');

zone3Label.innerHTML = cfg.zone3Label;
inputzone3.placeholder = cfg.inputzone3;
inputzone3.required = cfg.requireZone3;
btnzone3.innerHTML = cfg.btnzone3;

if (!cfg.zone3) {
    zone3.style.display = 'none';
} else if (!cfg.label3) {
    zone3Label.style.display = 'none';
} else if (!cfg.text3) {
    inputzone3.style.display = 'none';
} else if (!cfg.btnz3) {
    btnzone3.style.display = 'none';
};


const zone4 = document.getElementById('zone4');
const zone4Label = document.getElementById('zone4Label');
const inputzone4 = document.getElementById('inputzone4');
const btnzone4 = document.getElementById('btnzone4');

zone4Label.innerHTML = cfg.zone4Label;
inputzone4.placeholder = cfg.inputzone4;
inputzone4.required = cfg.requireZone4;
btnzone4.innerHTML = cfg.btnzone4;

if (!cfg.zone4) {
    zone4.style.display = 'none';
} else if (!cfg.label4) {
    zone4Label.style.display = 'none';
} else if (!cfg.text4) {
    inputzone4.style.display = 'none';
} else if (!cfg.btnz4) {
    btnzone4.style.display = 'none';
};


const zone5 = document.getElementById('zone5');
const zone5Label = document.getElementById('zone5Label');
const inputzone5 = document.getElementById('inputzone5');
const btnzone5 = document.getElementById('btnzone5');

zone5Label.innerHTML = cfg.zone5Label;
inputzone5.placeholder = cfg.inputzone5;
inputzone5.required = cfg.requireZone5;
btnzone5.innerHTML = cfg.btnzone5;

if (!cfg.zone5) {
    zone5.style.display = 'none';
} else if (!cfg.label5) {
    zone5Label.style.display = 'none';
} else if (!cfg.text5) {
    inputzone5.style.display = 'none';
} else if (!cfg.btnz5) {
    btnzone5.style.display = 'none';
};



// BTN VAR
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.innerHTML = cfg.btn1text;
btn2.innerHTML = cfg.btn2text;
btn3.innerHTML = cfg.btn3text;


if (!cfg.btn1) {
    btn1.style.display = 'none';
} else if (!btn2) {
    btn2.style.display = 'none'
} else if (!btn3) {
    btn3.style.display = 'none'
}

