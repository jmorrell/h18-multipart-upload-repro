#!/usr/bin/env node

const http = require('http')
const express = require('express');

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method === 'POST') {
    res.writeHead(400);
    res.end('App must be updated. App version is required');
    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    `<form action="/upload" enctype="multipart/form-data" method="post">
      <input type="text" name="title"><br>
      <input type="file" name="upload" multiple="multiple"><br>
      <input type="submit" value="Upload">
     </form>`
  );
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))
