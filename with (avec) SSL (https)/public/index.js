const config = require('./indexConfig.json');

const title = document.getElementsByTagName('title')[0];
const bodytitle = document.getElementById('bodytitle');


title.inerHTML = config.title;
toptitle.innerHTML = config.bodytitle