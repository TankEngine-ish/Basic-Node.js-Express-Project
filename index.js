const express = require ('express')
const app = express ();
const path = require('path')
const port = 8080;

app.use(express.static('html_pages'));

// express.static(root, [options]) is a built-in Express middleware function 
// and is designed to serve static files such as my HTML files
// in html_pages fodler.

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'html_pages', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'html_pages', 'about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, 'html_pages', 'contact-me.html')));

// The path.join() method joins all given path segments together.

app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'html_pages', '404.html')));

//res.status function accepts a single parameter code that holds the HTTP status code. 


app.listen(port, () => console.log(`Server is now running on http://localhost:${port}`));
//the log function prints a message on the terminal when you run node index.js