const express = require ('express')
const app = express ();
const path = require('path')
const port = 8080;

app.use(express.static('html_pages'));

// express.static(root, [options]) is a built-in Express middleware function 
// and is designed to serve static files such as my HTML files
// in html_pages fodler.

app.get('/', (req, res) => res.sendFile(html_pages + '/index.html'));
app.get('/', (req, res) => res.sendFile(html_pages + '/index.html'));
app.get('/', (req, res) => res.sendFile(html_pages + '/index.html'));