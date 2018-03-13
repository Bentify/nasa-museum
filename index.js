var express = require("express");
var expressStaticGzip = require("express-static-gzip");
var app = express();

app.get('/:path*', (req, res) => {
  console.log('gzipping', req)
  if (req.url.match('\.gz\.?')) res.set('content-encoding', 'gzip')
  res.sendFile(__dirname + req.url.replace(/\?.+/, ''))
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.listen(8080, () => { console.log('xxx') })
