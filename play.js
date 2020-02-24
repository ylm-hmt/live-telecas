const http = require('http');
const fs = require('fs');
const path = require('path');
const openUrl = require('./utils/openUrl');

let PORT = 9001

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if (req.url.indexOf('utils') > -1) {
    res.end(fs.readFileSync(__dirname + req.url, {
      encoding: 'utf-8'
    }));
  }
  res.end(fs.readFileSync(__dirname + '/template/play.html', {
      encoding: 'utf-8'
  }));
});
server.listen(PORT, () => {
  console.log('service start successful', `http://127.0.0.1:${PORT}`)
  // openUrl(`http://127.0.0.1:${PORT}`)
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('地址正被使用，重试中...');
    setTimeout(() => {
      server.close();
      PORT = PORT + 1
      server.listen(PORT + 1, '127.0.0.1');
    }, 1000);
  } else {
    console.error(e);
  }
})