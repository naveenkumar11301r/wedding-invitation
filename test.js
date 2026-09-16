const fs = require('fs');
const https = require('https');
https.get('https://naviramya.netlify.app/opengraph-image?25f2ddefe1f73d07', (res) => {
    console.log(res.statusCode, res.headers['content-type']);
    let size = 0;
    res.on('data', chunk => size += chunk.length);
    res.on('end', () => console.log('Size:', size));
});
