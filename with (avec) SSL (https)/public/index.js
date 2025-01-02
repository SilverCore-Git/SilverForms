/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * 
**/

import config from './indexConfig.js';

const title = document.getElementsByTagName('title')[0];
const bodytitle = document.getElementById('bodytitle');

title.innerHTML = config.title;
bodytitle.innerHTML = config.bodytitle;
